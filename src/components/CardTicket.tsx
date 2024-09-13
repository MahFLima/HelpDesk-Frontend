import React from 'react';

interface CardProps {
  title: string,
  children: React.ReactNode
}

const CardTicket: React.FC<CardProps> = ({title, children}) => {
  return (
    <section className="w-full bg-gray-100 mb-5 p-4 rounded-lg shadow-md ml-4">
      <strong className="text-xl inline-block text-purple-900 mb-4">
        {title}
      </strong>
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-sm text-purple-900 uppercase bg-gray-200">
          <th className="px-6 py-3">Patrimônio</th>
          <th className="px-6 py-3">Descrição</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Action</th>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </section>
  );
}

export default CardTicket