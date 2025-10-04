import React from 'react';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import './AnalyticsPage.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsPage = () => {
  const stats = {
    totalClaims: { value: '1.8M', change: '+5.2% vs. last year' },
    hectaresGranted: { value: '4.2M ha', change: '+3.1% vs. last year' },
    avgProcessingTime: { value: '182 Days', change: '-2.5% Improvement from last year' },
    successRate: { value: '76%', change: '+1.8% vs. last year' },
  };

  const claimsTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2024',
        data: [1000, 1100, 1200, 1150, 1300, 1250, 1400, 1350, 1500, 1450, 1600, 1700],
        borderColor: '#2ecc71',
        backgroundColor: 'rgba(46, 204, 113, 0.2)',
        tension: 0.4,
      },
      {
        label: '2023',
        data: [900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450],
        borderColor: '#e67e22',
        backgroundColor: 'rgba(230, 126, 34, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const claimsByStatusData = {
    labels: ['Approved', 'Pending', 'Rejected'],
    datasets: [
      {
        data: [80000, 15000, 5000],
        backgroundColor: ['#2ecc71', '#e67e22', '#e74c3c'],
        borderWidth: 1,
      },
    ],
  };

  const regionalPerformance = [
    { region: 'Eastern Ghats', claimsFiled: 1250, claimsApproved: 950, hectaresGranted: '22,000 ha', successRate: '76%' },
    { region: 'Western Ghats', claimsFiled: 2300, claimsApproved: 1800, hectaresGranted: '41,000 ha', successRate: '78%' },
    { region: 'Central India', claimsFiled: 5400, claimsApproved: 3900, hectaresGranted: '95,000 ha', successRate: '72%' },
    { region: 'Himalayan Region', claimsFiled: 850, claimsApproved: 600, hectaresGranted: '15,000 ha', successRate: '71%' },
    { region: 'Northeast Region', claimsFiled: 3200, claimsApproved: 2750, hectaresGranted: '68,000 ha', successRate: '86%' },
  ];

  return (
    <div className="dashboard">
      <div className="header">
        <div>
          <h1 className="title">Dashboard</h1>
          <p className="subtitle">Analytics and reports for the Forest Rights Act Implementation.</p>
        </div>
        <div className="controls">
          <input type="date" className="date-picker" />
          <select className="region-select">
            <option>All Regions</option>
          </select>
          <button className="download-btn">Download Report</button>
        </div>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Total Claims Recognized</p>
          <p className="stat-value">{stats.totalClaims.value}</p>
          <p className="stat-change up">{stats.totalClaims.change}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Hectares Granted</p>
          <p className="stat-value">{stats.hectaresGranted.value}</p>
          <p className="stat-change up">{stats.hectaresGranted.change}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Avg. Processing Time</p>
          <p className="stat-value">{stats.avgProcessingTime.value}</p>
          <p className="stat-change down">{stats.avgProcessingTime.change}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Success Rate</p>
          <p className="stat-value">{stats.successRate.value}</p>
          <p className="stat-change up">{stats.successRate.change}</p>
        </div>
      </div>
      <div className="charts-container">
        <div className="chart-card">
          <h2 className="chart-title">Claims Trend</h2>
          <p className="chart-subtitle">Monthly overview of claims processing.</p>
          <Line data={claimsTrendData} />
        </div>
        <div className="chart-card">
          <h2 className="chart-title">Claims by Status</h2>
          <p className="chart-subtitle">Distribution of all claims by their current status.</p>
          <Pie data={claimsByStatusData} />
        </div>
      </div>
      <div className="table-card">
        <h2 className="table-title">Regional Performance</h2>
        <p className="table-subtitle">Summary of FRA implementation across key regions.</p>
        <table className="performance-table">
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
            {regionalPerformance.map((region, index) => (
              <tr key={index}>
                <td>{region.region}</td>
                <td>{region.claimsFiled}</td>
                <td>{region.claimsApproved}</td>
                <td>{region.hectaresGranted}</td>
                <td>{region.successRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsPage;