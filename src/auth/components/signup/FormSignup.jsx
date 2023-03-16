import React, { useState } from "react";
import { GiBeastEye, GiBoltEye } from "react-icons/gi";

const FormSignup = ({ handleSubmit, handleOnChange, data }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  return (
    <form
      action=""
      className="w-full py-3 px-5 max-w-md text-black"
      onSubmit={handleSubmit}
    >
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus-within:outline-[#65EF10]"
        autoFocus
        autoComplete="true"
        value={data.firstName}
        onChange={handleOnChange}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        autoComplete="true"
        className="w-full mb-2 bg-slate-200 px-2 py-1 rounded mt-1 focus-within:outline-[#65EF10]"
        value={data.lastName}
        onChange={handleOnChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="true"
        className="w-full mb-2 bg-slate-200 px-2 py-1 rounded mt-1 focus-within:outline-[#65EF10]"
        value={data.email}
        onChange={handleOnChange}
      />

      <label htmlFor="password">Password</label>
      <div className="flex px-2 py-1 bg-slate-200 mt-1 mb-2 focus-within:outline-[#65EF10]">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          className="w-full bg-slate-200 border-none outline-none"
          autoComplete="current-password"
          value={data.password}
          onChange={handleOnChange}
        />
        <span
          className="flex text-xl text-[#65EF10]"
          onClick={handleShowPassword}
        >
          {showPassword ? <GiBeastEye /> : <GiBoltEye />}
        </span>
      </div>

      <label htmlFor="confirmpassword">Confirm Password</label>
      <div className="flex px-2 py-1 bg-slate-200 mt-1 mb-2 focus-within:outline-blue-300">
        <input
          type={showConfirmPassword ? "text" : "password"}
          id="confirmpassword"
          name="confirmPassword"
          autoComplete="current-password"
          className="w-full bg-slate-200 border-none outline-none"
          value={data.confirmPassword}
          onChange={handleOnChange}
        />
        <span
          className="flex text-xl text-[#65EF10]"
          onClick={handleShowConfirmPassword}
        >
          {showConfirmPassword ? <GiBeastEye /> : <GiBoltEye />}
        </span>
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="max-w-[150px] w-full bg-[#65EF10] hover:bg-[#1d8147] cursor-pointer text-white m-auto text-base text-center py-2 rounded-full mt-4"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default FormSignup;
