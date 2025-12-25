import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Profile Settings</h1>
          <p className="text-slate-600">Manage your account settings and preferences</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="border-b border-slate-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "profile", name: "Profile" },
                { id: "security", name: "Security" },
                { id: "notifications", name: "Notifications" },
                { id: "preferences", name: "Preferences" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">U</span>
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      Change Avatar
                    </button>
                    <p className="text-sm text-slate-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@company.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Role
                    </label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>DevOps Engineer</option>
                      <option>Platform Engineer</option>
                      <option>Site Reliability Engineer</option>
                      <option>Administrator</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Experienced DevOps engineer focused on cloud-native infrastructure and automation."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">Authenticator App</p>
                      <p className="text-sm text-slate-500">Use an authenticator app to generate codes</p>
                    </div>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                      Enable
                    </button>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">API Keys</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900">Production API Key</p>
                        <p className="text-sm text-slate-500 font-mono">pk_live_••••••••••••••••</p>
                      </div>
                      <button className="text-red-600 hover:text-red-800 text-sm">Revoke</button>
                    </div>
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition">
                      Generate New Key
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Email Notifications</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Deployment alerts", desc: "Get notified when deployments succeed or fail" },
                      { name: "System alerts", desc: "Critical system alerts and downtime notifications" },
                      { name: "Performance reports", desc: "Weekly performance and usage reports" },
                      { name: "Security alerts", desc: "Security-related notifications and warnings" },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-slate-900">{item.name}</p>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Display Preferences</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Theme
                      </label>
                      <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>Light</option>
                        <option>Dark</option>
                        <option>System</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Timezone
                      </label>
                      <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>UTC</option>
                        <option>America/New_York</option>
                        <option>Europe/London</option>
                        <option>Asia/Tokyo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Date Format
                      </label>
                      <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Dashboard Settings</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Auto-refresh dashboard", desc: "Automatically refresh dashboard every 30 seconds" },
                      { name: "Show detailed metrics", desc: "Display additional performance metrics" },
                      { name: "Enable sound alerts", desc: "Play sound for critical alerts" },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-slate-900">{item.name}</p>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}