import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ListTicket from "../pages/ListTicket";
import FormTicket from "../components/FormTicket";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listTicket" element={<ListTicket />} />
        <Route path="/formTicket" element={<FormTicket />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
