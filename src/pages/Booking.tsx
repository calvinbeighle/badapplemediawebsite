import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Booking = () => {
  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/studio.png"
            alt="Studio Interior"
            className="object-cover w-full h-full object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Book Your Studio Session
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Reserve your time in our professional podcasting space
          </motion.p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Reserve Your Studio Time</h2>
              <p className="text-studio-600 mb-8">
                Complete the form below to request a booking. We'll confirm your reservation via email within 24 hours.
              </p>
              
              <Tabs defaultValue="form" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                  <TabsTrigger value="form">Booking Form</TabsTrigger>
                  <TabsTrigger value="contact">Contact Info</TabsTrigger>
                </TabsList>
                <TabsContent value="form">
                  <BookingForm />
                </TabsContent>
                <TabsContent value="contact">
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <Mail className="mr-4 text-studio-900" size={24} />
                      <div>
                        <h3 className="text-lg font-medium mb-1">Email Us</h3>
                        <p className="text-studio-600 mb-1">For general inquiries:</p>
                        <a 
                          href="mailto:info@podstudio.com" 
                          className="text-studio-900 hover:underline"
                        >
                          info@podstudio.com
                        </a>
                        <p className="text-studio-600 mt-3 mb-1">For booking questions:</p>
                        <a 
                          href="mailto:bookings@podstudio.com" 
                          className="text-studio-900 hover:underline"
                        >
                          bookings@podstudio.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="mr-4 text-studio-900" size={24} />
                      <div>
                        <h3 className="text-lg font-medium mb-1">Call Us</h3>
                        <p className="text-studio-600 mb-1">Studio reception:</p>
                        <a 
                          href="tel:+14155559876" 
                          className="text-studio-900 hover:underline"
                        >
                          (415) 555-9876
                        </a>
                        <p className="text-studio-600 mt-3 mb-1">Hours:</p>
                        <p className="text-studio-800">Monday to Friday: 9am - 9pm</p>
                        <p className="text-studio-800">Saturday & Sunday: 10am - 6pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="mr-4 text-studio-900" size={24} />
                      <div>
                        <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                        <p className="text-studio-800 mb-1">
                          1121 W Exposition Blvd <br />
                          Los Angeles, CA 90007
                        </p>
                        <p className="text-studio-600 mt-3">
                          Near USC campus, with convenient access to public transportation and parking nearby.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:mt-20"
            >
              <div className="sticky top-32 space-y-8">
                <div className="bg-studio-50 rounded-lg p-8 border border-studio-100">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <Clock size={20} className="mr-2" />
                    Studio Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-studio-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-studio-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-studio-600">Sunday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <hr className="my-5 border-studio-200" />
                  <h4 className="font-medium mb-2">Good to Know:</h4>
                  <ul className="space-y-2 text-studio-600">
                    <li>• Arrive 15 minutes before your booking for setup</li>
                    <li>• Sessions start and end at the scheduled times</li>
                    <li>• Extensions are subject to availability</li>
                  </ul>
                </div>
                
                <div className="bg-studio-900 text-white rounded-lg p-8">
                  <h3 className="text-xl font-medium mb-4">Need Help?</h3>
                  <p className="mb-4">
                    If you have any questions about booking or need a custom arrangement, our team is ready to assist you.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="tel:+14155559876"
                      className="inline-flex items-center justify-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white hover:bg-white hover:text-studio-900 transition-colors"
                    >
                      <Phone size={16} className="mr-2" />
                      Call Us
                    </a>
                    <a
                      href="mailto:info@podstudio.com"
                      className="inline-flex items-center justify-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white hover:bg-white hover:text-studio-900 transition-colors"
                    >
                      <Mail size={16} className="mr-2" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-studio-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Booking Information</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Everything you need to know about reserving our studio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">How does the booking process work?</h3>
              <p className="text-studio-600">
                After submitting your booking request, you'll receive a confirmation email within 24 hours. Once confirmed, we'll send an invoice for a 50% deposit to secure your reservation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
              <p className="text-studio-600">
                We accept all major credit cards, PayPal, and bank transfers. The remaining balance is due on the day of your session.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">Can I get a tour before booking?</h3>
              <p className="text-studio-600">
                Absolutely! We offer studio tours Monday through Friday between 10am and 4pm. Please contact us to schedule a convenient time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">What should I bring to my session?</h3>
              <p className="text-studio-600">
                Bring any specific scripts or notes, headphones if you prefer your own, and a USB drive for immediate file transfers. Everything else is provided.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
