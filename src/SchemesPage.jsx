import React, { useState } from "react";
import { FaCheckCircle, FaClock, FaTimesCircle, FaUsers } from "react-icons/fa";

import "./SchemesPage.css";

export default function SchemesPage() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="schemes-container">
      {/* Header */}
      <header className="header">
        <h1>Forest Rights Schemes Portal</h1>
        <button className="new-btn" onClick={toggleForm}>
          + New Scheme
        </button>
      </header>

      {/* Existing Schemes */}
      <div className="schemes-table">
        <h2>Existing Schemes</h2>
        <p>An overview of all active, pending, and rejected forest rights schemes.</p>

        <table>
          <thead>
            <tr>
              <th>Scheme</th>
              <th>Status</th>
              <th>Budget</th>
              <th>Expenses</th>
              <th>Beneficiaries</th>
              <th>Submitted On</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>Tendu Leaf Collection Rights for Anpur Village</td>
              <td>
                <span className="status active">
                  <FaCheckCircle /> Active
                </span>
              </td>
              <td>₹50,000</td>
              <td>₹25,000</td>
              <td><FaUsers className="user-icon" /> 1</td>
              <td>15 May, 2023</td>
            </tr>
            <tr>
              <td>Grazing Land Allocation near Jharana Forest</td>
              <td>
                <span className="status pending">
                  <FaClock /> Pending
                </span>
              </td>
              <td>₹20,000</td>
              <td>₹5,000</td>
              <td><FaUsers className="user-icon" /> 2</td>
              <td>20 Feb, 2024</td>
            </tr>
            <tr>
              <td>Community Forest Rights for Salwood Grove</td>
              <td>
                <span className="status active">
                  <FaCheckCircle /> Active
                </span>
              </td>
              <td>₹1,20,000</td>
              <td>₹95,000</td>
              <td><FaUsers className="user-icon" /> 3</td>
              <td>01 Nov, 2022</td>
            </tr>
            <tr>
              <td>Fishing Rights in the Sona River</td>
              <td>
                <span className="status rejected">
                  <FaTimesCircle /> Rejected
                </span>
              </td>
              <td>₹35,000</td>
              <td>₹40,000</td>
              <td><FaUsers className="user-icon" /> 1</td>
              <td>10 Sep, 2023</td>
            </tr>
            <tr>
              <td>Mahua Flower Collection in Sundarvan</td>
              <td>
                <span className="status pending">
                  <FaClock /> Pending
                </span>
              </td>
              <td>₹75,000</td>
              <td>₹15,000</td>
              <td><FaUsers className="user-icon" /> 1</td>
              <td>01 Mar, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create New Scheme</h2>
            <p>Fill in the details below to create a new forest rights scheme.</p>
            <form>
              <label>Scheme Name</label>
              <input type="text" placeholder="e.g., Tendu Leaf Collection Rights" />

              <label>Allocated Budget (INR)</label>
              <input type="number" placeholder="e.g., 50000" />

              <h3>Primary Beneficiary</h3>
              <p>Add details for the first beneficiary of this claim.</p>
              <label>Beneficiary Name</label>
              <input type="text" placeholder="e.g., Ram Kumar" />

              <label>Beneficiary Details</label>
              <textarea placeholder="Describe the beneficiary’s background, family, and dependence on forest resources"></textarea>

              <label>Existing Benefits (Optional)</label>
              <textarea placeholder="List any existing government benefits, e.g., MGNREGA, PDS"></textarea>

              <div className="form-actions">
                <button type="button" className="cancel" onClick={toggleForm}>
                  Cancel
                </button>
                <button type="submit" className="create">
                  Create Scheme
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
