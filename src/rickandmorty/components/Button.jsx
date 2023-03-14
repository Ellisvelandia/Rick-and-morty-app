import React from "react";

const Button = ({ nextPage, prevPage }) => {
  return (
    <div className="flex justify-between mx-20 text-white">
      <button
        onClick={prevPage}
        className="bg-[#166a74] p-2 px-6 rounded shadow-xl active:scale-110 hover:bg-cyan-600"
      >
        Prev
      </button>
      <button
        onClick={nextPage}
        className="bg-[#166a74] p-2 px-6 rounded shadow-xl active:scale-110 hover:bg-cyan-600"
      >
        Next
      </button>
    </div>
  );
};

export default Button;
