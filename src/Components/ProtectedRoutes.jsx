// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoutes = () => {
//     const token = localStorage.getItem("token");
//     return token ? <Outlet /> : <Navigate to="/login"/>
// }

// export default ProtectedRoutes;

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const IDLE_TIME = 1 * 60 * 1000; // 2 minutes

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const idleTimer = useRef(null);
  const token = localStorage.getItem("token");

  const logoutUser = () => {
    localStorage.removeItem("token"); // or remove specific keys
    navigate("/login", { replace: true });
  };

  const resetIdleTimer = () => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
    }
    idleTimer.current = setTimeout(logoutUser, IDLE_TIME);
  };

  useEffect(() => {
    if (!token) return;

    const events = [
      "mousemove",
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
    ];

    events.forEach(event =>
      window.addEventListener(event, resetIdleTimer)
    );

    resetIdleTimer(); // start timer on load

    return () => {
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
      events.forEach(event =>
        window.removeEventListener(event, resetIdleTimer)
      );
    };
  }, [token]);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
