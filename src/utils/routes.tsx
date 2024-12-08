import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ListTicket from "../pages/ListTicket";
import FormTicket from "../components/FormTicket";
import Menu from "../components/Menu";
import Solicitation from "../pages/Solicitation";
import TelaPerfil from "../pages/Perfil";

const AppRoutes = () => {
  const location = useLocation();

  const shouldShowMenu = ["/dashboard", "/listTicket", "/formTicket", "/perfil"].includes(location.pathname);

  return (
    <>
      {shouldShowMenu && <Menu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listTicket" element={<ListTicket />} />
        <Route path="/formTicket" element={<FormTicket />} />
        <Route path="/solicitation/:id" element={<Solicitation/>} />
        <Route path="/perfil" element={<TelaPerfil/>} />
      </Routes>
    </>
  );
};

export default AppRoutes