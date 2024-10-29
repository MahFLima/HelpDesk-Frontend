import React from "react";
import Menu from "../components/Menu";
import LineTicket from "../components/LineTicket";
import CardTicket from "../components/CardTicket";

const ListTicket: React.FC = () => {

  return (
    <div className="flex justify-start bg-gray-200">
      <Menu/>
      <div className="ml-60">
        <strong className="p-6 inline-block text-3xl text-purple-900">
          Solicitações
        </strong>
        <CardTicket title="Solicitações em Aberto">
          <LineTicket
            patrimonio="2323"
            description="Computador com tela azul"
            status="Em Atendimento"
          />
          <LineTicket
            patrimonio="2323"
            description="Computador com tela azul"
            status="Em Atendimento"
          />
          <LineTicket
            patrimonio="2323"
            description="Computador com tela azul"
            status="Em Atendimento"
          />
        </CardTicket>
        <CardTicket title="Solicitações em Andamento">
          <LineTicket
            patrimonio="2323"
            description="Computador com tela azul"
            status="Em Atendimento"
          />
          <LineTicket
            patrimonio="2323"
            description="Computador com tela azul"
            status="Em Atendimento"
          />
          <LineTicket
            patrimonio="2323"
            description="Computador com tela azul"
            status="Em Atendimento"
          />
        </CardTicket>
        <CardTicket title="Solicitações Concluidas">
          <LineTicket
            patrimonio="2323"
            description="Computador com tela azul"
            status="Em Atendimento"
          />
          <LineTicket
            patrimonio="2323"
            description="Computador com tela azul"
            status="Em Atendimento"
          />
          <LineTicket
            patrimonio="2323"
            description="Computador com tela azul"
            status="Em Atendimento"
          />
        </CardTicket>
      </div>
    </div>
  );
};

export default ListTicket;
