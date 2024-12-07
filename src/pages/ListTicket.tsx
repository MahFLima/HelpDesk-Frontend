import React, { useEffect, useState } from "react";
import CardTicket from "../components/CardTicket";
import { Payload } from "./Login";
import { jwtDecode } from "jwt-decode";

const ListTicket: React.FC = () => {
  const [dataSolicitacoes, setDataSolicitacoes] = useState([])
  
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
        setDataSolicitacoes(data.message);
        console.log(data.message);
      })
  },[])

  return (
    <div className="ml-16 pt-5 w-screen flex justify-center scroll-none">
    <div className="w-full max-w-4xl px-2 flex flex-col gap-4 mb-4">
      <strong className="inline-block text-3xl text-purple-900">
        Minhas Solicitações
      </strong>
      <CardTicket title="Solicitações" collection={dataSolicitacoes}/>
    </div>
  </div>
  );
};

export default ListTicket;
