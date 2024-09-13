import React from 'react';

interface Props {
  patrimonio: string,
  description: string,
  status: string
}

const LineTicket: React.FC<Props> = ({patrimonio, description, status}) =>{
  return(
    <tr className="">
      <td className='px-6 py-4'>{patrimonio}</td>
      <td className='px-6 py-4'>{description}</td>
      <td className='px-6 py-4'>{status}</td>
      <td className='px-6 py-4 text-blue-700'><a href="#">Acessar</a></td>
    </tr>
  )
}

export default LineTicket