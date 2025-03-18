
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Studio", path: "/studio" },
  { name: "Pricing", path: "/pricing" },
  { name: "Book Now", path: "/booking" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-350 px-6 md:px-10",
        isScrolled
          ? "py-4 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-6 bg-black/40 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-250 hover:opacity-70",
                link.path === location.pathname
                  ? "text-white opacity-100 font-semibold after:content-[''] after:block after:h-0.5 after:w-1/2 after:mx-auto after:mt-1 after:bg-purple-200"
                  : link.path === "/booking" 
                    ? "text-white opacity-90" 
                    : "text-white opacity-90"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-40 pt-24 px-6 transform transition-transform duration-350 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-lg font-medium transition-all duration-250",
                link.path === location.pathname
                  ? "text-white after:content-[''] after:block after:h-0.5 after:w-6 after:mx-auto after:mt-1 after:bg-purple-200"
                  : link.path === "/booking" 
                    ? "text-white" 
                    : "text-white/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
