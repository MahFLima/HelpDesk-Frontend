import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ListTicket from "../pages/ListTicket";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listTicket" element={<ListTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
