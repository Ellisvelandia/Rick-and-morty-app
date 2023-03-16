import React, { useState } from "react";
import { GiBeastEye, GiBoltEye } from "react-icons/gi";

const PasswordLogin = ({ handleOnChange, data, setData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(<GiBeastEye size={20} />);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setEyeIcon(
      showPassword ? <GiBeastEye size={20} /> : <GiBoltEye size={20} />
    );
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    handleOnChange(e);
  };

  return (
    <div className="relative">
      <input
        className="p-2 w-full rounded-lg border "
        type={showPassword ? "text" : "password"}
        name="password"
        id="password"
        placeholder="Password"
        autoComplete="current-password"
        value={data.password}
        onChange={handlePasswordChange}
      />
      <span
        size={20}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-[#65EF10] cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {eyeIcon}
      </span>
    </div>
  );
};

export default PasswordLogin;
