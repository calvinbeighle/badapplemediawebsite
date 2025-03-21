
import { motion } from "framer-motion";
import { Mic, Camera, Monitor, PlaySquare, Headphones } from "lucide-react";
import StudioCard from "@/components/StudioCard";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Studio = () => {
  const equipmentList = [
    {
      title: "Microphones",
      description: "Shure SM7B, professional-grade microphone perfect for voice recording with excellent noise rejection.",
      imageSrc: "/lovable-uploads/compressed_microphone2.png",
      icon: <Mic className="mb-2 h-6 w-6" />
    },
    {
      title: "Rodecaster Pro 2",
      description: "Professional audio mixer designed specifically for podcasting with built-in effects and multitrack recording.",
      imageSrc: "/lovable-uploads/compressed_rhodecaster2.png",
      icon: <Monitor className="mb-2 h-6 w-6" />
    },
    {
      title: "Sony FX30 Cameras",
      description: "2× Sony FX30 professional cinema cameras featuring Super 35mm sensors for stunning 4K video.",
      imageSrc: "/lovable-uploads/compressed_sonyalpha7s.png",
      icon: <Camera className="mb-2 h-6 w-6" />
    },
    {
      title: "Sony A7SIII",
      description: "Full-frame mirrorless camera with exceptional low-light performance and advanced video capabilities.",
      imageSrc: "/lovable-uploads/compressed_sonylong.png",
      icon: <Camera className="mb-2 h-6 w-6" />
    },
    {
      title: "Headphones",
      description: "4× Sony MDR-7506, industry-standard closed-back headphones for monitoring.",
      imageSrc: "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200",
      icon: <Headphones className="mb-2 h-6 w-6" />
    },
    {
      title: "Acoustic Treatment",
      description: "Premium sound panels and bass traps for professional-grade sound isolation.",
      imageSrc: "https://images.unsplash.com/photo-1585536309334-033e3e708d0c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const studioSpaces = [
    {
      title: "Podcast Studio",
      description: "Intimate setting with professional equipment for up to 4 guests.",
      imageSrc: "/lovable-uploads/5be7c992-e59c-4300-b660-15ef39b6631e.png",
      price: "From $75/hour",
      buttonText: "Book Now"
    },
    {
      title: "Cyc Wall Studio",
      description: "Perfect for e-commerce, corporate videos, ads, and photography.",
      imageSrc: "/lovable-uploads/0f7668ed-d3fe-4545-9fc4-4ec53a6a6c05.png",
      price: "From $90/hour",
      buttonText: "Book Now"
    },
    {
      title: "RGB Lighting Setup",
      description: "Customizable lighting for creative projects and visual content.",
      imageSrc: "/lovable-uploads/f7aacc24-737b-458d-be95-cf9fbbb00c07.png",
      price: "From $85/hour",
      buttonText: "Book Now"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/5be7c992-e59c-4300-b660-15ef39b6631e.png"
            alt="Recording Studio"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Studio Spaces
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Professional environments designed for creating exceptional content, from podcasts to visual media.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button 
              to="/booking" 
              variant="primary" 
              size="lg"
              className="bg-white text-studio-900 hover:bg-studio-50"
            >
              Book Studio Time
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Studio Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Studio Spaces</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Explore our professionally designed studio environments for all your content creation needs.
            </p>
          </div>
          
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {studioSpaces.map((space, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <ServiceCard
                      title={space.title}
                      price={space.price}
                      description={space.description}
                      imageSrc={space.imageSrc}
                      buttonText={space.buttonText}
                      buttonVariant="primary"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mx-2 translate-y-0 left-0" />
              <CarouselNext className="relative static mx-2 translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Studio Overview */}
      <section className="py-16 bg-studio-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">State-of-the-Art Recording Space</h2>
              <p className="text-studio-600 mb-6">
                Our professionally designed studio features acoustic treatment for pristine sound quality and comfortable seating for up to four people. The space includes a dedicated control room and recording booth, ensuring separation between hosts and guests when needed.
              </p>
              <p className="text-studio-600 mb-8">
                With adjustable lighting, climate control, and a relaxing atmosphere, you'll be able to focus entirely on creating great content without technical distractions.
              </p>
              <Button to="/booking">Book Studio Time</Button>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <img
                src="/lovable-uploads/5be7c992-e59c-4300-b660-15ef39b6631e.png"
                alt="Studio Interior"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Cyc Wall Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/lovable-uploads/0f7668ed-d3fe-4545-9fc4-4ec53a6a6c05.png"
                  alt="Cyc Wall Studio"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Cyc Wall</h2>
              <p className="text-studio-600 mb-6">
                Our cyc wall provides a seamless background for photography, videography, and product shoots. Perfect for e-commerce, corporate videos, advertisements, and creative projects.
              </p>
              <p className="text-studio-600 mb-8">
                With professional lighting equipment and ample space, you can create stunning visuals with endless possibilities for customization.
              </p>
              <Button to="/booking">Book Cyc Wall Studio</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* RGB Lighting Setup */}
      <section className="py-16 bg-studio-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">RGB Lighting Environment</h2>
              <p className="text-studio-600 mb-6">
                Create visually stunning content with our customizable RGB lighting setup. Perfect for interviews, creative portraits, and promotional content that demands a unique visual aesthetic.
              </p>
              <p className="text-studio-600 mb-8">
                Our lighting technicians can help you achieve the perfect look for your project, whether you need subtle accents or bold, dramatic effects.
              </p>
              <Button to="/booking">Book RGB Studio</Button>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <img
                src="/lovable-uploads/f7aacc24-737b-458d-be95-cf9fbbb00c07.png"
                alt="RGB Lighting Setup"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Equipment</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Our studio is equipped with top-of-the-line gear to ensure your content sounds and looks professional from day one.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StudioCard
                  title={item.title}
                  description={item.description}
                  imageSrc={item.imageSrc}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-studio-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Book your session now and take advantage of our professional studio spaces and equipment.
          </p>
          <Button 
            to="/booking" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-studio-900"
          >
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Studio;
