import React from 'react';

interface Props{
  num_tickets: number,
  title: string,
  children: React.ReactNode
}

const CardInfo: React.FC<Props> = ({num_tickets, title, children}) => {
  return (
    <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg shadow-md">
      {children}
      <div>
        <strong className="text-xl">{num_tickets}</strong>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
}

export default CardInfo
