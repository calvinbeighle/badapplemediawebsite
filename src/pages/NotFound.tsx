
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-8xl font-bold text-studio-900 mb-6">404</h1>
        <h2 className="text-2xl font-medium mb-4">Page Not Found</h2>
        <p className="text-studio-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button to="/" size="lg">
          Return to Homepage
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
