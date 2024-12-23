import { File, FilePlus, House, SignOut, User } from "@phosphor-icons/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="desktop:flex hidden flex-col fixed h-screen top-0 left-0 bg-purple-800 text-gray-100 w-60">
        <li className="p-6 list-none">
          <strong className="text-3xl">HelpHub</strong>
        </li>
        <li className="w-full p-4 list-none hover:opacity-70">
          <Link to="/dashboard" className="text-base">
            Dashboard
          </Link>
        </li>
        <li className="w-full p-4 list-none hover:opacity-70">
          <button onClick={() => navigate("/formTicket")} className="text-base">
            Nova Solicitação
          </button>
        </li>
        <li className="p-4 list-none hover:opacity-70">
          <Link className="text-base" to="/listTicket">
            Minhas Solicitações
          </Link>
        </li>
        <li className="p-4 list-none hover:opacity-70">
          <Link to={'/perfil'} className="text-base">Perfil</Link>
        </li>
        <li className="fixed bottom-0 left-0 p-4 list-none hover:opacity-70">
          <Link className="w-full" to="/">
            Sair
          </Link>
        </li>
      </nav>
      <nav className="desktop:hidden fixed h-screen top-0 left-0 bg-purple-800 text-gray-100">
        <Link to="/dashboard" className="w-full h-screen p-4 list-none hover:opacity-70">
          <House size={32} />
        </Link>
        <Link
          to="/formTicket"
          className="w-full p-4 list-none hover:opacity-70"
        >
          <FilePlus size={32} />
        </Link>
        <Link
          to="/listTicket"
          className="w-full p-4 list-none hover:opacity-70"
        >
          <File size={32} />
        </Link>
        <Link
          to="/perfil"
          className="w-full p-4 list-none hover:opacity-70"
        >
          <User size={32} />
        </Link>
        <button
          onClick={() => {
            localStorage.setItem("token", "");
            navigate("/login")
          }}
          className="hover:opacity-70 mt-4"
        >
          <SignOut size={32} />
        </button>
      </nav>
    </>
  );
};

export default Menu;
