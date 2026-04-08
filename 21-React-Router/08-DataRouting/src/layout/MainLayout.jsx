import Navbar from "../components/Navbar";
import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const MainLayout = () => {
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();

  if (!loggedInUser) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
