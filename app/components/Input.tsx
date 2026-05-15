import React from "react";

interface InputProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
}


const Input: React.FC<InputProps> = ({
  id,
  value,
  onChange,
  label,
  type = "text",
}) => {
  return (
    <div className="relative">
      {/* 👉 INPUT */}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="
          block
          text-md
          text-white
          rounded-md
          w-full
          appearance-none
          outline-none
          ring-0
          peer
          px-6
          pt-6
          pb-1
          bg-neutral-700
        "
      />

      {/* 👉 LABEL */}
      <label
        htmlFor={id}
        className="
          absolute
          text-md
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-left
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
