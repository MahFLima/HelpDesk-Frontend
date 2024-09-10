import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div 
      className='h-screen flex justify-center items-center px-20 md:gap-10 flex-wrap'
    >
      <div className='flex flex-col max-w-lg gap-4'>
        <strong className='text-4xl text-purple-800'>Bem-vindo ao HelpHub</strong>
        <p className='text-purple-950'>
          Estamos aqui para ajudar você a resolver qualquer problema ou dúvida que possa ter. Nossa equipe dedicada está pronta para fornecer suporte rápido e eficiente para garantir que suas operações continuem sem interrupções.
        </p>
        <Link 
          to="/dashboard" 
          className='w-48 bg-purple-800 text-gray-100 p-2 text-center hover:bg-purple-900 transition-all rounded-lg'
        >
          Acessar plataforma
        </Link>
      </div>
      <img className='w-full max-w-lg' src='./home-image.svg'/>
    </div>
  );
}

export default Home;