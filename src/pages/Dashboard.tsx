import React, { useEffect, useState } from "react";
import {
  Chat,
  ChatCenteredDots,
  CheckSquareOffset,
} from "@phosphor-icons/react";
import CardTicket from "../components/CardTicket";
import CardInfo from "../components/CardInfo";
import { jwtDecode } from "jwt-decode";
import { Payload } from "./Login";

const Dashboard: React.FC = () => {
  const [dataSolicitacoes, setDataSolicitacoes] = useState([])
  let countEmAberto = 0
  let countEmAndamento = 0
  let countEncerrado = 0

  useEffect(() => {
    const token: String | null = localStorage.getItem("token");
    const decoded: Payload | null = jwtDecode(token);

    fetch(`http://localhost:3001/solicitacao/user/${decoded?.id}`, {
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
        const solicitacoes = data.message;
        const emAberto = solicitacoes.filter((item: any) => item.status === "Em aberto");
        const emAndamento = solicitacoes.filter((item: any) => item.status === "Em andamento");
        const encerradas = solicitacoes.filter((item: any) => item.status === "Encerradas");
        
        setDataSolicitacoes(data.message);
        
        countEmAberto = emAberto.length;  // Correção aqui
        countEmAndamento = emAndamento.length;  // Correção aqui
        countEncerrado =  encerradas.length;  // Correção aqui
      })
  },[])

  return (
    <div className="ml-16 pt-5 w-screen flex justify-center">
      <div className="w-full max-w-4xl px-2">
        <strong className="py-4 inline-block text-3xl text-purple-900">
          Dashboard
        </strong>
        <section className="flex gap-4 flex-wrap mb-5">
          <CardInfo num_tickets={countEmAberto} title="Chamados em aberto">
            <Chat size={40} className="text-purple-950" />
          </CardInfo>
          <CardInfo num_tickets={countEmAndamento} title="Chamados em atendimento">
            <ChatCenteredDots size={40} className="text-purple-950" />
          </CardInfo>
          <CardInfo num_tickets={countEncerrado} title="Chamados concluidos">
           <CheckSquareOffset size={40} className="text-purple-950" />
          </CardInfo>
        </section>
        <CardTicket title="Ultimas solicitações" collection={[]}/>
      </div>
    </div>
  );
};

export default Dashboard;
