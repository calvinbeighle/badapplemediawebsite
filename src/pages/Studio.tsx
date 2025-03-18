
import { motion } from "framer-motion";
import StudioCard from "@/components/StudioCard";
import Button from "@/components/Button";

const Studio = () => {
  const equipmentList = [
    {
      title: "Microphones",
      description: "4× Shure SM7B, perfect for voice recording with excellent noise rejection.",
      imageSrc: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Audio Interface",
      description: "RME Fireface UCX II, 40-channel USB audio interface with exceptional sound quality.",
      imageSrc: "https://images.unsplash.com/photo-1558392204-ac78741f4abf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Headphones",
      description: "4× Sony MDR-7506, industry-standard closed-back headphones for monitoring.",
      imageSrc: "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Digital Recorder",
      description: "Zoom H6, 6-track portable recorder for backup and mobile recording.",
      imageSrc: "https://images.unsplash.com/photo-1590499189232-5400930c6551?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Acoustic Treatment",
      description: "Premium sound panels and bass traps for professional-grade sound isolation.",
      imageSrc: "https://images.unsplash.com/photo-1520866908487-957865ba2929?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Monitoring",
      description: "Yamaha HS5 studio monitors for accurate sound reproduction during editing.",
      imageSrc: "https://images.unsplash.com/photo-1585536309334-033e3e708d0c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000"
            alt="Recording Studio"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Studio Space
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Designed with both acoustics and comfort in mind, our studio provides the perfect environment for creating exceptional podcast content.
          </motion.p>
        </div>
      </section>

      {/* Studio Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">State-of-the-Art Recording Space</h2>
              <p className="text-studio-600 mb-6">
                Our professionally designed studio features acoustic treatment for pristine sound quality and comfortable seating for up to four people. The space includes a dedicated control room and recording booth, ensuring separation between hosts and guests when needed.
              </p>
              <p className="text-studio-600 mb-8">
                With adjustable lighting, climate control, and a relaxing atmosphere, you'll be able to focus entirely on creating great content without technical distractions.
              </p>
              <Button to="/booking">Book Studio Time</Button>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1605493725784-63b4631fce65?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
                alt="Studio Interior"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-studio-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Equipment</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Our studio is equipped with top-of-the-line gear to ensure your podcast sounds professional from day one.
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

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Beyond our recording space, we offer a range of services to help you create and grow your podcast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-studio-100 rounded-lg p-8 transition-all hover:shadow-md">
              <h3 className="text-xl font-medium mb-3">Post-Production</h3>
              <p className="text-studio-600 mb-4">
                Professional editing, mixing, and mastering services to polish your recordings.
              </p>
              <Button variant="ghost" size="sm">Learn More</Button>
            </div>
            
            <div className="border border-studio-100 rounded-lg p-8 transition-all hover:shadow-md">
              <h3 className="text-xl font-medium mb-3">Technical Assistance</h3>
              <p className="text-studio-600 mb-4">
                On-site engineer available to help with equipment setup and operation.
              </p>
              <Button variant="ghost" size="sm">Learn More</Button>
            </div>
            
            <div className="border border-studio-100 rounded-lg p-8 transition-all hover:shadow-md">
              <h3 className="text-xl font-medium mb-3">Distribution Support</h3>
              <p className="text-studio-600 mb-4">
                Guidance on publishing your podcast to major platforms and growing your audience.
              </p>
              <Button variant="ghost" size="sm">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-studio-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Record?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Book your session now and take advantage of our professional studio space and equipment.
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
