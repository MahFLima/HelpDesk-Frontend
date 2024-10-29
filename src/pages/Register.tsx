import React, {useState} from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

interface Props{
  nome: string,
  email: string,
  senha: string,
  departamento: string
}

const Register: React.FC = () => {
  const [dataRegister, setDataRegister] = useState<Props[]>([])

  function handlerChangeLogin(event: React.FormEvent<HTMLFormElement>) {
    setDataLogin({ ...dataLogin, [event.target.name]: event.target.value });
    console.log(dataLogin)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="container sm:mt-40 mt-16 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
        {/* <!-- header -->   */}
        <div className="text-center my-6">
          <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
          <p className="text-gray-500">Sign Up</p>
        </div>
        {/* sign-in  */}
        <div className="m-6">
          <form className="mb-4" onSubmit={handleSubmit}>
            <Input
              title="Email Address"
              type="email"
              name="mail"
              placeholder="Your email address"
              handlerChangeLogin={handlerChangeLogin}
            />
            <Input
              title="Password"
              type="password"
              name="password"
              placeholder="Your password"
              handlerChangeLogin={handlerChangeLogin}
            />
            <Input
              title="Email Address"
              type="email"
              name="mail"
              placeholder="Your email address"
              handlerChangeLogin={handlerChangeLogin}
            />
            <Input
              title="Password"
              type="password"
              name="password"
              placeholder="Your password"
              handlerChangeLogin={handlerChangeLogin}
            />
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
              >
                Sign in
              </button>
            </div>
            <p className="text-sm text-center text-gray-400">
              Don&#x27;t have an account yet? &nbsp;
              <Link
                to={"/register"}
                className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
              >
                Sign up
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
