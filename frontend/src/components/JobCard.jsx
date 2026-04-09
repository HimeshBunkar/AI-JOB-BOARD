export default function JobCard({ job, onApply }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.description}</p>
      <p className="text-sm text-gray-500">{job.location}</p>

      <button
        onClick={() => onApply(job.id)}
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Apply
      </button>
    </div>
  );
}