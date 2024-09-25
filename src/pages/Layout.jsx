import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white h-[9vh]">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
