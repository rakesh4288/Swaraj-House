import LoginPage from "./Components/LoginPage";
import LogoutPage from "./Components/LogoutPage";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import SiteHeader from "./Components/SiteHeader";
import SiteFooter from "./Components/SiteFooter";
import UserProfile from "./Components/userProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div id="swaraj-house-entry">
        <Router>
          <SiteHeader />
          <div className="swarajMainBody">
            <Routes>
              <Route element={<ProtectedRoutes />}>
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/home" element={<HomePage />} />
              </Route>

              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
            </Routes>
          </div>
          <SiteFooter />
        </Router>
    </div>
  )
}

export default App
