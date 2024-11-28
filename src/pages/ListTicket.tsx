import React from "react";
import CardTicket from "../components/CardTicket";

const ListTicket: React.FC = () => {

  return (
    <div className="ml-16 pt-5 w-screen flex justify-center scroll-none">
    <div className="w-full max-w-4xl px-2 flex flex-col gap-4 mb-4">
      <strong className="inline-block text-3xl text-purple-900">
        Minhas Solicitações
      </strong>
      <CardTicket title="Solicitações em Aberto"/>
      <CardTicket title="Solicitações em Andamento"/>
      <CardTicket title="Solicitações Concluidas"/>
    </div>
  </div>
  );
};

export default ListTicket;
