const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  applyJob,
  getMyApplications,
  updateStatus
} = require("../controllers/applicationController");

router.post("/", auth, applyJob);
router.get("/", auth, getMyApplications);
router.put("/:id", auth, updateStatus);

module.exports = router;