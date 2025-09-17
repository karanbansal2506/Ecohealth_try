import React, { useState } from "react";
import Home from "./component/home";
import UploadPage from "./component/UploadPage";
import AnalysisPage from "./component/AnalysisPage";
import HistoryPage from "./component/HistoryPage";
import ProfilePage from "./component/ProfilePage";
import LandingPage from "./component/LandingPage";
import SignupPage from "./component/SignupPage";
import LoginPage from "./component/LoginPage";
import Navbar from "./component/Navbar";

import CarbonFootprintCalculator from "./component/carbonCalculate";


export default function App() {
  const [page, setPage] = useState("landing");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Show Navbar on all pages except landing/login/signup */}
      {page !== "landing" && page !== "signup" && page !== "login" && (
        <Navbar setPage={setPage} />

      )}

      {page === "landing" && (
        <LandingPage
          onGetStarted={() => setPage("signup")}
          onSignIn={() => setPage("login")}
        />
      )}
      {page === "signup" && (
        <SignupPage onBack={() => setPage("landing")} onSwitch={() => setPage("login")} onSuccess={() => setPage("home")} />
      )}
      {page === "login" && (
        <LoginPage onBack={() => setPage("landing")} onSwitch={() => setPage("signup")} onSuccess={() => setPage("home")} />
      )}
      {page === "home" && <Home   />}
      {page === "upload" && <UploadPage />}
      {page === "analysis" && <AnalysisPage />}
      {page === "history" && <HistoryPage />}
      {page === "profile" && <ProfilePage />}
      {page === "profile" && <ProfilePage />}
      {page === "carbon Calculator" && <CarbonFootprintCalculator />}
    </div>
  );
}