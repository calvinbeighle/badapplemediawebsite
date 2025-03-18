
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

const Logo = ({ className, size = 64, showText = true }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-2 transition-opacity hover:opacity-80 ${className}`}>
      <img 
        src="/lovable-uploads/fd7998ba-9e01-4cd3-a65c-c9b4f32dc072.png" 
        alt="Bad Apple Media Logo" 
        width={size} 
        height={size} 
        className="object-contain"
      />
      {showText && (
        <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
          BAD APPLE MEDIA
        </span>
      )}
    </Link>
  );
};

export default Logo;
