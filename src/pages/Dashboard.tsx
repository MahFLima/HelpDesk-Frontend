import React, { useState } from "react";
import Menu from "../components/Menu";
import FormTicket from "../components/FormTicket";

const Dashboard: React.FC = () => {
  const [isModalRegister, setIsModalRegister] = useState(false);

  return (
    <div className="h-screen flex justify-start bg-gray-200">
      <Menu onClick={() => setIsModalRegister(true)} />
      <div className="ml-60">
        <strong className="p-6 inline-block text-3xl text-purple-900">
          Dashboard
        </strong>
        <section className="flex gap-4 ml-4">
          <nav className="bg-gray-50">
            <strong>Solicitações</strong>
            <li className="list-none">5 solicitações em aberto</li>
            <li className="list-none">10 solicitações finalizadas</li>
          </nav>
          <nav className="bg-gray-50">
            <strong>Ultimas solicitações</strong>
            <li className="list-none">5 solicitações em aberto</li>
            <li className="list-none">10 solicitações finalizadas</li>
          </nav>
        </section>
      </div>
      {isModalRegister && (
        <FormTicket setIsModalRegister={setIsModalRegister}/>
      )}
    </div>
  );
};

export default Dashboard;
