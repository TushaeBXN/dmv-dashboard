import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Users, Clock, Calendar, Star, AlertTriangle, MapPin, Phone, Building2 } from 'lucide-react';
import './index.css';
import { branchData as realBranchData, offices } from './data/offices.js';

const DMVDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCounty, setSelectedCounty] = useState('All Counties');
  const counties = [...new Set(offices.map(o => o.county))].sort();
  const filteredOffices = selectedCounty === 'All Counties'
    ? offices
    : offices.filter(o => o.county === selectedCounty);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const branchData = realBranchData;

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

  // Real NC DMV online services from ncdot.gov/dmv/offices-services/online
  const onlineServiceCategories = [
    {
      name: 'License & ID',
      color: '#22c55e',
      usage: 42,
      services: [
        'Renew Driver License & ID',
        'Order Duplicate License & ID Cards',
        'Upgrade Level 2 to Level 3',
        'Upgrade Level 3 to Regular Class C',
        'Order Driving Record',
        'Make Driver License Appointment',
        'Request Interpreter Services',
      ],
    },
    {
      name: 'Registration & Tax',
      color: '#3b82f6',
      usage: 31,
      services: [
        'Renew Registration & Pay Property Tax',
        'Pay Property Tax (New Vehicle)',
        'Order Duplicate Registration Card',
        'Order Personalized & Specialty Plates',
      ],
    },
    {
      name: 'Insurance',
      color: '#8b5cf6',
      usage: 12,
      services: [
        'Pay Penalty — Citizen Insurance Lapse',
        'Pay Penalty — Commercial Insurance Lapse',
        'Insurance Company Portal Login',
      ],
    },
    {
      name: 'Other Services',
      color: '#f59e0b',
      usage: 15,
      services: [
        'Voter Registration Application',
        'MyDMV Login',
        'Renew TRANS EXPRESS',
        'Renew Permanent Disability Placard',
        'Order Crash Reports',
      ],
    },
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
            value={selectedCounty}
            onChange={(e) => setSelectedCounty(e.target.value)}
          >
            <option>All Counties</option>
            {counties.map(c => <option key={c}>{c}</option>)}
          </select>
          <span className="ml-3 text-sm text-gray-500">
            {filteredOffices.length} office{filteredOffices.length !== 1 ? 's' : ''} shown
          </span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title={`Total Offices (${offices.length})`} value="1,143 visitors" change={12} icon={Users} color="blue" />
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

      </div>

      {/* Online Services — full width */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Online Services Adoption</h3>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
            {onlineServiceCategories.reduce((n, c) => n + c.services.length, 0)} services · ncdot.gov
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie chart */}
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={onlineServiceCategories}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, usage }) => `${name}: ${usage}%`}
                outerRadius={90}
                dataKey="usage"
              >
                {onlineServiceCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(val) => `${val}% of online transactions`} />
            </PieChart>
          </ResponsiveContainer>

          {/* Service list by category */}
          <div className="space-y-4 overflow-auto max-h-72">
            {onlineServiceCategories.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
                  <span className="text-sm font-semibold text-gray-700">{cat.name}</span>
                  <span className="text-xs text-gray-400">({cat.services.length})</span>
                </div>
                <ul className="ml-5 space-y-0.5">
                  {cat.services.map((svc) => (
                    <li key={svc} className="text-sm text-gray-600">— {svc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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

      {/* Office Directory */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-blue-500" />
            NC DMV Office Directory
          </h2>
          <span className="text-sm text-gray-500 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            {filteredOffices.length} offices · {selectedCounty}
          </span>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 divide-y divide-gray-100">
            {filteredOffices.map((office, i) => (
              <div key={i} className="flex items-start justify-between px-5 py-3 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{office.city}</p>
                    <p className="text-sm text-gray-500">{office.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 ml-4 flex-shrink-0">
                  <Phone className="h-3.5 w-3.5 text-gray-400" />
                  <span>{office.phone}</span>
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">{office.county}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-400 text-right">
          Source: NCDOT DMV Office Locator · Operational metrics above are simulated
        </p>
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
