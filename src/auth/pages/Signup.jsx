import React, { useState } from "react";
import { GiBeastEye, GiBoltEye } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { imageToBase64 } from "../../utility/imageToBase64";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch("https://auth-show.onrender.com/signup", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const dataRes = await fetchData.json();

        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        toast("Password and confirm password not equal");
      }
    } else {
      toast("Password enter required fields");
    }
  };

  const handleUploadProfileImage = async (e) => {
    const data = await imageToBase64(e.target.files[0]);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full text-white">
      <div className="rounded-2xl shadow-lg md:max-w-7xl p-5">
        <div className="w-36 h-36 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img
            src={
              data.image
                ? data.image
                : "https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif"
            }
            alt="logo gifs signup"
            className="w-full h-full"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload your picture</p>
            </div>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleUploadProfileImage}
            />
          </label>
        </div>
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
        <p className="text-left text-base mt-2">
          Already have account ?
          <Link to="/login" className="text-[#65EF10] px-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
