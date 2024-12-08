import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";

interface Props {
  mail: string;
  password: string;
}

export interface Payload {
  id: number;
  nome: string;
  email: string;
  senha: string;
  departamento: string;
  tipo: boolean;
}

const Login: React.FC = () => {
  const [dataLogin, setDataLogin] = useState<Props>({ mail: "", password: "" });
  const navigate = useNavigate();

  const handlerChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataLogin((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Envia os dados de login para o servidor
    fetch("http://localhost:3001/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify(dataLogin),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message === 'E-mail ou senha invalida') {
          alert(data.message);
        } else if (data.message === 'Informe um email válido') {
          alert(data.message);
        } else if (data.message === 'Informe email e senha') {
          alert(data.message);
        } else {
          try {
            console.log(data.message);
            localStorage.setItem("token", data.message);
            navigate('/dashboard');
          } catch (err) {
            console.log("Erro ao processar o token:", err);
          }
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="container my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
        {/* <!-- header -->   */}
        <div className="text-center my-6">
          <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
          <p className="text-gray-500">Faça login para acessar sua conta</p>
        </div>
        {/* sign-in  */}
        <div className="m-6">
          <form className="mb-4" onSubmit={handleSubmit}>
            <Input
              title="Email"
              type="email"
              name="mail"
              placeholder="Informe seu e-mail"
              handlerChange={handlerChangeLogin}
            />
            <Input
              title="Senha"
              type="password"
              name="password"
              placeholder="Informe sua senha"
              handlerChange={handlerChangeLogin}
            />
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none duration-100 ease-in-out"
              >
                Entrar
              </button>
            </div>
            <p className="text-sm text-center text-gray-400">
              Ainda não tem uma conta? &nbsp;
              <Link
                to={"/register"}
                className="font-semibold text-purple-500 focus:text-purple-600 focus:outline-none focus:underline"
              >
                Inscrever-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
