const Application = require("../models/Application");

// Apply Job
exports.applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    const app = await Application.create({
      userId: req.user.id,
      jobId
    });

    res.json(app);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error applying job" });
  }
};

// Get My Applications
exports.getMyApplications = async (req, res) => {
  try {
    const apps = await Application.find({ userId: req.user.id });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching applications" });
  }
};

// Update Status (Kanban)
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const app = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(app);
  } catch (err) {
    res.status(500).json({ msg: "Error updating status" });
  }
};