import loader from "/assets/loader.gif";

const Loading = () => {
  return (
    <div className="flex justify-center w-full">
      <img src={loader} alt="Loader.." />
    </div>
  );
};

export default Loading;
