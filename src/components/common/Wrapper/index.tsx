import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode | ReactNode[];
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="w-full max-w-screen-2xl px-5 lg:px-8 mx-auto flex flex-col">
      {children}
    </div>
  );
};
