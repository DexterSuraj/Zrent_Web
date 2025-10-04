import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import LoginPage from "../components/Login";
import Signup from "../components/Signup";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
