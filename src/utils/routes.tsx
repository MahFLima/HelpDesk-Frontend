import { Route, Routes, useLocation } from "react-router-dom";
import Login, { Payload } from "../pages/Login";
import Register from "../pages/Register";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ListTicket from "../pages/ListTicket";
import FormTicket from "../components/FormTicket";
import Menu from "../components/Menu";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const checkToken = async () => {
    let token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: Payload | null = jwtDecode(token);
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Erro ao verificar o token:", err);
        setIsAuthenticated(false);
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, [isAuthenticated]);

  const shouldShowMenu = ["/dashboard", "/listTicket", "/formTicket"].includes(location.pathname);

  return (
    <>
      {shouldShowMenu && <Menu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        {isAuthenticated && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listTicket" element={<ListTicket />} />
            <Route path="/formTicket" element={<FormTicket />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default AppRoutes