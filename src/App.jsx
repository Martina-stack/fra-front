import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import GovernmentDashboard from "./GovernmentDashboard";
import SchemesPage from "./SchemesPage";
import MonitoringPage from "./MonitoringPage";
import AnalyticsPage from "./AnalyticsPage";
import DownloadsPage from "./DownloadsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home includes both MainPage + Dashboard */}
        <Route
          path="/"
          element={
            <>
              <MainPage />
              <GovernmentDashboard />
            </>
          }
        />

        {/* Individual routes */}
        <Route path="/dashboard" element={<GovernmentDashboard />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/monitoring" element={<MonitoringPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
