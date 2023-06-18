import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full mx-auto flex justify-center items-center">
      <HashLoader color="#0EA5E9" />
    </div>
  );
};

export default Loader;
