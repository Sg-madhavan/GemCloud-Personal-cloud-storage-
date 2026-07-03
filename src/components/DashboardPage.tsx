import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  FolderOpen,
  HardDrive,
  MonitorSmartphone,
  Database,
  CreditCard,
  Settings,
  User,
  UploadCloud,
  Share2,
  Download,
  Bell,
  Cloud,
  ChevronRight,
  LogOut,
  Menu,
  X,
  FileText,
  Image,
  Video,
  Music,
  Archive,
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FolderOpen, label: 'Files' },
  { icon: Database, label: 'Backups' },
  { icon: MonitorSmartphone, label: 'Devices' },
  { icon: HardDrive, label: 'Storage' },
  { icon: CreditCard, label: 'Billing' },
  { icon: Settings, label: 'Settings' },
  { icon: User, label: 'Profile' },
];

const recentFiles = [
  { name: 'Project_Proposal.pdf', size: '2.4 MB', date: '2 hours ago', type: 'PDF' },
  { name: 'Design_System_v3.fig', size: '18.7 MB', date: '5 hours ago', type: 'FIG' },
  { name: 'Q4_Report.docx', size: '1.1 MB', date: '1 day ago', type: 'DOC' },
  { name: 'Product_Demo.mp4', size: '245 MB', date: '2 days ago', type: 'MP4' },
  { name: 'Team_Photo.jpg', size: '4.8 MB', date: '3 days ago', type: 'JPG' },
  { name: 'Budget_2024.xlsx', size: '890 KB', date: '4 days ago', type: 'XLS' },
];

const recentDevices = [
  { name: 'MacBook Pro', os: 'macOS Sonoma', status: 'Active', lastSeen: 'Now' },
  { name: 'iPhone 15 Pro', os: 'iOS 17', status: 'Active', lastSeen: '5 min ago' },
  { name: 'iPad Air', os: 'iPadOS 17', status: 'Active', lastSeen: '1 hour ago' },
  { name: 'Windows Desktop', os: 'Windows 11', status: 'Offline', lastSeen: '2 days ago' },
  { name: 'Android Phone', os: 'Android 14', status: 'Offline', lastSeen: '5 days ago' },
  { name: 'Linux Server', os: 'Ubuntu 22.04', status: 'Active', lastSeen: '30 min ago' },
];

const notifications = [
  { text: 'Storage usage reached 76% of your plan limit', time: '2 hours ago', type: 'warning' },
  { text: 'Your subscription renews in 30 days', time: '1 day ago', type: 'info' },
  { text: 'New device logged in from New York, US', time: '2 days ago', type: 'security' },
  { text: 'Backup completed successfully — 1,258 files', time: '3 days ago', type: 'success' },
];

