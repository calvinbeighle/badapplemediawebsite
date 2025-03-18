
import { cn } from "@/lib/utils";
import Button from "./Button";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features?: string[];
  imageSrc?: string;
  className?: string;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary" | "outline" | "ghost";
  icon?: React.ReactNode;
}

const ServiceCard = ({
  title,
  price,
  description,
  features = [],
  imageSrc,
  className,
  buttonText = "Learn More",
  buttonVariant = "outline",
  icon,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-sm border border-studio-100 transition-all duration-350 hover:shadow-md",
        className
      )}
    >
      {imageSrc && (
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-450 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-2">
          {icon && <span className="mr-2">{icon}</span>}
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <div className="mb-3">
          <span className="text-2xl font-bold">{price}</span>
        </div>
        <p className="text-studio-600 mb-4">{description}</p>
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <span className="text-studio-900 mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <Button to="/booking" variant={buttonVariant} className="w-full">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
