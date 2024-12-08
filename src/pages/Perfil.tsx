import React from 'react';
import { Payload } from './Login';
import { jwtDecode } from 'jwt-decode';

const TelaPerfil: React.FC = () => {
  const token: string | null = localStorage.getItem('token')
  const decoded: Payload | null = token ? jwtDecode(token) : null;
  console.log(decoded);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Perfil do Usuário</h2>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800">Nome:</p>
          <p className="text-gray-600">{decoded?.nome}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800">Email:</p>
          <p className="text-gray-600">{decoded?.email}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800">Departamento:</p>
          <p className="text-gray-600">{decoded?.departamento}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800">Tipo Usuario</p>
          <p className="text-gray-600">
            {decoded?.tipo ? "Administrador" : "Comum"}
          </p>
        </div>
        <div className="mt-6 flex justify-between">
          <button className="text-base text-gray-100 font-medium bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Editar
          </button>
          <button className="text-base text-gray-100 font-medium bg-red-500 py-2 px-4 rounded-lg hover:bg-red-600 transition">
            Excluir Conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default TelaPerfil;
