const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
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
  resume: String,
  createdAt: { type: Date, default: Date.now }
});

const Candidate = mongoose.model("Candidate", candidateSchema);
const JoinCandidate = mongoose.model("JoinCandidate", joinSchema);

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

app.get("/candidates", async (req, res) => {
  try {
    const data = await Candidate.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching candidates" });
  }
});

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
      resume: req.file ? req.file.path : ""
    });
    await newCandidate.save();
    res.json({ message: "Join data saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving data" });
  }
});

app.get("/join-candidates", async (req, res) => {
  try {
    const data = await JoinCandidate.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));