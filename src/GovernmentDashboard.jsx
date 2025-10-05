import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ClipboardCheck,
  BarChart3,
  Users,
  Download,
} from "lucide-react";
import "./GovernmentDashboard.css";

export default function GovernmentDashboard() {
  const navigate = useNavigate();

  // Dummy data for bar chart
  const schemesData = [
    { scheme: "PM Kisan", villages: 120 },
    { scheme: "Jal Shakti", villages: 150 },
    { scheme: "KALIA", villages: 80 },
    { scheme: "School Upgrade", villages: 95 },
    { scheme: "Green Cover", villages: 110 },
  ];

  // Dummy data for pie chart
  const statusData = [
    { name: "Approved", value: 70 },
    { name: "Pending", value: 20 },
    { name: "Rejected", value: 10 },
  ];

  const COLORS = ["#15803D", "#65A30D", "#DC2626"];

  // Navigation Handlers
  const goToSchemes = () => navigate("/schemes");
  const goToMonitoring = () => navigate("/monitoring");
  const goToAnalytics = () => navigate("/analytics");
  const goToDownloads = () => navigate("/downloads");

  return (
    <div className="gov-dashboard">
      {/* Header Section */}
      <div className="gov-header">
        <h1>Dashboard</h1>
        <div className="gov-header-actions">
          <input type="text" placeholder="Search schemes or applications..." />
        </div>
      </div>

      {/* Top Cards */}
      <div className="gov-card-grid">
        <div className="gov-card clickable" onClick={goToSchemes}>
          <ClipboardCheck className="icon" />
          <div>
            <h3>Schemes</h3>
            <p>Track and manage all government schemes.</p>
          </div>
        </div>

        <div className="gov-card clickable" onClick={goToMonitoring}>
          <BarChart3 className="icon" />
          <div>
            <h3>Monitoring</h3>
            <p>Monitor real-time progress of initiatives.</p>
          </div>
        </div>

        <div className="gov-card clickable" onClick={goToAnalytics}>
          <Users className="icon" />
          <div>
            <h3>Analytics</h3>
            <p>View analytics and reports for decision making.</p>
          </div>
        </div>

        <div className="gov-card clickable" onClick={goToDownloads}>
          <Download className="icon" />
          <div>
            <h3>Downloads</h3>
            <p>Download reports and data files.</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="gov-chart-grid">
        {/* Bar Chart */}
        <div className="chart-box">
          <h2>Villages Benefited by Schemes</h2>
          <p>Number of villages benefited per scheme</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={schemesData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 50, bottom: 10 }}
            >
              <XAxis type="number" />
              <YAxis dataKey="scheme" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="villages" name="No. of Villages" fill="#15803D" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-box">
          <h2>Application Status</h2>
          <p>Distribution of application statuses</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={3}
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
