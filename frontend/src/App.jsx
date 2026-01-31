import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Tasks from "./pages/Tasks";

export default function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/tasks" />}
        />
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/tasks" />}
        />

        {/* Protected route */}
        <Route
          path="/tasks"
          element={token ? <Tasks /> : <Navigate to="/login" />}
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
