
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

type AnimationType = "fadeIn" | "fadeOut";

interface PageTransitionProps {
  children: React.ReactNode;
  animation?: AnimationType;
}

const PageTransition = ({ 
  children, 
  animation = "fadeIn" 
}: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<AnimationType>("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "fadeOut") {
      const timeout = setTimeout(() => {
        setTransitionStage("fadeIn");
        setDisplayLocation(location);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, location, displayLocation]);

  const variants = {
    fadeIn: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    fadeOut: {
      opacity: 0,
      y: 15,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key={displayLocation.pathname}
        variants={variants}
        initial="fadeOut"
        animate={transitionStage}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
