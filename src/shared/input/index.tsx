"use client";

import type { FC, ChangeEvent } from "react";

interface IInput {
  type: string;
  value?: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  label: string;
}
export const Input: FC<IInput> = ({
  type,
  value,
  onChange,
  name,
  placeholder,
  label,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-500">
        {label}
      </label>
      <input
        className="h-10 bg-blue-50 border border-blue-100 rounded-xl px-4  placeholder-[#9CA3AF] focus:outline-none focus:ring-0"
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
