import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import ServiceCard from "@/components/ServiceCard";
import ComparisonTable from "@/components/ComparisonTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";

const Pricing = () => {
  const standardFeatures = [
    "Professional recording equipment",
    "Basic technical assistance",
    "Digital file delivery",
    "Complimentary beverages",
    "Climate controlled environment",
  ];

  const serviceFeatures = [
    { 
      name: "Number of guests", 
      basic: true, 
      standard: true, 
      premium: true 
    },
    { 
      name: "Up to 2 guests", 
      basic: true, 
      standard: false, 
      premium: false 
    },
    { 
      name: "Up to 4 guests", 
      basic: false, 
      standard: true, 
      premium: false 
    },
    { 
      name: "Up to 6 guests", 
      basic: false, 
      standard: false, 
      premium: true 
    },
    { 
      name: "Camera angles", 
      basic: true, 
      standard: true, 
      premium: true 
    },
    { 
      name: "1 camera angle", 
      basic: true, 
      standard: false, 
      premium: false 
    },
    { 
      name: "2 camera angles", 
      basic: false, 
      standard: true, 
      premium: false 
    },
    { 
      name: "3 camera angles", 
      basic: false, 
      standard: false, 
      premium: true 
    },
    { 
      name: "Cyc wall access", 
      basic: false, 
      standard: true, 
      premium: true 
    },
    { 
      name: "Editing included", 
      basic: false, 
      standard: false, 
      premium: true 
    },
    { 
      name: "Technical assistance", 
      basic: false, 
      standard: true, 
      premium: true 
    },
  ];

  const plans = [
    {
      title: "Basic",
      price: "$75",
      description: "Perfect for solo podcasters and beginners.",
      features: [
        "Up to 2 people",
        "1 camera angle",
        "Self-operated recording",
        "Raw audio files provided",
        "Online booking system"
      ],
      popular: false
    },
    {
      title: "Standard",
      price: "$125",
      description: "Our most popular option for established podcasts.",
      features: [
        "Up to 4 people",
        "2 camera angles",
        "Basic technical assistance",
        "Raw audio files + basic edit",
        "Priority booking",
        "Cyc wall background"
      ],
      popular: true
    },
    {
      title: "Premium",
      price: "$200",
      description: "Complete solution for professional productions.",
      features: [
        "Up to 6 people",
        "3 camera angles",
        "Dedicated sound engineer",
        "Full post-production services",
        "Distribution assistance",
        "Cyc wall background",
        "2 hours of editing included"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: "Editing Package",
      price: "$75/hour",
      description: "Professional editing services for your podcast.",
      features: [
        "Audio cleanup and enhancement",
        "Adding intro/outro music",
        "Content trimming and organization",
        "Custom packages available upon request"
      ]
    },
    {
      title: "Social Media Management",
      price: "Custom",
      description: "Let us handle your podcast's social media presence.",
      features: [
        "Content calendar creation",
        "Regular posting schedule",
        "Audience engagement",
        "Analytics and reporting",
        "Custom strategy development"
      ]
    },
    {
      title: "Cyc Wall Set",
      price: "Included with Standard/Premium",
      description: "Professional backdrop for visual content.",
      features: [
        "Perfect for e-commerce",
        "Great for corporate videos",
        "Ideal for advertisements",
        "Professional photography background",
        "Clean, distraction-free environment"
      ]
    }
  ];

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000"
            alt="Studio Equipment"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Studio Services & Pricing
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Media solutions for creators at every level
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Studio Package</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              All packages include access to our professional recording space and equipment
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
                    "2 camera angles",
                    "Technical assistance",
                    "Cyc wall access"
                  ]}
                />
                
                <PricingCard
                  title="8-Hour Block"
                  price="$450"
                  description="Perfect for recording multiple episodes."
                  features={[
                    "8 continuous hours of studio time",
                    "Up to 4 people",
                    "2 camera angles",
                    "Technical assistance",
                    "2 hours of editing included",
                    "Cyc wall access",
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
                    "2 camera angles",
                    "Dedicated engineer",
                    "4 hours of editing per month",
                    "Cyc wall access",
                    "Storage for your equipment"
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-studio-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Our Plans</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Find the perfect studio experience for your podcast
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-5xl mx-auto">
            <ComparisonTable features={serviceFeatures} />
          </div>
        </div>
      </section>

      {/* Cyc Wall Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Cyc Wall Set</h2>
              <p className="text-studio-600 mb-6">
                Our professional cyclorama wall provides a seamless, infinity background perfect for:
              </p>
              <ul className="space-y-3 mb-8">
                {["Podcasts with video", "E-commerce product photography", "Corporate videos", "Advertisements", "Professional photoshoots"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-3 text-studio-900 flex-shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button to="/booking" variant="primary">Book Now</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000" 
                alt="Cyc Wall Studio" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-studio-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Enhance your podcast with our professional add-on services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                price={service.price}
                description={service.description}
                features={service.features}
                buttonText="Book Now"
                buttonVariant="outline"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Editing Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Editing Packages</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Professional editing services starting at $75/hour
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000" 
                alt="Audio Editing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Custom Editing Solutions</h3>
              <p className="text-studio-600 mb-6">
                Our professional editors can transform your raw recording into a polished, broadcast-ready podcast. We offer custom packages tailored to your specific needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-studio-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Basic Edit - $75/hour</h4>
                  <p className="text-sm text-studio-600">Audio cleanup, basic intro/outro, minimal content editing</p>
                </div>
                <div className="bg-studio-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Standard Edit - $100/hour</h4>
                  <p className="text-sm text-studio-600">Comprehensive audio enhancement, music integration, content organization</p>
                </div>
                <div className="bg-studio-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Premium Edit - $150/hour</h4>
                  <p className="text-sm text-studio-600">Full production with sound design, custom music, advanced editing techniques</p>
                </div>
              </div>
              <p className="text-sm text-studio-600 italic mb-6">
                Custom packages available upon request. Contact us to discuss your specific needs.
              </p>
              <Button to="/booking" variant="primary">Request Custom Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Management */}
      <section className="py-16 bg-studio-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Social Media Management</h2>
              <p className="text-white/80 mb-6">
                Our social media experts will help grow your podcast audience through strategic content planning and community engagement.
              </p>
              <p className="text-white/80 mb-6">
                We believe that authentic connection with your audience is the key to podcast growth. Our management approach focuses on creating meaningful interactions that convert listeners into loyal fans.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Content Creation</h4>
                  <p className="text-sm text-white/70">Custom graphics, audiograms, and promotional assets</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Platform Management</h4>
                  <p className="text-sm text-white/70">Strategic posting across Instagram, TikTok, Twitter, and more</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Community Building</h4>
                  <p className="text-sm text-white/70">Engagement strategies to build your podcast community</p>
                </div>
              </div>
              <Button to="/booking" variant="outline" className="border-white text-white hover:bg-white/20">
                Get Custom Quote
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000" 
                alt="Social Media Management" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-studio-600 max-w-2xl mx-auto">
              Get answers to common questions about our services and pricing
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-studio-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">What is included in the camera setup?</h3>
              <p className="text-studio-600">
                Our camera setups include professional-grade cameras, lighting, and composition. Multiple camera angles allow for dynamic visual content that engages viewers.
              </p>
            </div>
            
            <div className="bg-studio-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">How does the cyc wall benefit my production?</h3>
              <p className="text-studio-600">
                Our cyclorama wall provides a seamless, infinity background that creates a professional, distraction-free environment for your content. It's perfect for podcasts, product photography, and video production.
              </p>
            </div>
            
            <div className="bg-studio-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Do you offer custom editing packages?</h3>
              <p className="text-studio-600">
                Yes, we offer fully customized editing packages based on your specific needs and vision. Our editing services start at $75 per hour, with discounts available for larger projects.
              </p>
            </div>
            
            <div className="bg-studio-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">What's included in your social media management?</h3>
              <p className="text-studio-600">
                Our social media management includes content creation, posting schedules, audience engagement, and growth strategies tailored specifically for podcast promotion across all major platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-studio-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Podcast?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Book your studio session now and bring your creative vision to life with our professional equipment and expertise.
          </p>
          <Button 
            to="/booking" 
            variant="primary" 
            className="bg-white text-studio-900 hover:bg-white/90"
          >
            Book Your Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