const monthlyData = [35, 42, 38, 50, 55, 48, 62, 58, 65, 70, 68, 76];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function MiniChart() {
  const max = Math.max(...monthlyData);
  return (
    <div className="flex items-end gap-1 sm:gap-1.5 h-24 sm:h-32">
      {monthlyData.map((val, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${(val / max) * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
            className={`w-full rounded-t-md ${
              i === 11 ? 'bg-gradient-to-t from-blue-500 to-cyan-400' : 'bg-blue-500/20 hover:bg-blue-500/40'
            } transition-colors`}
            style={{ minHeight: '4px' }}
          />
          <span className="text-[9px] sm:text-[10px] text-text-muted">{months[i]}</span>
        </div>
      ))}
    </div>
  );
}

function FileTypeChart() {
  const types = [
    { label: 'Documents', size: '156 GB', percent: 20, color: 'bg-blue-500', icon: FileText },
    { label: 'Images', size: '245 GB', percent: 32, color: 'bg-cyan-500', icon: Image },
    { label: 'Videos', size: '280 GB', percent: 37, color: 'bg-purple-500', icon: Video },
    { label: 'Music', size: '48 GB', percent: 6, color: 'bg-pink-500', icon: Music },
    { label: 'Archives', size: '35 GB', percent: 5, color: 'bg-amber-500', icon: Archive },
  ];

  return (
    <div className="space-y-3">
      {types.map((type) => (
        <div key={type.label} className="flex items-center gap-3">
          <type.icon className="h-4 w-4 text-text-muted flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-text-secondary">{type.label}</span>
              <span className="text-text-muted">{type.size}</span>
            </div>
            <div className="h-1.5 bg-bg-lighter rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${type.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`h-full rounded-full ${type.color}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

interface DashboardPageProps {
  setCurrentPage?: (page: string) => void;
}

export default function DashboardPage({ setCurrentPage }: DashboardPageProps) {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg flex">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:sticky top-0 left-0 z-50 lg:z-0 h-screen w-64 bg-bg-light/80 border-r border-white/5 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-5 border-b border-white/5">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentPage?.('landing')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
                <Cloud className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">Gem<span className="gradient-text">Cloud</span></span>
                <p className="text-[10px] text-text-muted">Personal Plan</p>
              </div>
            </button>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1 hover:bg-white/5 rounded-lg">
              <X className="h-5 w-5 text-text-muted" />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { setActiveNav(item.label); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                activeNav === item.label
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  : 'text-text-muted hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="glass rounded-xl p-3 mb-3">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-text-muted">Storage</span>
              <span className="text-text-secondary">764 / 1024 GB</span>
            </div>
            <div className="h-1.5 bg-bg-lighter rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
            </div>
            <p className="text-[10px] text-text-muted mt-1.5">764 GB used of 1 TB</p>
          </div>
          <button
            onClick={() => setCurrentPage?.('landing')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-text-muted hover:text-red-400 hover:bg-red-500/5 transition-all"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 glass border-b border-white/5">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-white/5 rounded-lg"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">{activeNav}</h1>
                <p className="text-xs text-text-muted hidden sm:block">Welcome back, Arjun</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="relative p-2 hover:bg-white/5 rounded-xl transition-colors">
                <Bell className="h-5 w-5 text-text-muted" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs sm:text-sm font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: 'Storage Used', value: '764 GB', sub: 'of 1 TB', icon: HardDrive, gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-500/10', text: 'text-blue-400' },
              { label: 'Total Files', value: '1,258', sub: 'files', icon: FolderOpen, gradient: 'from-cyan-500 to-cyan-600', bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
              { label: 'Connected', value: '6', sub: 'devices', icon: MonitorSmartphone, gradient: 'from-purple-500 to-purple-600', bg: 'bg-purple-500/10', text: 'text-purple-400' },
              { label: 'Shared', value: '124', sub: 'files', icon: Share2, gradient: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-white/5 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.text}`} />
                  </div>
                </div>
                <div className={`text-xl sm:text-2xl font-bold ${stat.text}`}>{stat.value}</div>
                <div className="text-xs text-text-muted mt-0.5">{stat.label} · {stat.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Storage Chart */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Storage Usage</h3>
                  <p className="text-xs text-text-muted">Monthly consumption (GB)</p>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-xs text-blue-400 font-medium">
                  +12% this month
                </div>
              </div>
              <MiniChart />
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Storage by Type</h3>
                  <p className="text-xs text-text-muted">Breakdown of file types</p>
                </div>
              </div>
              <FileTypeChart />
            </div>
          </div>

          {/* Recent Files Table */}
          <div className="glass rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 sm:p-6 pb-2 sm:pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Recent Files</h3>
                <p className="text-xs text-text-muted">Your latest uploaded and modified files</p>
              </div>
              <button className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                View All <ChevronRight className="h-3 w-3" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-t border-white/5">
                    <th className="text-left text-xs text-text-muted font-medium px-4 sm:px-6 py-3">File Name</th>
                    <th className="text-left text-xs text-text-muted font-medium px-3 py-3 hidden sm:table-cell">Size</th>
                    <th className="text-left text-xs text-text-muted font-medium px-3 py-3 hidden md:table-cell">Modified</th>
                    <th className="text-right text-xs text-text-muted font-medium px-3 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentFiles.map((file) => (
                    <tr key={file.name} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-4 sm:px-6 py-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-blue-400 flex-shrink-0">
                            {file.type}
                          </div>
                          <span className="text-xs sm:text-sm truncate max-w-[120px] sm:max-w-[200px]">{file.name}</span>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-xs text-text-muted hidden sm:table-cell">{file.size}</td>
                      <td className="px-3 py-3 text-xs text-text-muted hidden md:table-cell">{file.date}</td>
                      <td className="px-3 py-3 text-right">
                        <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                          <Download className="h-3.5 w-3.5 text-text-muted" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Recent Devices */}
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Connected Devices</h3>
              <div className="space-y-3">
                {recentDevices.map((device) => (
                  <div key={device.name} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <MonitorSmartphone className="h-4 w-4 text-text-muted" />
                      <div>
                        <p className="text-xs sm:text-sm font-medium">{device.name}</p>
                        <p className="text-[10px] sm:text-xs text-text-muted">{device.os}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                        device.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-gray-500/10 text-gray-400'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${device.status === 'Active' ? 'bg-green-400' : 'bg-gray-400'}`} />
                        {device.status}
                      </span>
                      <p className="text-[10px] text-text-muted mt-0.5">{device.lastSeen}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6">
              {/* Quick Actions */}
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { icon: UploadCloud, label: 'Upload File', color: 'from-blue-500 to-blue-600' },
                    { icon: Share2, label: 'Share Folder', color: 'from-cyan-500 to-cyan-600' },
                    { icon: Database, label: 'Create Backup', color: 'from-purple-500 to-purple-600' },
                  ].map((action) => (
                    <button
                      key={action.label}
                      className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <action.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-text-muted group-hover:text-white transition-colors">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Subscription */}
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold">Subscription</h3>
                  <span className="px-2 py-1 rounded-lg bg-blue-500/10 text-xs text-blue-400 font-medium">Personal</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Current Plan</span>
                    <span className="font-medium">Personal — ₹499/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Renewal Date</span>
                    <span className="font-medium">30 days remaining</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Storage Limit</span>
                    <span className="font-medium">1 TB</span>
                  </div>
                </div>
                <button className="w-full mt-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 transition-all">
                  Upgrade to Business
                </button>
              </div>

              {/* Notifications */}
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-4">Notifications</h3>
                <div className="space-y-3">
                  {notifications.map((notif, i) => (
                    <div key={i} className="flex gap-3 items-start py-2">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                        notif.type === 'warning' ? 'bg-amber-400' :
                        notif.type === 'info' ? 'bg-blue-400' :
                        notif.type === 'security' ? 'bg-red-400' : 'bg-green-400'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-text-secondary">{notif.text}</p>
                        <p className="text-[10px] text-text-muted mt-0.5">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
