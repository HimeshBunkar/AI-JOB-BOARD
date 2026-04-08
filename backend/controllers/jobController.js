const pool = require("../config/pg");

// Create Job
exports.createJob = async (req, res) => {
  try {
    const { title, description, salary, location, type } = req.body;

    const result = await pool.query(
      "INSERT INTO jobs (title, description, salary, location, type) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [title, description, salary, location, type]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error("CREATE JOB ERROR:", err); // 👈 ADD THIS
    res.status(500).json({ msg: "Error creating job" });
  }
};

// Get Jobs
exports.getJobs = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM jobs");
    res.json(result.rows);
  } catch (err) {
    console.error("DB ERROR:", err); // 👈 ADD THIS
    res.status(500).json({ msg: "Error fetching jobs" });
  }
};