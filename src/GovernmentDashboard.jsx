import React from "react";
import { ClipboardCheck, BarChart3, Users, Download } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import "./GovernmentDashboard.css";

export default function GovernmentDashboard() {
  const schemeVillageData = [
    { scheme: "PM Kisan", villages: 150 },
    { scheme: "Jal Shakti", villages: 120 },
    { scheme: "KALIA", villages: 95 },
    { scheme: "School Upgrade", villages: 80 },
    { scheme: "Green Cover", villages: 60 },
  ];

  const statusData = [
    { name: "Pending", value: 35 },
    { name: "Approved", value: 50 },
    { name: "Rejected", value: 15 },
  ];

  const pieColors = ["#f59e0b", "#10b981", "#ef4444"]; // amber, green, red

  return (
    <div className="gov-dashboard">
      <header className="gov-header">
        <h1>Government Dashboard</h1>
      </header>

      {/* Cards */}
      <main className="gov-main">
        <section className="gov-card">
          <ClipboardCheck />
          <h2>Schemes</h2>
          <p>Track and manage all government schemes.</p>
        </section>
        <section className="gov-card">
          <BarChart3 />
          <h2>Monitoring</h2>
          <p>Monitor real-time progress of initiatives.</p>
        </section>
         <section className="gov-card">
          <Users />
          <h2>Analytics</h2>
          <p>View analytics and reports for decision making.</p>
        </section>
        <section className="gov-card">
          <Download />
          <h2>Downloads</h2>
          <p>Download reports and data files.</p>
        </section>
      </main>

      {/* Charts */}
      <section className="chart-section">
        {/* Bar Chart */}
        <div className="chart-box">
          <h2 className="chart-title">Villages Benefited by Schemes</h2>
          <ResponsiveContainer width="100%" height={400}>
  <BarChart
    data={schemeVillageData}
    layout="vertical"                  // horizontal bars
    margin={{ top: 20, right: -10, left: -40, bottom: 0 }}  // more left margin for scheme names
  >
    {/* X-axis: Number of Villages */}
    <XAxis type="number" label={{ value: 'No. of Villages', position: 'insideBottom', offset: -10 }}
     barCategoryGap={20}
    barSize={30}
    />
   

    {/* Y-axis: Schemes */}
    <YAxis
      type="category"
      dataKey="scheme"
      width={150}                      // space for long scheme names
      tick={{ fontSize: 14 }}
    />

    <Tooltip />
    <Legend verticalAlign="bottom" height={0.1} />
    
    <Bar dataKey="villages" name="Villages Benefited" fill="#4f46e5" />
  </BarChart>
</ResponsiveContainer>

        </div>

        {/* Pie Chart */}
        <div className="chart-box">
          <h2 className="chart-title">Application Status</h2>
         <ResponsiveContainer width="100%" height={350}>
  <PieChart>
    <Pie
      data={statusData}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      label={({ percent }) => `${(percent * 100).toFixed(0)}%`} // ✅ percentage inside
      labelLine={false} // remove outside lines
    >
      {statusData.map((entry, index) => (
        <Cell key={index} fill={pieColors[index]} />
      ))}
    </Pie>
    <Tooltip formatter={(value, name) => [`${value}`, name]} />
    <Legend verticalAlign="bottom" align="center" wrapperStyle={{ marginTop: 20 }} />
  </PieChart>
</ResponsiveContainer>


        </div>
      </section>
    </div>
  );
}
