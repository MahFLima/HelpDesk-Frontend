import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { solicitacaoProps } from "../components/CardTicket";

const Solicitation: React.FC = () => {
  const[dataSolicitation, setDataSolicitation] = useState<solicitacaoProps>()
  const navigate = useNavigate();
  const { id } = useParams();

  function handleBack(){
    navigate(-1);
  }

  useEffect(() => {
    fetch(`http://localhost:3001/solicitacao/${id}`, {
      method: "GET",
      mode: "cors",
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setDataSolicitation(data.message[0])
      })
  },[]) 

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800">Número do Patrimônio:</p>
          <p className="text-gray-600">{dataSolicitation?.numero_patrimonio}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800">Descrição:</p>
          <p className="text-gray-600">{dataSolicitation?.descricao_problema}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800">Data de Criação:</p>
          <p className="text-gray-600">
            {dataSolicitation?.created_at}
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">Status:</p>
          <p
            className={`text-white py-1 px-3 rounded-sm ${
              dataSolicitation?.status === 'Encerrado' ? 'bg-green-500' : 'bg-yellow-500'
            }`}
          >
            {dataSolicitation?.status}
          </p>
        </div>
        <button
          className="text-base text-gray-100 font-medium bg-purple-950 py-2 hover:bg-purple-800 mt-2 w-28"
          onClick={() => handleBack()}
        >
          Voltar
        </button>

      </div>
    </div>
  );
};

export default Solicitation;
