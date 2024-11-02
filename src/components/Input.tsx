import React from 'react';

interface InputProps {
  title: string,
  type: string,
  name: string,
  placeholder: string,
  handlerChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm text-gray-600"
      >
        {props.title}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        onChange={props.handlerChange}
        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-100 focus:border-purple-500"
      />
    </div>
  );
};

export default Input;
