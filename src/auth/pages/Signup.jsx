import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { imageToBase64 } from "../../utility/imageToBase64";
import { toast } from "react-hot-toast";
import FormSignup from "../components/signup/FormSignup";

const Signup = () => {
  const navigate = useNavigate();
 
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

 
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
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (firstName && email && password && confirmPassword) {
      if (!emailRegex.test(email)) {
        toast("Please enter a valid email address");
      } else if (password !== confirmPassword) {
        toast("Password and confirm password not equal");
      } else if (password.length < 8) {
        toast("Password should be at least 8 characters long");
      } else {
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
      }
    } else {
      toast("Please fill in all required fields");
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
            loading="lazy"
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

        <FormSignup handleSubmit={handleSubmit} handleOnChange={handleOnChange} data={data}/>

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
