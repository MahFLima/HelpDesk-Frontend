import React from 'react';

interface InputProps {
  title: string,
  type: string,
  name: string,
  placeholder: string,
  handlerChangeLogin: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
      >
        {props.title}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        onChange={props.handlerChangeLogin}
        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
      />
    </div>
  );
};

export default Input;
