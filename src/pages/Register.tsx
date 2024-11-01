import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";

interface Props {
  nome: string;
  email: string;
  senha: string;
  departamento: string;
  tipo: string;
}

const Register: React.FC = () => {
  const [dataRegister, setDataRegister] = useState<Props[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    setDataRegister({...dataRegister, tipo: "user"})
  },[])

  function handlerChangeRegister(event: React.FormEvent<HTMLFormElement>) {
    setDataRegister({ ...dataRegister, [event.target.name]: event.target.value });
  }

  function createUser(user: Props) {

    fetch("http://localhost:3001/user", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if(data.message === "Usuario incluido"){
          alert(data.message)
          navigate('/login')
        }
        alert(data.message)
        console.log(data)
      })
      .catch((err) => {
        alert(err)
      });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDataRegister({...dataRegister, tipo: "user"})
    await createUser(dataRegister)
  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="container sm:mt-40 mt-16 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
        {/* <!-- header -->   */}
        <div className="text-center my-6">
          <h1 className="text-3xl font-semibold text-gray-700">Crie sua conta</h1>
        </div>
        {/* sign-in  */}
        <div className="m-6">
          <form className="mb-4" onSubmit={handleSubmit}>
            <Input
              title="Nome Completo"
              type="text"
              name="nome"
              placeholder="Insira seu nome"
              handlerChange={handlerChangeRegister}
            />
            <Input
              title="E-mail"
              type="email"
              name="email"
              placeholder="Informe seu e-mail"
              handlerChange={handlerChangeRegister}
            />
            <Input
              title="Senha"
              type="password"
              name="senha"
              placeholder="Informe sua senha"
              handlerChange={handlerChangeRegister}
            />
            <Input
              title="Departamento"
              type="text"
              name="departamento"
              placeholder="Informe seu departamento"
              handlerChange={handlerChangeRegister}
            />

            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
              >
                Registrar
              </button>
            </div>
            <p className="text-sm text-center text-gray-400">
              Já tem uma conta? Faça login &nbsp;
              <Link
                to={"/login"}
                className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
              >
                aqui
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
