import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { solicitacaoProps } from "../components/CardTicket";

interface Props {
  numero_patrimonio: string;
  descricao_problema: string
  id: number
}

const Solicitation: React.FC = () => {
  const[dataSolicitation, setDataSolicitation] = useState<solicitacaoProps>({
    id: 0,
    numero_patrimonio: "",
    descricao_problema: "",
    status: "",
    created_at: "",
    adm_id: 0,
    user_id: 0
  }
  )
  const navigate = useNavigate();
  const { id } = useParams();
  const [descricao, setDescricao] = useState('');
  const [patrimonio, setPatrimio] = useState('');

  function handleBack(){
    navigate(-1);
  }

  function deleteSolicitation(){
    fetch(`http://localhost:3001/solicitacao/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert(data.message)
        navigate(-1)
      })
  }

  function updateSolicitation(item: Props){
    if(dataSolicitation.id !== 0){
      fetch("http://localhost:3001/solicitacao", {
        method: "PUT",
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

  const handlePatrimonioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatrimio(e.target.value);
    console.log(patrimonio)
  };

  const handleDescricaoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescricao(e.target.value);
    console.log(descricao);
  };

  const handleSubmitUpdate = async () => {
    await updateSolicitation({
      numero_patrimonio: patrimonio,
      descricao_problema: descricao,
      id: dataSolicitation.id
    })
    navigate(-1)
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
        setDescricao(data.message[0].descricao_problema)
        setPatrimio(data.message[0].numero_patrimonio)
      })
  },[])

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4 flex flex-col gap-2">
          <p className="text-lg font-semibold text-gray-800">Número do Patrimônio:</p>
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
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="descricao" className="text-lg font-semibold text-gray-800">Descrição:</label>
          <textarea
            name="descricao"
            id="descricao"
            placeholder="Informe o problema"
            className="p-2 border border-purple-950 text-950"
            value={descricao} // Agora usa o estado descricao
            onChange={handleDescricaoChange}
          />
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
          className="text-base text-gray-100 font-medium bg-purple-950 py-2 hover:bg-purple-800 mt-2 w-28 mr-2"
          onClick={() => handleBack()}
        >
          Voltar
        </button>
        <button
          className="text-base text-gray-100 font-medium bg-purple-950 py-2 hover:bg-purple-800 mt-2 w-28 mr-2"
          onClick={() => deleteSolicitation()}
        >
          Excluir
        </button>
        <button
          className="text-base text-gray-100 font-medium bg-purple-950 py-2 hover:bg-purple-800 mt-2 w-28"
          onClick={() => handleSubmitUpdate()}
        >
          Alterar
        </button>

      </div>
    </div>
  );
};

export default Solicitation;
