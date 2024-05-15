import { HashLoader } from "react-spinners";
import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="w-full mx-auto flex justify-center items-center">
      <HashLoader color="#0EA5E9" />
    </div>
  );
};
