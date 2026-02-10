import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import UserProfile from "./pages/UserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GraphQLPage from "./pages/GraphQLPage";
import React19Features from "./components/React19Features";
import ToDoPracticePage from "./pages/ToDoPracticePage";
import InterviewSeries_1 from "./pages/InterviewSeries_1";
import ApiIntegrationPage from "./pages/ApiIntegrationPage";
import HttpGetPage from "./pages/HttpGetPage";

function App() {
  return (
    <div id="swaraj-house-entry">
        <Router>
          <SiteHeader />
          <div className="swarajMainBody">
            <Routes>
              <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/what-is-graphql" element={<GraphQLPage />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/react-19-features" element={<React19Features />} />
                <Route path="/to-do-practice-page" element={<ToDoPracticePage />} />
                <Route path="/interview-preparation-1" element={<InterviewSeries_1 />} />
                <Route path="/api-integration-in-react" element={<ApiIntegrationPage />} />
                <Route path="/http-get-method-in-react" element={<HttpGetPage />}/>
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
