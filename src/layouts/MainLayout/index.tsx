import { Outlet } from "react-router-dom";
import { Header } from "../../components/ui/Header";
import { ToastContainer } from "react-toastify";
import { Footer } from "../../components/ui/Footer";

export const MainLayout = () => {
  return (
    <div className="App flex flex-col justify-between">
      {/* <Header search={search} onSearch={handleSearchProduct}/> */}
      <Header />
      <ToastContainer />
      <div className="w-full m-auto h-full grow flex justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
