import React from "react";

type props = {
  setIsModalRegister: (isModelRegister: false) => void;
}

const FormTicket: React.FC<props> = ({setIsModalRegister}) => {

  const handleBack = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalRegister(false)
  };

  return (
    <div className="w-screen h-screen fixed bg-gray-500  flex justify-center items-center ">
      <form
        className=" bg-gray-50 p-10 flex flex-col gap-4 rounded-lg shadow-md"
      >
        <div className="flex flex-col gap-2 min-w-96">
          <label
            htmlFor="patrimonio"
            className="text-base font-medium text-purple-950"
          >
            Numero do Patrimonio
          </label>
          <input
            type="text"
            name="patrimonio"
            id="patrimonio"
            placeholder="Informe o numero do patrimonio"
            className="p-2 border border-purple-950 text-950"
          />
        </div>
        <div className="flex flex-col gap-2 min-w-96">
          <label
            htmlFor="descricao"
            className="text-base font-medium text-purple-950"
          >
            Descrição
          </label>
          <textarea
            rows={5}
            name="descricao"
            id="descricao"
            placeholder="Descreva seu problema"
            className="p-2 border border-purple-950 text-950"
          />
        </div>
        <button onClick={() => {console.log("ok")}} className="text-base text-purple-950 font-medium">
          Criar solicitação
        </button>
        <button
          className="text-base text-purple-950 font-medium"
          onClick={() => {handleBack}}
        >
          Voltar
        </button>
      </form>
    </div>
  );
};

export default FormTicket;
