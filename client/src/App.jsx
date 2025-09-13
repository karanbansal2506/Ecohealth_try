import React, { useState } from "react";



import LandingPage from "./component/LandingPage.jsx";
import SignupPage from "./component/SignupPage.jsx";
import Navbar from "./component/Navbar.jsx";
import UploadPage from "./component/UploadPage.jsx";
import AnalysisPage from "./component/AnalysisPage.jsx";
import Dashboard from "./component/Dashboard.jsx";
import HistoryPage from "./component/HistoryPage.jsx";
import ProfilePage from "./component/ProfilePage.jsx";

export default function App() {
  const [page, setPage] = useState("landing");

  const showNavbar = ["dashboard", "upload", "analysis", "history", "profile"].includes(page);

  return (
    <div className="min-h-screen bg-gray-50">
      {showNavbar && <Navbar currentPage={page} onNavigate={setPage} onLogout={() => setPage("landing")} />}

      {page === "landing" && (
        <LandingPage
          onGetStarted={() => setPage("signup")}
          onSignIn={() => setPage("login")}
        />
      )}

      {page === "signup" && (
        <SignupPage
          onBack={() => setPage("landing")}
          onSwitch={() => setPage("login")}
          onSuccess={() => setPage("dashboard")}
        />
      )}

      {page === "login" && (
        <LoginPage
          onBack={() => setPage("landing")}
          onSwitch={() => setPage("signup")}
          onSuccess={() => setPage("dashboard")}
        />
      )}

      {page === "dashboard" && <Dashboard />}

      {page === "upload" && <UploadPage />}
      {page === "analysis" && <AnalysisPage />}
      {page === "history" && <HistoryPage />}
      {page === "profile" && <ProfilePage />}
    </div>
  );
}