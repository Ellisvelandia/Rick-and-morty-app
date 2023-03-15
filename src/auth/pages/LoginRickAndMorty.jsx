import { useState } from "react";
import { GiBeastEye, GiBoltEye } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../../redux/useSlice";

const LoginRickAndMorty = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [eyeIcon, setEyeIcon] = useState(<GiBeastEye size={20} />);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setEyeIcon(
      showPassword ? <GiBeastEye size={20} /> : <GiBoltEye size={20} />
    );
  };

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
  <section className="min-h-screen flex items-center justify-center w-full text-white">
      <div className="flex md:flex-row flex-col-reverse rounded-2xl shadow-lg md:max-w-5xl p-5">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-3xl text-[#65EF10]">Login</h2>
          <p className="text-lg md:mt-4 mt-2 text-[#65EF10]">
            If youy already a member, easily log in
          </p>
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
            <div className="relative">
              <input
                className="p-2 w-full rounded-lg border "
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                value={data.password}
                onChange={handleOnChange}
              />
              <span
                size={20}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-[#65EF10] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {eyeIcon}
              </span>
            </div>
            <button className="rounded-xl text-white text-ellipsis py-2 bg-[#65EF10] hover:bg-[#1d8147]">
              Login
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <hr className="border-gray-400" />
          </div>

          <div className="mt-3 md:text-base text-xs flex justify-between items-center">
            <p>Dont't have an account ?</p>
            <Link
              to="/signup"
              className="py-2 px-5 bg-white border rounded-xl text-[#65EF10]"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 p-1 py-4">
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678680085/rickandmorty/rick-and-morty_va5oio.gif"
            alt="rick and morty gifs"
            width={640}
            height={360}
            className="md:h-[400px] h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginRickAndMorty;
