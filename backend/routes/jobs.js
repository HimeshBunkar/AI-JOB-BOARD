const router = require("express").Router();
const auth = require("../middleware/auth");
const { createJob, getJobs } = require("../controllers/jobController");

// Only logged-in users can create job
router.post("/", auth, createJob);

// Anyone can see jobs
router.get("/", getJobs);

module.exports = router;