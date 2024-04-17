import { HashLoader } from "react-spinners";

export const ScreenLoader = () => {
  return (
    <div className="fixed inset-0 w-screen h-[100dvh] flex justify-center items-center bg-white/50 z-50">
      <HashLoader color="#0EA5E9" />
    </div>
  );
};
