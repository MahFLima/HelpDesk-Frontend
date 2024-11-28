import React from "react";

interface CardProps {
  title: string;
}

const CardTicket: React.FC<CardProps> = ({ title }) => {
  return (
    <section className=" bg-gray-100 p-4 rounded-lg shadow-md min-w-[400px]">
      <strong className="text-xl inline-block text-purple-900 mb-4">
        {title}
      </strong>
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-sm text-purple-900 uppercase bg-gray-200">
          <tr>
            <th className="px-6 py-3">Patrimônio</th>
            <th className="px-6 py-3">Descrição</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4">10088</td>
            <td className="px-6 py-4">Teste</td>
            <td className="px-6 py-4">Em andamento</td>
            <td className="px-6 py-4 text-blue-700">
              <a href="#">Acessar</a>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4">10088</td>
            <td className="px-6 py-4">Teste</td>
            <td className="px-6 py-4">Em andamento</td>
            <td className="px-6 py-4 text-blue-700">
              <a href="#">Acessar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CardTicket;
