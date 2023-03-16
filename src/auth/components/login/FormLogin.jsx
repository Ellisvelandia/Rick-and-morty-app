import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../../../redux/useSlice";
import PasswordLogin from "./PasswordLogin";

const FormLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const userData = useSelector((state) => state);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const dispatch = useDispatch();

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
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch("https://auth-show.onrender.com/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataRes = await fetchData.json();
      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        navigate("/home");
      }
    } else {
      toast("Password enter required fields");
    }
  };

  return (
    <form
      action=""
      className="flex flex-col gap-4 text-black"
      onSubmit={handleSubmit}
    >
      <input
        className="p-2 mt-8 rounded-lg border "
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        autoFocus
        value={data.email}
        onChange={handleOnChange}
        autoComplete="true"
      />

      <PasswordLogin
        data={data}
        setData={setData}
        handleOnChange={handleOnChange}
      />

      <button className="rounded-xl text-white text-ellipsis py-2 bg-[#65EF10] hover:bg-[#1d8147]">
        Login
      </button>
    </form>
  );
};

export default FormLogin;
