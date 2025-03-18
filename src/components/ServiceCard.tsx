
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
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-sm border border-studio-100 transition-all duration-350 hover:shadow-md",
        className
      )}
    >
      {imageSrc && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-450 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
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
