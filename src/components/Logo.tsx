import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

const Logo = ({ className, size = 75, showText = true }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-0 transition-opacity hover:opacity-80 ${className}`}>
      <div className="flex items-center -mt-1">
        <img 
          src="/lovable-uploads/logo.svg"
          alt="Bad Apple Media Logo" 
          width={size} 
          height={size} 
          className="object-contain" 
        />
      </div>
      {showText && (
        <span className="text-xl md:text-2xl font-bold tracking-tighter text-white -ml-3">
          BAD APPLE MEDIA
        </span>
      )}
    </Link>
  );
};

export default Logo;
