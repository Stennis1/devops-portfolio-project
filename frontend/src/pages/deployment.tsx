import Navbar from "../components/Navbar";

const mockDeployments = [
  { id: 1, app: "API Gateway", version: "v2.1.3", environment: "production", status: "success", time: "2 hours ago", duration: "3m 45s" },
  { id: 2, app: "Worker Service", version: "v1.8.2", environment: "staging", status: "running", time: "5 minutes ago", duration: "2m 12s" },
  { id: 3, app: "Frontend", version: "v3.0.1", environment: "production", status: "success", time: "1 day ago", duration: "4m 32s" },
  { id: 4, app: "Database Migration", version: "v1.2.0", environment: "production", status: "failed", time: "2 days ago", duration: "1m 15s" },
];

const mockPipelines = [
  { name: "api-gateway-pipeline", status: "success", lastRun: "2 hours ago", branch: "main", commits: 3 },
  { name: "worker-service-pipeline", status: "running", lastRun: "5 minutes ago", branch: "develop", commits: 1 },
  { name: "frontend-pipeline", status: "success", lastRun: "1 day ago", branch: "main", commits: 5 },
  { name: "infrastructure-pipeline", status: "pending", lastRun: "3 days ago", branch: "feature/k8s-update", commits: 2 },
];

const mockEnvironments = [
  { name: "Production", status: "healthy", version: "v2.1.3", uptime: "99.9%", lastDeploy: "2 hours ago" },
  { name: "Staging", status: "deploying", version: "v1.8.2", uptime: "98.5%", lastDeploy: "5 minutes ago" },
  { name: "Development", status: "healthy", version: "v3.0.0-beta", uptime: "97.2%", lastDeploy: "1 hour ago" },
];

export default function Deployment() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Deployments</h1>
          <p className="text-slate-600">Manage your application deployments and CI/CD pipelines</p>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mb-8">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            New Deployment
          </button>
          <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition">
            Rollback
          </button>
          <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition">
            View Logs
          </button>
        </div>

        {/* Environments Overview */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Environments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockEnvironments.map((env) => (
              <div key={env.name} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-slate-900">{env.name}</h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    env.status === 'healthy' ? 'bg-green-100 text-green-800' :
                    env.status === 'deploying' ? 'bg-blue-100 text-blue-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {env.status}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Version:</span>
                    <span className="text-slate-900 font-mono">{env.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Uptime:</span>
                    <span className="text-slate-900">{env.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Last Deploy:</span>
                    <span className="text-slate-900">{env.lastDeploy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pipeline Status */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">CI/CD Pipelines</h2>
            <div className="space-y-4">
              {mockPipelines.map((pipeline) => (
                <div key={pipeline.name} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-slate-900">{pipeline.name}</h3>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      pipeline.status === 'success' ? 'bg-green-100 text-green-800' :
                      pipeline.status === 'running' ? 'bg-blue-100 text-blue-800' :
                      pipeline.status === 'failed' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {pipeline.status}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Branch: {pipeline.branch}</span>
                    <span>{pipeline.commits} commits</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Last run: {pipeline.lastRun}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment Stats */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Deployment Stats</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-slate-600 mb-3">Success Rate (Last 30 Days)</h3>
                <div className="flex items-end justify-between h-20 gap-1">
                  {[95, 88, 92, 100, 85, 90, 95, 100, 92, 88, 95, 100, 90, 85].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className={`w-full rounded-t transition-all duration-300 ${
                          height >= 95 ? 'bg-green-500' : height >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">92%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">3.2m</div>
                  <div className="text-sm text-slate-600">Avg Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Deployments */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Recent Deployments</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Application</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Version</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Environment</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Duration</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Time</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockDeployments.map((deployment) => (
                  <tr key={deployment.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-900">{deployment.app}</td>
                    <td className="py-3 px-4 font-mono text-sm text-slate-600">{deployment.version}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        deployment.environment === 'production' ? 'bg-red-100 text-red-800' :
                        deployment.environment === 'staging' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {deployment.environment}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        deployment.status === 'success' ? 'bg-green-100 text-green-800' :
                        deployment.status === 'running' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {deployment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-600">{deployment.duration}</td>
                    <td className="py-3 px-4 text-sm text-slate-600">{deployment.time}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}