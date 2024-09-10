import React, { useState } from "react";
import Menu from "../components/Menu";
import FormTicket from "../components/FormTicket";

const ListTicket: React.FC = () => {
  const [isModelRegister, setIsModelRegister] = useState(false);

  const handleBack = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModelRegister(false)
  };

  return (
    <div className="h-screen flex justify-start bg-gray-200">
      <Menu onClick={() => setIsModelRegister(true)} />
      <div className="ml-60">
        <strong className="p-6 inline-block text-3xl text-purple-900">
          Solicitações
        </strong>
      </div>
      {isModelRegister && (
        <FormTicket onClick={() => {handleBack}}/>
      )}
    </div>
  );
};

export default ListTicket;
