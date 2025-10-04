import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Download } from "lucide-react";
import "./AnalyticsPage.css";

export default function AnalyticsPage() {
  const trendData = [
    { month: "Jan", recognized: 1900, filed: 1200 },
    { month: "Feb", recognized: 2400, filed: 1600 },
    { month: "Mar", recognized: 1850, filed: 1900 },
    { month: "Apr", recognized: 3200, filed: 2100 },
    { month: "May", recognized: 2900, filed: 1700 },
    { month: "Jun", recognized: 2500, filed: 1850 },
    { month: "Jul", recognized: 3000, filed: 1900 },
    { month: "Aug", recognized: 2700, filed: 1750 },
    { month: "Sep", recognized: 2800, filed: 2100 },
    { month: "Oct", recognized: 3100, filed: 2000 },
    { month: "Nov", recognized: 2600, filed: 1850 },
    { month: "Dec", recognized: 3700, filed: 2300 },
  ];

  const pieData = [
    { name: "Approved", value: 60 },
    { name: "Pending", value: 25 },
    { name: "Rejected", value: 15 },
  ];
  const COLORS = ["#22C55E", "#EAB308", "#DC2626"];

  const regions = [
    { name: "Eastern Ghats", filed: 1250, approved: 950, hectares: "22,000 ha", success: 76 },
    { name: "Western Ghats", filed: 2300, approved: 1800, hectares: "41,000 ha", success: 78 },
    { name: "Central India", filed: 5400, approved: 3900, hectares: "95,000 ha", success: 72 },
    { name: "Himalayan Region", filed: 850, approved: 600, hectares: "15,000 ha", success: 71 },
    { name: "Northeast Region", filed: 3200, approved: 2750, hectares: "68,000 ha", success: 86 },
  ];

  return (
    <div className="analytics-page">
      {/* Header */}
      <div className="analytics-header">
        <div>
          <h1>Analytics</h1>
          <p>Analytics and reports for the Forest Rights Act implementation.</p>
        </div>
        <button className="download-btn">
          <Download size={18} /> Download Report
        </button>
      </div>

      {/* Top Cards */}
      <div className="analytics-cards">
        <div className="analytics-card">
          <p className="label">Total Claims Recognized</p>
          <p className="value">1.8M</p>
          <p className="change-up">↑ 5.2% vs. last year</p>
        </div>
        <div className="analytics-card">
          <p className="label">Hectares Granted</p>
          <p className="value">4.2M ha</p>
          <p className="change-up">↑ 3.1% vs. last year</p>
        </div>
        <div className="analytics-card">
          <p className="label">Avg. Processing Time</p>
          <p className="value">182 Days</p>
          <p className="change-down">↓ 2.5% vs. last year</p>
        </div>
        <div className="analytics-card">
          <p className="label">Success Rate</p>
          <p className="value">76%</p>
          <p className="change-up">↑ 1.8% vs. last year</p>
        </div>
      </div>

      {/* Charts */}
      <div className="analytics-charts">
        <div className="chart-container">
          <h3>Claims Trend</h3>
          <p>Monthly overview of claims processing.</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="recognized" stroke="#22C55E" strokeWidth={2} />
              <Line type="monotone" dataKey="filed" stroke="#E67E22" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container pie-section">
          <h3>Claims by Status</h3>
          <p>Distribution of all claims by their current status.</p>
          <PieChart width={300} height={250}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
          <div className="pie-total">
            <h4>80,000</h4>
            <p>Total Claims</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="analytics-table">
        <h3>Regional Performance</h3>
        <p>Summary of FRA implementation across key regions.</p>
        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Claims Filed</th>
              <th>Claims Approved</th>
              <th>Hectares Granted</th>
              <th>Success Rate</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((r, i) => (
              <tr key={i}>
                <td>{r.name}</td>
                <td>{r.filed}</td>
                <td>{r.approved}</td>
                <td>{r.hectares}</td>
                <td>
                  <div className="success-bar">
                    <div className="success-bar-track">
                      <div
                        className="success-bar-fill"
                        style={{ width: `${r.success}%` }}
                      ></div>
                    </div>
                    <span>{r.success}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
