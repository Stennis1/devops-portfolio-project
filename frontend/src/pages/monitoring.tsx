import Navbar from "../components/Navbar";

const mockAlerts = [
  { id: 1, severity: "critical", message: "High CPU usage on worker-3", time: "2 min ago", status: "active" },
  { id: 2, severity: "warning", message: "Memory usage above 80% on api-server", time: "5 min ago", status: "active" },
  { id: 3, severity: "info", message: "Deployment completed successfully", time: "12 min ago", status: "resolved" },
  { id: 4, severity: "warning", message: "Database connection pool near limit", time: "18 min ago", status: "active" },
];

const mockServices = [
  { name: "API Gateway", status: "healthy", cpu: 45, memory: 62, requests: 1240 },
  { name: "Worker Service", status: "warning", cpu: 89, memory: 76, requests: 890 },
  { name: "Database", status: "healthy", cpu: 34, memory: 58, requests: 2100 },
  { name: "Redis Cache", status: "healthy", cpu: 12, memory: 23, requests: 3400 },
];

const mockLogs = [
  { timestamp: "14:35:22", level: "INFO", service: "api-gateway", message: "Request processed successfully" },
  { timestamp: "14:35:18", level: "ERROR", service: "worker", message: "Failed to process message: timeout" },
  { timestamp: "14:35:15", level: "WARN", service: "database", message: "Slow query detected: 2.3s" },
  { timestamp: "14:35:10", level: "INFO", service: "api-gateway", message: "Health check passed" },
  { timestamp: "14:35:05", level: "INFO", service: "redis", message: "Cache hit ratio: 94%" },
];

export default function Monitoring() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Monitoring</h1>
          <p className="text-slate-600">Real-time infrastructure and application monitoring</p>
        </div>

        {/* Alerts Section */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-900">Active Alerts</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">2 Critical</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">2 Warning</span>
            </div>
          </div>
          <div className="space-y-3">
            {mockAlerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                alert.severity === 'critical' ? 'border-red-500 bg-red-50' :
                alert.severity === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                'border-blue-500 bg-blue-50'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      alert.severity === 'critical' ? 'bg-red-500' :
                      alert.severity === 'warning' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                    <span className="font-medium text-slate-900">{alert.message}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-500">{alert.time}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      alert.status === 'active' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {alert.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Services Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockServices.map((service) => (
              <div key={service.name} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-slate-900">{service.name}</h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.status === 'healthy' ? 'bg-green-100 text-green-800' :
                    service.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {service.status}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">CPU Usage</span>
                      <span className="text-slate-900 font-medium">{service.cpu}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          service.cpu > 80 ? 'bg-red-500' : service.cpu > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${service.cpu}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Memory</span>
                      <span className="text-slate-900 font-medium">{service.memory}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          service.memory > 80 ? 'bg-red-500' : service.memory > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${service.memory}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Requests/min</span>
                    <span className="text-slate-900 font-medium">{service.requests}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Metrics */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Performance Metrics</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-slate-600 mb-3">Response Time (Last Hour)</h3>
                <div className="flex items-end justify-between h-20 gap-1">
                  {[120, 95, 110, 85, 140, 105, 90, 115, 100, 125, 80, 95].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-blue-600 rounded-t transition-all duration-300"
                        style={{ height: `${(height / 150) * 100}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>1h ago</span>
                  <span>now</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">98.5ms</div>
                  <div className="text-sm text-slate-600">Avg Response</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Logs */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-900">Live Logs</h2>
              <button className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200">
                Pause
              </button>
            </div>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {mockLogs.map((log, index) => (
                <div key={index} className="flex items-start gap-3 p-2 rounded text-sm font-mono">
                  <span className="text-slate-500 text-xs">{log.timestamp}</span>
                  <span className={`px-1 rounded text-xs font-bold ${
                    log.level === 'ERROR' ? 'bg-red-100 text-red-800' :
                    log.level === 'WARN' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {log.level}
                  </span>
                  <span className="text-slate-600">[{log.service}]</span>
                  <span className="text-slate-900">{log.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}