import React from 'react';
import './Download.css';
import { User, Check, X, Clock } from 'lucide-react';

const DownloadsPage = () => {
  const claimsData = {
    total: 2275,
    accepted: 1880,
    rejected: 260,
    pending: 135
    
  };

  const geoBreakdown = [
    { village: 'Rampur', tehsil: 'Sadar', district: 'Rampur', state: 'Uttar Pradesh', applicants: 150, accepted: 110, rejected: 25, pending: 15 },
    { village: 'Govindpur', tehsil: 'Tufanganj', district: 'Cooch Behar', state: 'West Bengal', applicants: 220, accepted: 180, rejected: 30, pending: 10 },
    { village: 'Sitapur', tehsil: 'Sitapur', district: 'Sitapur', state: 'Uttar Pradesh', applicants: 95, accepted: 60, rejected: 15, pending: 20 },
    { village: 'Madhapur', tehsil: 'Serilingampally', district: 'Ranga Reddy', state: 'Telangana', applicants: 300, accepted: 250, rejected: 40, pending: 10 },
    { village: 'Anandpur', tehsil: 'Anandpur Sahib', district: 'Rupnagar', state: 'Punjab', applicants: 180, accepted: 150, rejected: 20, pending: 10 },
    { village: 'Chandpur', tehsil: 'Bijnor', district: 'Bijnor', state: 'Uttar Pradesh', applicants: 120, accepted: 90, rejected: 20, pending: 10 },
  ];

  return (
    <div className="container">
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Total Claims</p>
          <div className="stat-value-container">
            <p className="stat-value">{claimsData.total}</p>
            <User className="stat-icon" />
          </div>
          <p className="stat-subtext">Total applications received</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Accepted Claims</p>
          <div className="stat-value-container">
            <p className="stat-value accepted">{claimsData.accepted}</p>
            <Check className="stat-icon" />
          </div>
          <p className="stat-subtext">Successfully processed</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Rejected Claims</p>
          <div className="stat-value-container">
            <p className="stat-value rejected">{claimsData.rejected}</p>
            <X className="stat-icon" />
          </div>
          <p className="stat-subtext">Denied applications</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Pending Claims</p>
          <div className="stat-value-container">
            <p className="stat-value pending">{claimsData.pending}</p>
            <Clock className="stat-icon" />
          </div>
          <p className="stat-subtext">Under review</p>
        </div>
      </div>
      <div className="breakdown-section">
        <h2 className="breakdown-title">Geographic Breakdown</h2>
        <p className="breakdown-subtitle">Claim details by village and region.</p>
        <table className="breakdown-table">
          <thead>
            <tr>
              <th>Village</th>
              <th>Tehsil</th>
              <th>District</th>
              <th>State</th>
              <th>Applicants</th>
              <th>Accepted</th>
              <th>Rejected</th>
              <th>Pending</th>
            </tr>
          </thead>
          <tbody>
            {geoBreakdown.map((row, index) => (
              <tr key={index}>
                <td>{row.village}</td>
                <td>{row.tehsil}</td>
                <td>{row.district}</td>
                <td>{row.state}</td>
                <td>{row.applicants}</td>
                <td>{row.accepted}</td>
                <td>{row.rejected}</td>
                <td>{row.pending}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DownloadsPage;