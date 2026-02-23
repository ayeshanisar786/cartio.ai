"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  PhoneCall,
  MessageSquare,
  Smartphone,
  Users,
  Activity,
  Settings,
  LogOut,
  Bell,
  Search,
  Calendar,
  ArrowUp,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react";

// Mock data - replace with actual API calls
const mockData = {
  stats: {
    totalRecovered: 47350,
    recoveryRate: 38.5,
    totalCalls: 247,
    avgOrderValue: 192,
    monthlyTrend: 12.3,
    callsSuccess: 68,
    whatsappSuccess: 45,
    smsSuccess: 23
  },
  recentRecoveries: [
    { id: 1, customer: "Sarah M.", amount: 245.00, channel: "voice", time: "2 min ago", status: "recovered" },
    { id: 2, customer: "John D.", amount: 189.50, channel: "whatsapp", time: "15 min ago", status: "recovered" },
    { id: 3, customer: "Emma W.", amount: 432.00, channel: "voice", time: "1 hour ago", status: "pending" },
    { id: 4, customer: "Michael B.", amount: 67.99, channel: "sms", time: "2 hours ago", status: "failed" },
    { id: 5, customer: "Lisa K.", amount: 298.00, channel: "voice", time: "3 hours ago", status: "recovered" },
  ],
  upcomingCalls: [
    { id: 1, customer: "Robert P.", amount: 567.00, scheduled: "Today, 3:00 PM", priority: "high" },
    { id: 2, customer: "Jennifer L.", amount: 234.00, scheduled: "Today, 4:30 PM", priority: "medium" },
    { id: 3, customer: "David S.", amount: 445.00, scheduled: "Today, 5:15 PM", priority: "high" },
  ]
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
            Cartio.ai
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Revenue Dashboard</p>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition ${
                  activeTab === "overview"
                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                <LayoutDashboard className="w-5 h-5 mr-3" />
                Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("recoveries")}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition ${
                  activeTab === "recoveries"
                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                <ShoppingCart className="w-5 h-5 mr-3" />
                Recoveries
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition ${
                  activeTab === "analytics"
                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                <Activity className="w-5 h-5 mr-3" />
                Analytics
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("customers")}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition ${
                  activeTab === "customers"
                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                <Users className="w-5 h-5 mr-3" />
                Customers
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition ${
                  activeTab === "settings"
                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <button className="w-full flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex items-center flex-1">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search customers, carts..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition relative">
                <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">John's Store</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Premium Plan</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Stats Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Revenue Overview</h2>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Last 30 Days
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="flex items-center text-sm font-medium text-green-600">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    {mockData.stats.monthlyTrend}%
                  </span>
                </div>
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Total Recovered</h3>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  ${mockData.stats.totalRecovered.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">This month</p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="flex items-center text-sm font-medium text-primary-600">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    5.2%
                  </span>
                </div>
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Recovery Rate</h3>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {mockData.stats.recoveryRate}%
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Above industry avg</p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="flex items-center text-sm font-medium text-green-600">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    18%
                  </span>
                </div>
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Total Calls</h3>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {mockData.stats.totalCalls}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{mockData.stats.callsSuccess}% success rate</p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="flex items-center text-sm font-medium text-green-600">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    8%
                  </span>
                </div>
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Avg Order Value</h3>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  ${mockData.stats.avgOrderValue}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Recovered carts</p>
              </div>
            </div>
          </div>

          {/* Channel Performance */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Channel Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-primary-200 dark:border-primary-800">
                <div className="flex items-center justify-between mb-4">
                  <PhoneCall className="w-8 h-8 text-primary-600" />
                  <span className="text-sm font-medium text-primary-600">{mockData.stats.callsSuccess}% success</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">AI Voice Calls</h4>
                <p className="text-3xl font-bold text-primary-600 mb-2">$28,450</p>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-600" style={{ width: `${mockData.stats.callsSuccess}%` }}></div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">142 calls completed</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between mb-4">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                  <span className="text-sm font-medium text-green-600">{mockData.stats.whatsappSuccess}% success</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">WhatsApp</h4>
                <p className="text-3xl font-bold text-green-600 mb-2">$13,200</p>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600" style={{ width: `${mockData.stats.whatsappSuccess}%` }}></div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">78 messages sent</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-center justify-between mb-4">
                  <Smartphone className="w-8 h-8 text-purple-600" />
                  <span className="text-sm font-medium text-purple-600">{mockData.stats.smsSuccess}% success</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Smart SMS</h4>
                <p className="text-3xl font-bold text-purple-600 mb-2">$5,700</p>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600" style={{ width: `${mockData.stats.smsSuccess}%` }}></div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">27 messages sent</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Recoveries */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Recent Recoveries</h3>
              <div className="space-y-4">
                {mockData.recentRecoveries.map((recovery) => (
                  <div key={recovery.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {recovery.customer.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{recovery.customer}</p>
                        <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                          {recovery.channel === "voice" && <PhoneCall className="w-3 h-3" />}
                          {recovery.channel === "whatsapp" && <MessageSquare className="w-3 h-3" />}
                          {recovery.channel === "sms" && <Smartphone className="w-3 h-3" />}
                          <span className="capitalize">{recovery.channel}</span>
                          <span>•</span>
                          <span>{recovery.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900 dark:text-white">${recovery.amount.toFixed(2)}</p>
                      {recovery.status === "recovered" && (
                        <span className="inline-flex items-center text-xs text-green-600">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Recovered
                        </span>
                      )}
                      {recovery.status === "pending" && (
                        <span className="inline-flex items-center text-xs text-yellow-600">
                          <Clock className="w-3 h-3 mr-1" />
                          Pending
                        </span>
                      )}
                      {recovery.status === "failed" && (
                        <span className="inline-flex items-center text-xs text-red-600">
                          <XCircle className="w-3 h-3 mr-1" />
                          Failed
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Calls */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Upcoming AI Calls</h3>
              <div className="space-y-4">
                {mockData.upcomingCalls.map((call) => (
                  <div key={call.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg border-l-4 border-primary-600">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {call.customer.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{call.customer}</p>
                        <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>{call.scheduled}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900 dark:text-white">${call.amount.toFixed(2)}</p>
                      <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full ${
                        call.priority === "high"
                          ? "bg-red-100 dark:bg-red-900/20 text-red-600"
                          : "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600"
                      }`}>
                        {call.priority} priority
                      </span>
                    </div>
                  </div>
                ))}
                <button className="w-full py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-400 hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition font-medium">
                  View All Scheduled Calls
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
