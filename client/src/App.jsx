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
import NutritionScanner from "./component/UploadPage";

export default function App() {
  const [page, setPage] = useState("landing");
  const [user, setUser] = useState(null); // store user info

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Show Navbar only after login/signup */}
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
        <SignupPage
          onBack={() => setPage("landing")}
          onSwitch={() => setPage("login")}
          onSuccess={(userData) => {
            setUser(userData);
            setPage("home");
          }}
        />
      )}
      {page === "login" && (
        <LoginPage
          onBack={() => setPage("landing")}
          onSwitch={() => setPage("signup")}
          onSuccess={(userData) => {
            setUser(userData);
            setPage("home");
          }}
        />
      )}
      {page === "home" && <Home user={user} />}
      {page === "upload" && <NutritionScanner />}
      {page === "analysis" && <AnalysisPage />}
      {page === "profile" && <ProfilePage user={user} setUser={setUser} />}
      {page === "carbon Calculator" && <CarbonFootprintCalculator />}
    </div>
  );
}