import React from "react";
import {
  Chat,
  ChatCenteredDots,
  CheckSquareOffset,
} from "@phosphor-icons/react";
import LineTicket from "../components/LineTicket";
import CardTicket from "../components/CardTicket";
import CardInfo from "../components/CardInfo";

const Dashboard: React.FC = () => {

  return (
    <div className="pt-5 w-screen flex justify-center h-screen bg-gray-200">
      <div className="w-full max-w-4xl">
        <strong className="p-6 inline-block text-3xl text-purple-900">
          Dashboard
        </strong>
        <section className="flex gap-4 ml-4 flex-wrap mb-5">
          <CardInfo num_tickets={3} title="Chamados em aberto">
            <Chat size={40} className="text-purple-950" />
          </CardInfo>
          <CardInfo num_tickets={3} title="Chamados em atendimento">
            <ChatCenteredDots size={40} className="text-purple-950" />
          </CardInfo>
          <CardInfo num_tickets={3} title="Chamados concluidos">
           <CheckSquareOffset size={40} className="text-purple-950" />
          </CardInfo>
        </section>
        <CardTicket title="Ultimas solicitações">
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

export default Dashboard;
