
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import PageTransition from "./PageTransition";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageTransition>
        <main className="flex-1">
          <Outlet />
        </main>
      </PageTransition>
    </div>
  );
};

export default Layout;
