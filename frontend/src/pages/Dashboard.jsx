import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => {
      setJobs(res.data);
    });
  }, []);

  const applyJob = async (jobId) => {
    await API.post("/applications", { jobId });
    alert("Applied!");
  };

  return (
    <div>
      <h2>Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <button onClick={() => applyJob(job.id)}>Apply</button>
        </div>
      ))}
    </div>
  );
}