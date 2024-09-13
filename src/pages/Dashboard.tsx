import React, { useState } from "react";
import Menu from "../components/Menu";
import FormTicket from "../components/FormTicket";
import {
  Chat,
  ChatCenteredDots,
  CheckSquareOffset,
} from "@phosphor-icons/react";
import LineTicket from "../components/LineTicket";
import CardTicket from "../components/CardTicket";
import CardInfo from "../components/CardInfo";

const Dashboard: React.FC = () => {
  const [isModalRegister, setIsModalRegister] = useState(false);

  return (
    <div className="flex justify-start h-screen bg-gray-200">
      <Menu onClick={() => setIsModalRegister(true)} />
      <div className="ml-60">
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
      {isModalRegister && (
        <FormTicket setIsModalRegister={setIsModalRegister} />
      )}
    </div>
  );
};

export default Dashboard;
