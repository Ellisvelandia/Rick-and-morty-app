import { Link } from "react-router-dom";
import FormLogin from "../components/login/FormLogin";

const LoginRickAndMorty = () => {
  return (
    <section className="min-h-screen flex items-center justify-center w-full text-white px-2">
      <div className="flex md:flex-row flex-col-reverse rounded-2xl shadow-2xl md:max-w-5xl p-5">
        <div className="md:w-1/2 md:px-16 px-2">
          <h2 className="md:text-2xl text-xl text-[#65EF10] md:text-left text-center">Login</h2>
          <p className="md:text-lg text-base md:mt-4 mt-2 tracking-widest text-[#65EF10]">
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
          <video
            src="https://res.cloudinary.com/dr49dbp8d/video/upload/v1678994506/rickandmorty/rickLogin_yaroli.mp4"
            loop
            muted
            autoPlay
            width={640}
            height={360}
            className="md:h-[400px] h-auto w-full rounded-2xl"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default LoginRickAndMorty;
