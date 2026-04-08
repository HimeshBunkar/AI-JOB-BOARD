const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  jobId: {
    type: Number // PostgreSQL job ID
  },
  status: {
    type: String,
    enum: ["applied", "interview", "offer", "rejected"],
    default: "applied"
  }
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);