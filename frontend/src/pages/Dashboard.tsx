import Navbar from "../components/Navbar";

const mockStats = [
  { label: "Events Processed", value: 12450, change: "+12%" },
  { label: "Active Workers", value: 8, change: "+2" },
  { label: "Errors Today", value: 3, change: "-5" },
  { label: "Uptime", value: "99.9%", change: "+0.1%" },
];

const mockEvents = [
  { time: "14:32", event: "Worker scaled up", status: "success" },
  { time: "14:28", event: "Deployment completed", status: "success" },
  { time: "14:15", event: "API response time spike", status: "warning" },
  { time: "13:45", event: "Database backup completed", status: "success" },
];

const mockMetrics = [
  { name: "CPU Usage", value: 65, max: 100 },
  { name: "Memory", value: 78, max: 100 },
  { name: "Disk I/O", value: 42, max: 100 },
  { name: "Network", value: 35, max: 100 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">Monitor your cloud infrastructure and deployments</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockStats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
                <div className="text-sm font-medium text-emerald-600">{stat.change}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* System Metrics */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">System Metrics</h3>
            <div className="space-y-4">
              {mockMetrics.map((metric) => (
                <div key={metric.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{metric.name}</span>
                    <span className="text-slate-900 font-medium">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {mockEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50">
                  <div className={`w-2 h-2 rounded-full ${
                    event.status === 'success' ? 'bg-emerald-500' : 
                    event.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{event.event}</p>
                    <p className="text-xs text-slate-500">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traffic Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">API Traffic (Last 7 Days)</h3>
          <div className="flex items-end justify-between h-32 gap-2">
            {[45, 52, 38, 61, 73, 67, 84].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-blue-600 rounded-t transition-all duration-300 hover:bg-blue-700"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-slate-500 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Status */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Service Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "API Gateway", status: "operational", uptime: "99.9%" },
              { name: "Database", status: "operational", uptime: "99.8%" },
              { name: "Worker Queue", status: "degraded", uptime: "98.5%" },
            ].map((service) => (
              <div key={service.name} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-900">{service.name}</h4>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.status === 'operational' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {service.status}
                  </div>
                </div>
                <p className="text-sm text-slate-600">Uptime: {service.uptime}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}