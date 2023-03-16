import { Link } from "react-router-dom";
import FormLogin from "../components/login/FormLogin";

const LoginRickAndMorty = () => {
  return (
    <section className="min-h-screen flex items-center justify-center w-full text-white">
      <div className="flex md:flex-row flex-col-reverse rounded-2xl shadow-lg md:max-w-5xl p-5">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-3xl text-[#65EF10]">Login</h2>
          <p className="text-lg md:mt-4 mt-2 text-[#65EF10]">
            If youy already a member, easily log in
          </p>

          <FormLogin />

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
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginRickAndMorty;
