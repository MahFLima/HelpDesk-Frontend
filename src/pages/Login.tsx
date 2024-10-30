import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";

interface Props{
  mail: string,
  password: string
}

const Login: React.FC = () => {
  const [dataLogin, setDataLogin] = useState<Props[]>([])
  const navigate = useNavigate()

  function handlerChangeLogin(event: React.FormEvent<HTMLFormElement>) {
    setDataLogin({ ...dataLogin, [event.target.name]: event.target.value });
    console.log(dataLogin)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="container sm:mt-40 mt-16 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
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
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
              >
                Entrar
              </button>
            </div>
            <p className="text-sm text-center text-gray-400">
                Ainda não tem uma conta? &nbsp;
              <Link
                to={"/register"}
                className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
              >
                 Inscrever-se
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
