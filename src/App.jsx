import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Users, Clock, Calendar, Star, AlertTriangle } from 'lucide-react';
import './index.css';

const DMVDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedBranch, setSelectedBranch] = useState('All Branches');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const branchData = [
    { name: 'Charlotte Main', visitors: 324, avgWait: 28, satisfaction: 4.2, staff: 12, available: 8 },
    { name: 'Raleigh North', visitors: 198, avgWait: 15, satisfaction: 4.5, staff: 8, available: 6 },
    { name: 'Greensboro', visitors: 156, avgWait: 22, satisfaction: 4.1, staff: 6, available: 4 },
    { name: 'Winston-Salem', visitors: 142, avgWait: 18, satisfaction: 4.3, staff: 7, available: 5 },
    { name: 'Durham', visitors: 189, avgWait: 25, satisfaction: 4.0, staff: 9, available: 7 }
  ];

  const appointmentData = [
    { time: '8:00', scheduled: 24, walkins: 8, completed: 28 },
    { time: '9:00', scheduled: 32, walkins: 12, completed: 38 },
    { time: '10:00', scheduled: 28, walkins: 15, completed: 35 },
    { time: '11:00', scheduled: 36, walkins: 18, completed: 42 },
    { time: '12:00', scheduled: 20, walkins: 10, completed: 25 },
    { time: '1:00', scheduled: 30, walkins: 14, completed: 38 },
    { time: '2:00', scheduled: 34, walkins: 16, completed: 44 },
    { time: '3:00', scheduled: 38, walkins: 20, completed: 48 },
    { time: '4:00', scheduled: 26, walkins: 12, completed: 32 }
  ];

  const satisfactionTrend = [
    { month: 'Jan', score: 3.8 },
    { month: 'Feb', score: 3.9 },
    { month: 'Mar', score: 4.1 },
    { month: 'Apr', score: 4.0 },
    { month: 'May', score: 4.2 },
    { month: 'Jun', score: 4.3 }
  ];

  const onlineServices = [
    { name: 'License Renewal', usage: 68, color: '#22c55e' },
    { name: 'Registration', usage: 45, color: '#3b82f6' },
    { name: 'Address Change', usage: 82, color: '#8b5cf6' },
    { name: 'Duplicate License', usage: 34, color: '#f59e0b' },
    { name: 'Voter Registration', usage: 56, color: '#ef4444' }
  ];

  const examinerProductivity = [
    { name: 'Road Tests', today: 28, target: 30, efficiency: 93 },
    { name: 'Written Tests', today: 156, target: 150, efficiency: 104 },
    { name: 'Vision Tests', today: 89, target: 85, efficiency: 105 },
    { name: 'CDL Tests', today: 12, target: 15, efficiency: 80 }
  ];

  const colorMap = {
    blue: { border: '#3b82f6', icon: 'text-blue-500' },
    green: { border: '#22c55e', icon: 'text-green-500' },
    red: { border: '#ef4444', icon: 'text-red-500' },
    yellow: { border: '#f59e0b', icon: 'text-yellow-500' },
  };

  const StatCard = ({ title, value, change, icon: Icon, color = 'blue' }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderLeftColor: colorMap[color].border }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change !== undefined && (
            <p className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change > 0 ? '↗' : '↘'} {Math.abs(change)}% from last week
            </p>
          )}
        </div>
        <Icon className={`h-8 w-8 ${colorMap[color].icon}`} />
      </div>
    </div>
  );

  const AlertCard = ({ type, message, time }) => (
    <div className={`flex items-center p-3 rounded-lg ${type === 'warning' ? 'bg-yellow-50 border border-yellow-200' : 'bg-red-50 border border-red-200'}`}>
      <AlertTriangle className={`h-5 w-5 mr-3 flex-shrink-0 ${type === 'warning' ? 'text-yellow-600' : 'text-red-600'}`} />
      <div className="flex-1">
        <p className={`text-sm font-medium ${type === 'warning' ? 'text-yellow-800' : 'text-red-800'}`}>{message}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">NC DMV Operations Dashboard</h1>
            <p className="text-gray-600">Real-time monitoring and analytics</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Last Updated</p>
            <p className="text-lg font-semibold text-gray-900">{currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
        <div className="mt-4">
          <select
            className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option>All Branches</option>
            <option>Charlotte Main</option>
            <option>Raleigh North</option>
            <option>Greensboro</option>
            <option>Winston-Salem</option>
            <option>Durham</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Daily Visitors" value="1,009" change={12} icon={Users} color="blue" />
        <StatCard title="Avg Wait Time" value="22 min" change={-8} icon={Clock} color="green" />
        <StatCard title="Appointment Slots" value="84%" change={5} icon={Calendar} color="yellow" />
        <StatCard title="Customer Satisfaction" value="4.2/5" change={3} icon={Star} color="green" />
      </div>

      {/* Alerts */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">System Alerts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AlertCard type="warning" message="Charlotte Main: Wait time exceeding 30 minutes" time="2 minutes ago" />
          <AlertCard type="critical" message="Durham: Only 2 examiners available" time="5 minutes ago" />
          <AlertCard type="warning" message="System maintenance scheduled for tonight" time="1 hour ago" />
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Traffic Pattern</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={appointmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="scheduled" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="walkins" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Branch Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={branchData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visitors" fill="#3b82f6" name="Daily Visitors" />
              <Bar dataKey="avgWait" fill="#ef4444" name="Avg Wait (min)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Satisfaction Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={satisfactionTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Online Services Adoption</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={onlineServices}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, usage }) => `${name}: ${usage}%`}
                outerRadius={80}
                dataKey="usage"
              >
                {onlineServices.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Staff and Productivity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Staff Availability by Branch</h3>
          <div className="space-y-4">
            {branchData.map((branch, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{branch.name}</p>
                  <p className="text-sm text-gray-600">{branch.available}/{branch.staff} available</p>
                </div>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(branch.available / branch.staff) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {Math.round((branch.available / branch.staff) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Examiner Productivity Today</h3>
          <div className="space-y-4">
            {examinerProductivity.map((exam, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{exam.name}</p>
                  <p className="text-sm text-gray-600">{exam.today}/{exam.target} completed</p>
                </div>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className={`h-2 rounded-full ${exam.efficiency >= 100 ? 'bg-green-500' : exam.efficiency >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min(exam.efficiency, 100)}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm font-medium ${exam.efficiency >= 100 ? 'text-green-600' : exam.efficiency >= 80 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {exam.efficiency}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm">
        <p>North Carolina Department of Motor Vehicles • Operations Dashboard v2.1</p>
        <p>For technical support, contact IT Services at (919) 555-0123</p>
      </div>
    </div>
  );
};

export default DMVDashboard;
