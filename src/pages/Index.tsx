import { Mic, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src="/static/images/web_optimized_studio.png"
            alt="Studio Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-regular text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            YOUR <span className="text-white">SPACE</span> TO SPEAK
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A state-of-the-art studio for creators who demand exceptional quality.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button to="/booking" size="lg" className="bg-purple-500 hover:bg-purple-600 text-white font-bold">
              Book Studio Time
            </Button>
            <Button to="/studio" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Explore Our Space
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="text-black">Choose</span> Our Studio</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              We provide everything you need to create professional podcasts in a comfortable, inspiring environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-studio-50 p-8 rounded-lg transition-transform hover:translate-y-[-5px] border border-transparent hover:border-purple-100">
              <div className="mb-4 bg-purple-100/30 p-3 rounded-full w-fit">
                <Mic size={24} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Professional Equipment</h3>
              <p className="text-studio-600">
                Top-of-the-line microphones, mixers, and acoustic treatment for crystal-clear audio.
              </p>
            </div>
            
            <div className="bg-studio-50 p-8 rounded-lg transition-transform hover:translate-y-[-5px] border border-transparent hover:border-purple-100">
              <div className="mb-4 bg-purple-100/30 p-3 rounded-full w-fit">
                <Users size={24} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Comfortable Space</h3>
              <p className="text-studio-600">
                Designed for up to 6 people with comfortable seating and perfect acoustics.
              </p>
            </div>
            
            <div className="bg-studio-50 p-8 rounded-lg transition-transform hover:translate-y-[-5px] border border-transparent hover:border-purple-100">
              <div className="mb-4 bg-purple-100/30 p-3 rounded-full w-fit">
                <Clock size={24} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Flexible Booking</h3>
              <p className="text-studio-600">
                Book by the hour or get discounted rates for longer sessions and recurring bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-100/10 to-white text-black border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to <span className="text-black">Record</span> Your Next Episode?</h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-10">
            Our studio is equipped with everything you need to create professional podcasts.<br></br> Book your session below.
          </p>
          <Button 
            to="/booking" 
            variant="primary" 
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold"
          >
            Book Your Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
