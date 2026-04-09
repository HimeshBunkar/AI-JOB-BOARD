import { useEffect, useState } from "react";
import API from "../api/axios";
import JobCard from "../components/JobCard";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => {
      setJobs(res.data);
    });
  }, []);

  const applyJob = async (jobId) => {
    try {
      await API.post("/applications", { jobId });
      alert("Applied successfully!");
    } catch {
      alert("Error applying");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onApply={applyJob} />
        ))}
      </div>
    </div>
  );
}