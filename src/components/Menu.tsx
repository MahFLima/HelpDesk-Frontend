import { File, FilePlus, House, SignOut } from "@phosphor-icons/react";
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
          <p className="text-base">Perfil</p>
        </li>
        <li className="fixed bottom-0 left-0 p-4 list-none hover:opacity-70">
          <Link className="w-full" to="/">
            Sair
          </Link>
        </li>
      </nav>
      <nav className="desktop:hidden flex justify-center gap-4 flex-col fixed h-screen top-0 left-0 bg-purple-800 text-gray-100">
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
          to="/login"
          className="w-full p-4 list-none hover:opacity-70"
        >
          <SignOut size={32} />
        </Link>
      </nav>
    </>
  );
};

export default Menu;
