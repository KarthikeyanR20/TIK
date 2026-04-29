const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// create file if not exists
if (!fs.existsSync("data.json")) {
  fs.writeFileSync("data.json", "[]");
}

// storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// ✅ SAVE DATA
app.post("/upload", upload.single("resume"), (req, res) => {

  const newCandidate = {
    name: req.body.name,
    qualification: req.body.qualification,
    passedout: req.body.passedout,
    experience: req.body.experience,
    jobTitle: req.body.jobTitle,
    contact: req.body.contact,
    email: req.body.email,
    referral: req.body.referral || "N/A",
    resume: req.file ? req.file.filename : ""
  };

  const data = JSON.parse(fs.readFileSync("data.json"));

  data.push(newCandidate);

  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

  res.json({ message: "Saved successfully" });
});

// ✅ GET DATA
app.get("/candidates", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data.json"));
  res.json(data);
});

// static resume access
app.use("/uploads", express.static("uploads"));

app.listen(8000, () => {
  console.log("Server running on port 8000 🚀");
});

// create file if not exists
if (!fs.existsSync("joinData.json")) {
  fs.writeFileSync("joinData.json", "[]");
}

// submit join form
// create joinData.json if not exists
if (!fs.existsSync("joinData.json")) {
  fs.writeFileSync("joinData.json", "[]");
}

// ✅ JOIN FORM SUBMIT (WITH FILE UPLOAD)
app.post("/join", upload.single("resume"), (req, res) => {
  try {
    const newCandidate = {
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      qualification: req.body.qualification,
      experience: req.body.experience,
      role: req.body.role,
      location: req.body.location,
      resume: req.file ? req.file.filename : ""
    };

    const data = JSON.parse(fs.readFileSync("joinData.json"));

    data.push(newCandidate);

    fs.writeFileSync("joinData.json", JSON.stringify(data, null, 2));

    res.json({ message: "Join data saved successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving data" });
  }
});

// ✅ GET JOIN CANDIDATES
app.get("/join-candidates", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("joinData.json"));
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
});