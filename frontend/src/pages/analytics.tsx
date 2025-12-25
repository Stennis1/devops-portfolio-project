import Navbar from "../components/Navbar";

const mockMetrics = [
  { label: "Total Users", value: "24.5K", change: "+12.3%", trend: "up" },
  { label: "API Calls", value: "1.2M", change: "+8.7%", trend: "up" },
  { label: "Error Rate", value: "0.12%", change: "-0.05%", trend: "down" },
  { label: "Avg Response Time", value: "145ms", change: "-23ms", trend: "down" },
];

const mockTraffic = [
  { hour: "00:00", requests: 1200, errors: 5 },
  { hour: "04:00", requests: 800, errors: 2 },
  { hour: "08:00", requests: 2400, errors: 12 },
  { hour: "12:00", requests: 3200, errors: 8 },
  { hour: "16:00", requests: 2800, errors: 6 },
  { hour: "20:00", requests: 2100, errors: 4 },
];

const mockEndpoints = [
  { endpoint: "/api/users", requests: 45200, avgTime: "120ms", errorRate: "0.08%" },
  { endpoint: "/api/events", requests: 38900, avgTime: "95ms", errorRate: "0.15%" },
  { endpoint: "/api/deployments", requests: 12400, avgTime: "340ms", errorRate: "0.22%" },
  { endpoint: "/api/metrics", requests: 8700, avgTime: "78ms", errorRate: "0.05%" },
];

const mockRegions = [
  { region: "US East", requests: 45, percentage: 45 },
  { region: "Europe", requests: 28, percentage: 28 },
  { region: "Asia Pacific", requests: 18, percentage: 18 },
  { region: "US West", requests: 9, percentage: 9 },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Analytics</h1>
          <p className="text-slate-600">Performance insights and usage analytics for your platform</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockMetrics.map((metric) => (
            <div key={metric.label} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{metric.label}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{metric.value}</p>
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <svg className={`w-4 h-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  {metric.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Traffic Overview */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Traffic Overview (24h)</h2>
            <div className="space-y-4">
              <div className="flex items-end justify-between h-32 gap-2">
                {mockTraffic.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex flex-col items-end gap-1">
                      <div
                        className="w-full bg-blue-600 rounded-t transition-all duration-300"
                        style={{ height: `${(data.requests / 3500) * 100}%` }}
                      ></div>
                      <div
                        className="w-full bg-red-500 rounded-t transition-all duration-300"
                        style={{ height: `${(data.errors / 15) * 20}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-500 mt-2">{data.hour}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                  <span className="text-slate-600">Requests</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-slate-600">Errors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Traffic by Region</h2>
            <div className="space-y-4">
              {mockRegions.map((region) => (
                <div key={region.region} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-900 font-medium">{region.region}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${region.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-slate-600 text-sm w-12 text-right">{region.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">156K</div>
                <div className="text-sm text-slate-600">Total Requests Today</div>
              </div>
            </div>
          </div>
        </div>

        {/* API Endpoints Performance */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Top API Endpoints</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Endpoint</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Requests</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Avg Response Time</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Error Rate</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Performance</th>
                </tr>
              </thead>
              <tbody>
                {mockEndpoints.map((endpoint, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono text-sm text-slate-900">{endpoint.endpoint}</td>
                    <td className="py-3 px-4 text-slate-600">{endpoint.requests.toLocaleString()}</td>
                    <td className="py-3 px-4 text-slate-600">{endpoint.avgTime}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        parseFloat(endpoint.errorRate) < 0.1 ? 'bg-green-100 text-green-800' :
                        parseFloat(endpoint.errorRate) < 0.2 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {endpoint.errorRate}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-16 bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            parseInt(endpoint.avgTime) < 100 ? 'bg-green-500' :
                            parseInt(endpoint.avgTime) < 200 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${Math.min((400 - parseInt(endpoint.avgTime)) / 4, 100)}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">System Health Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-slate-200 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
              <div className="text-sm text-slate-600 mb-2">Uptime (30 days)</div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.8%' }}></div>
              </div>
            </div>
            <div className="text-center p-4 border border-slate-200 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.1M</div>
              <div className="text-sm text-slate-600 mb-2">Events Processed</div>
              <div className="text-xs text-slate-500">+15% from last month</div>
            </div>
            <div className="text-center p-4 border border-slate-200 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">127ms</div>
              <div className="text-sm text-slate-600 mb-2">P95 Response Time</div>
              <div className="text-xs text-slate-500">-12ms from last week</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}