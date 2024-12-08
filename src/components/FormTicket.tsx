import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Payload } from "../pages/Login";
import { jwtDecode } from "jwt-decode";

interface Props {
  numero_patrimonio: string;
  descricao_problema: string
  user_id: number
}

const FormTicket: React.FC = () => {
  const navigate = useNavigate();
  const [descricao, setDescricao] = useState('');
  const [patrimonio, setPatrimio] = useState('');
  const [id, setId] = useState(0);

  const handlePatrimonioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatrimio(e.target.value);
  };

  const handleDescricaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescricao(e.target.value);
  };

  function handleBack(){
    setPatrimio('')
    setDescricao('');
    navigate(-1);
  }

  function createSolicitation(item: Props){
    if(id !== 0){
      fetch("http://localhost:3001/solicitacao", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify(item)
      })
        .then((resp) => resp.json())
        .then((data) => {
          if(data.message === 'Solicitação incluida'){
            alert(data.message)
            navigate(-1)
          } else {
            alert(data.message)
            console.log(data)
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  const handleSubmit = async () => {
    await createSolicitation({
      numero_patrimonio: patrimonio,
      descricao_problema: descricao,
      user_id: id
    })
  }

  useEffect(() => {
    const token: string | null = localStorage.getItem('token')
    const decoded: Payload | null = token ? jwtDecode(token) : null;
    const dataId = decoded ? decoded.id : 0
    setId(dataId);
  },[])

  return (
    <div className="w-screen h-screen fixed bg-gray-200  flex justify-center items-center ">
      <div className="bg-gray-50 p-10 flex flex-col gap-4 rounded-lg shadow-md">
        <div className="flex flex-col gap-2 min-w-96">
          <label
            htmlFor="numero_patrimonio"
            className="text-base font-medium text-purple-950"
          >
            Numero do Patrimonio
          </label>
          <input
            type="text"
            name="numero_patrimonio"
            id="numero_patrimonio"
            placeholder="Informe o numero do patrimonio"
            className="p-2 border border-purple-950 text-950"
            value={patrimonio}
            onChange={handlePatrimonioChange}
          />
        </div>
        <div className="flex flex-col gap-2 min-w-96">
          <label
            htmlFor="descricao_problema"
            className="text-base font-medium text-purple-950"
          >
            Descrição
          </label>
          <input
            name="descricao_problema"
            id="descricao_problema"
            placeholder="Descreva seu problema"
            className="p-2 border border-purple-950 text-950"
            value={descricao}
            onChange={handleDescricaoChange}
          />
        </div>
        <button 
          className="text-base text-purple-950 font-medium"
          onClick={() => handleSubmit()}
        >
          Criar solicitação
        </button>
        <button
          className="text-base text-gray-100 font-medium bg-purple-950 py-2 hover:bg-purple-800"
          onClick={() => handleBack()}
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default FormTicket;
