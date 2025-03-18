
import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const standardFeatures = [
    "Access to studio space",
    "Professional recording equipment",
    "Basic technical assistance",
    "Digital file delivery",
    "Complimentary beverages",
  ];

  const plans = [
    {
      title: "Basic",
      price: "$75",
      description: "Perfect for solo podcasters and beginners.",
      features: [
        "Up to 2 people",
        "Basic equipment setup",
        "Self-operated recording",
        "Raw audio files provided",
        "Online booking system"
      ],
      popular: false
    },
    {
      title: "Professional",
      price: "$125",
      description: "Our most popular option for established podcasts.",
      features: [
        "Up to 4 people",
        "Premium equipment setup",
        "Basic technical assistance",
        "Raw audio files + basic edit",
        "Priority booking",
        "2 hours of editing included"
      ],
      popular: true
    },
    {
      title: "Premium",
      price: "$200",
      description: "Complete solution for professional productions.",
      features: [
        "Up to 6 people",
        "Complete equipment access",
        "Dedicated sound engineer",
        "Full post-production services",
        "Distribution assistance",
        "Promotion on our channels",
        "4 hours of editing included"
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000"
            alt="Studio Equipment"
            className="object-cover w-full h-full"
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
            Simple & Transparent Pricing
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Choose the perfect package for your podcasting needs
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Studio Rental Packages</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              All packages include access to our professional recording space and equipment.
            </p>
          </div>
          
          <Tabs defaultValue="hourly" className="w-full mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="hourly">Hourly Rates</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
            </TabsList>
            <TabsContent value="hourly" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PricingCard
                      title={plan.title}
                      price={plan.price}
                      description={plan.description}
                      features={plan.features}
                      popular={plan.popular}
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="packages" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="4-Hour Block"
                  price="$250"
                  description="Save 15% with our half-day package."
                  features={[
                    "4 continuous hours of studio time",
                    "Up to 4 people",
                    "Premium equipment setup",
                    "Technical assistance",
                    "Basic editing included"
                  ]}
                />
                
                <PricingCard
                  title="8-Hour Block"
                  price="$450"
                  description="Perfect for recording multiple episodes."
                  features={[
                    "8 continuous hours of studio time",
                    "Up to 4 people",
                    "Premium equipment setup",
                    "Technical assistance",
                    "4 hours of editing included",
                    "Lunch provided"
                  ]}
                  popular={true}
                />
                
                <PricingCard
                  title="Monthly Subscription"
                  price="$800"
                  description="For regular podcasters with weekly shows."
                  features={[
                    "4 hours weekly (16 hours/month)",
                    "Fixed schedule",
                    "Up to 4 people",
                    "Premium equipment setup",
                    "Dedicated engineer",
                    "8 hours of editing per month",
                    "Storage for your equipment"
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <p className="text-studio-600 mb-4">
              Need a custom solution? Contact us for personalized packages.
            </p>
          </div>
        </div>
      </section>

      {/* Standard Inclusions */}
      <section className="py-16 bg-studio-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Included</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              All our studio rental packages include these standard features
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {standardFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white p-4 rounded-lg border border-studio-100"
              >
                <CheckCircle2 className="text-studio-900 mr-3 flex-shrink-0" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Enhance your recording session with these premium add-ons
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-studio-100 rounded-lg p-6 transition-all hover:shadow-md">
              <h3 className="text-xl font-medium mb-2">Sound Engineering</h3>
              <p className="text-studio-400 mb-4">Starting at $50/hour</p>
              <p className="text-studio-600">
                Professional sound engineer to manage your recording session.
              </p>
            </div>
            
            <div className="border border-studio-100 rounded-lg p-6 transition-all hover:shadow-md">
              <h3 className="text-xl font-medium mb-2">Post-Production</h3>
              <p className="text-studio-400 mb-4">Starting at $75/hour</p>
              <p className="text-studio-600">
                Editing, mixing, and mastering services to polish your podcast.
              </p>
            </div>
            
            <div className="border border-studio-100 rounded-lg p-6 transition-all hover:shadow-md">
              <h3 className="text-xl font-medium mb-2">Remote Guest Connection</h3>
              <p className="text-studio-400 mb-4">$50 flat fee</p>
              <p className="text-studio-600">
                Setup for connecting with remote guests via high-quality audio.
              </p>
            </div>
            
            <div className="border border-studio-100 rounded-lg p-6 transition-all hover:shadow-md">
              <h3 className="text-xl font-medium mb-2">Video Recording</h3>
              <p className="text-studio-400 mb-4">Starting at $150/hour</p>
              <p className="text-studio-600">
                Multi-camera setup for video podcasts with basic editing.
              </p>
            </div>
            
            <div className="border border-studio-100 rounded-lg p-6 transition-all hover:shadow-md">
              <h3 className="text-xl font-medium mb-2">Show Notes Creation</h3>
              <p className="text-studio-400 mb-4">$50 per episode</p>
              <p className="text-studio-600">
                Professional show notes, timestamps, and resource links.
              </p>
            </div>
            
            <div className="border border-studio-100 rounded-lg p-6 transition-all hover:shadow-md">
              <h3 className="text-xl font-medium mb-2">Distribution Support</h3>
              <p className="text-studio-400 mb-4">$100 per episode</p>
              <p className="text-studio-600">
                Publishing to podcast platforms and promotional assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-studio-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Get answers to common questions about our studio and pricing
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">How far in advance should I book?</h3>
              <p className="text-studio-600">
                We recommend booking at least 7 days in advance to ensure availability, especially for prime-time slots. For regular bookings, consider our monthly subscription package.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">What is your cancellation policy?</h3>
              <p className="text-studio-600">
                Cancellations made 48+ hours in advance receive a full refund. For cancellations within 48 hours, a 50% fee applies. No-shows are charged the full booking amount.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">Do you offer discounts for non-profits or educational institutions?</h3>
              <p className="text-studio-600">
                Yes, we offer special rates for non-profit organizations and educational institutions. Please contact us directly to discuss your specific needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">Can I bring my own equipment?</h3>
              <p className="text-studio-600">
                Yes, you're welcome to bring your own gear. Please let us know in advance so we can ensure compatibility with our systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-studio-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Recording?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Book your studio session now and bring your podcast to life with professional sound quality.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <PricingCard
              title="First-Time Special"
              price="$60"
              description="Try our studio at a special introductory rate"
              features={[
                "1-hour session",
                "For new clients only",
                "Up to 2 people",
                "Basic equipment setup",
                "30-minute orientation included"
              ]}
              className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-white/20"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
