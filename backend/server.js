const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "tik-hr-resumes",
    resource_type: "raw",
    allowed_formats: ["pdf", "doc", "docx", "jpg", "png"]
  }
});
const upload = multer({ storage });

// ---------------- AUTH MIDDLEWARE ----------------
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // "Bearer <token>"

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.admin = decoded;
    next();
  });
}

// ---------------- LOGIN ROUTE ----------------
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return res.json({ message: "Login successful", token });
  }

  res.status(401).json({ message: "Invalid email or password" });
});

// ---------------- Schemas ----------------
const candidateSchema = new mongoose.Schema({
  name: String,
  qualification: String,
  passedout: String,
  experience: String,
  jobTitle: String,
  contact: String,
  email: String,
  referral: String,
  resume: String,
  createdAt: { type: Date, default: Date.now }
});

const joinSchema = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  qualification: String,
  experience: String,
  role: String,
  location: String,
  referral: String,
  resume: String,
  createdAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Candidate = mongoose.model("Candidate", candidateSchema);
const JoinCandidate = mongoose.model("JoinCandidate", joinSchema);
const Contact = mongoose.model("Contact", contactSchema);

// ---------------- APPLY NOW (public submit) ----------------
app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    const newCandidate = new Candidate({
      name: req.body.name,
      qualification: req.body.qualification,
      passedout: req.body.passedout,
      experience: req.body.experience,
      jobTitle: req.body.jobTitle,
      contact: req.body.contact,
      email: req.body.email,
      referral: req.body.referral || "N/A",
      resume: req.file ? req.file.path : ""
    });
    await newCandidate.save();
    res.json({ message: "Saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving candidate" });
  }
});

// 🔒 Protected — view candidates
app.get("/candidates", verifyToken, async (req, res) => {
  try {
    const data = await Candidate.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching candidates" });
  }
});

// ---------------- JOIN US (public submit) ----------------
app.post("/join", upload.single("resume"), async (req, res) => {
  try {
    const newCandidate = new JoinCandidate({
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      qualification: req.body.qualification,
      experience: req.body.experience,
      role: req.body.role,
      location: req.body.location,
      referral: req.body.referral || "N/A",
      resume: req.file ? req.file.path : ""
    });
    await newCandidate.save();
    res.json({ message: "Join data saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving data" });
  }
});

// 🔒 Protected — view join applications
app.get("/join-candidates", verifyToken, async (req, res) => {
  try {
    const data = await JoinCandidate.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

// ---------------- CONTACT US (public submit) ----------------
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.json({ message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending message" });
  }
});

// 🔒 Protected — view messages
app.get("/contact-messages", verifyToken, async (req, res) => {
  try {
    const data = await Contact.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching messages" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));