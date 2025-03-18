
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PageTransition from "./PageTransition";

const Layout = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageTransition
        stage={transitionStage}
        onAnimationEnd={handleAnimationEnd}
        location={displayLocation.pathname}
      >
        <main className="flex-1">
          <Outlet />
        </main>
      </PageTransition>
    </div>
  );
};

export default Layout;
