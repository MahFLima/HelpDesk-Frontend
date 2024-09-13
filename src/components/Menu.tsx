import React from 'react';
import { Link } from 'react-router-dom';

type menuProps = {
  onClick: () => void; // Tipagem da função de clique
}

const Menu: React.FC<menuProps> = ({onClick}) => {
  return(
    <nav 
      className='flex flex-col fixed h-screen top-0 left-0 bg-purple-800 text-gray-100 w-60'
    >
      <li className='p-6 list-none'>
        <strong className='text-3xl'>HelpHub</strong>
      </li>
      <li className='w-full p-4 list-none hover:opacity-70'>
        <Link to="/dashboard" className='text-base'>Dashboard</Link>
      </li>
      <li className='w-full p-4 list-none hover:opacity-70'>
        <button onClick={onClick} className='text-base'>Nova Solicitação</button>
      </li>
      <li className='p-4 list-none hover:opacity-70'>
        <Link className='text-base' to="/listTicket">Solicitações</Link>
      </li>
      <li className='p-4 list-none hover:opacity-70'>
        <p className='text-base'>Perfil</p>
      </li>
      <li className='fixed bottom-0 left-0 p-4 list-none hover:opacity-70'>
        <Link className='w-full' to='/'>Sair</Link>
      </li>
    </nav>
  );
}

export default Menu;