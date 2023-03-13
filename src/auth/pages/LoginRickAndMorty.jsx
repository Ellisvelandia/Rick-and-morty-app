import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GiBeastEye, GiBoltEye } from "react-icons/gi";

const LoginRickAndMorty = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [eyeIcon, setEyeIcon] = useState(<GiBeastEye size={20} />);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setEyeIcon(
      showPassword ? <GiBeastEye size={20} /> : <GiBoltEye size={20} />
    );
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center w-full">
      <div className="bg-cyan-100 flex md:flex-row flex-col-reverse rounded-2xl shadow-lg md:max-w-5xl p-5">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-3xl text-[#2EA860]">Login</h2>
          <p className="text-sm md:mt-4 mt-2 text-[#2EA860]">
            If youy already a member, easily log in
          </p>
          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-lg border "
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 w-full rounded-lg border "
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <span
                size={20}
                className="absolute top-1/2 right-3 -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {eyeIcon}
              </span>
            </div>
            <button className="rounded-xl text-white text-ellipsis py-2 bg-[#2EA860]">
              Login
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">or</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white py-2 w-full rounded-xl mt-5 flex items-center justify-center text-sm">
            <FcGoogle size={25} className="mr-3" /> Login With Google
          </button>

          <div className="mt-3 text-xs flex justify-between items-center">
            <p>Dont't have an account</p>
            <button className="py-2 px-5 bg-white border rounded-xl ">
              Register
            </button>
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
