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
import ReactReduxPage from "./pages/ReactReduxPage";
import MircoFrontEndPage from "./pages/MircoFrontEndPage";
import ReactFormsPage from "./pages/ReactFormsPage";
import UseReducerPage from "./pages/UseReducerPage";
import JenkinsPage from "./pages/JenkinsPage";
import InterviewSeries_2 from "./pages/InterviewSeries_2";
import InterviewSeries_3 from "./pages/InterviewSeries_3";
import DebouncingPage from "./pages/DebouncingPage";
import ReactRoutingPage from "./pages/ReactRoutingPage";
import LazyLoadingPage from "./pages/LazyLoadingPage";
import UseContextPage from "./pages/UseContextPage";

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
                <Route path="/what-is-lazy-loading-in-react" element={<LazyLoadingPage />}/>
                <Route path="/what-is-debouncing-throttling-in-react" element={<DebouncingPage />}/>
                <Route path="/interview-preparation-1" element={<InterviewSeries_1 />} />
                <Route path="/interview-preparation-2" element={<InterviewSeries_2 />} />
                <Route path="/interview-preparation-3" element={<InterviewSeries_3 />} />
                <Route path="/how-to-configure-react-router-dom" element={<ReactRoutingPage />}/>
                <Route path="/api-integration-in-react" element={<ApiIntegrationPage />} />
                <Route path="/http-get-method-in-react" element={<HttpGetPage />}/>
                <Route path="/react-redux-tutorial" element={<ReactReduxPage />}/>
                <Route path="/what-is-micro-front-end-architecture-in-react" element={<MircoFrontEndPage />}/>
                <Route path="/react-forms" element={<ReactFormsPage />} />
                <Route path="/what-is-use-reducer-hook" element={<UseReducerPage />}/>
                <Route path="/what-is-use-context-hook" element={<UseContextPage />}/>
                <Route path="/learning-ci-cd-pipelines-with-jenkins" element={<JenkinsPage />}/>
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
