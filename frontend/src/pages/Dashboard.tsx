import Navbar from "../components/Navbar";

const mockStats = [
  { label: "Events Processed", value: 1240 },
  { label: "Active Workers", value: 3 },
  { label: "Errors Today", value: 2 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-4 rounded shadow"
            >
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
