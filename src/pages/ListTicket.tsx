import React, { useState } from "react";
import Menu from "../components/Menu";
import FormTicket from "../components/FormTicket";

const ListTicket: React.FC = () => {
  const [isModalRegister, setIsModalRegister] = useState(false);

  return (
    <div className="h-screen flex justify-start bg-gray-200">
      <Menu onClick={() => setIsModalRegister(true)} />
      <div className="ml-60">
        <strong className="p-6 inline-block text-3xl text-purple-900">
          Solicitações
        </strong>
      </div>
      {isModalRegister && (
        <FormTicket setIsModalRegister={setIsModalRegister}/>
      )}
    </div>
  );
};

export default ListTicket;
