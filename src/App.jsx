// src/App.jsx
import MainPage from "./MainPage";
import GovernmentDashboard from "./GovernmentDashboard";
import SchemesPage from "./SchemesPage"; 
import DownloadsPage from "./DownloadsPage";
import AnalyticsPage from "./AnalyticsPage"; 
function App() {
  return (
    <div>
      {/* Main page content */}
      <MainPage />

      {/* Government dashboard right below (or wherever you like) */}
      <GovernmentDashboard />

      <SchemesPage /> {/* Schemes page component */}

      <DownloadsPage /> {/* Download icon from lucide-react */}

      <AnalyticsPage /> {/* Analytics page component */}

      
    </div>
  );
}
export default App;
