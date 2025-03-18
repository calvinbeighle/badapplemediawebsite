
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
          src="/lovable-uploads/281a642b-77e8-40ea-acfb-1cacb20d94da.png" 
          alt="Bad Apple Media Logo" 
          width={size} 
          height={size} 
          className="object-contain" 
        />
      </div>
      {showText && (
        <span className="text-xl md:text-2xl font-bold tracking-tighter text-white -ml-1">
          BAD APPLE MEDIA
        </span>
      )}
    </Link>
  );
};

export default Logo;
