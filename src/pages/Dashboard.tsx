import React from "react";
import {
  Chat,
  ChatCenteredDots,
  CheckSquareOffset,
} from "@phosphor-icons/react";
import CardTicket from "../components/CardTicket";
import CardInfo from "../components/CardInfo";

const Dashboard: React.FC = () => {

  return (
    <div className="ml-16 pt-5 w-screen flex justify-center">
      <div className="w-full max-w-4xl px-2">
        <strong className="py-4 inline-block text-3xl text-purple-900">
          Dashboard
        </strong>
        <section className="flex gap-4 flex-wrap mb-5">
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
        <CardTicket title="Ultimas solicitações"/>
      </div>
    </div>
  );
};

export default Dashboard;
