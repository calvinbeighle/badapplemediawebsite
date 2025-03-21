
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Instagram, Award, BarChart, Share2, MessageSquare } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SocialMediaManagement = () => {
  const packages = [
    {
      title: "Basic",
      description: "Ideal for solo creators or those new to podcasting who need a simple, professional setup.",
      price: "From $75/hour"
    },
    {
      title: "Standard",
      description: "Great for established podcasts looking to elevate their production quality with extra support and enhanced visuals.",
      price: "From $125/hour",
      popular: true
    },
    {
      title: "Premium",
      description: "A fully-equipped solution designed for creators who want top-tier production quality and hands-on technical expertise.",
      price: "From $200/hour"
    }
  ];

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/compressed_microphone.png"
            alt="Social Media Success"
            className="object-cover w-full h-full brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Social Media Management
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Podcast studios designed for creators—whether you're just starting out or leveling up
          </motion.p>
        </div>
      </section>

      {/* Overview Section with Side Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Elevate Your Social Media Presence</h2>
              <p className="text-gray-600 mb-6">
                In today's digital landscape, a strong social media presence is essential for creators and businesses alike. 
                Our expert team specializes in developing customized strategies that drive growth, engagement, and conversion.
              </p>
              <p className="text-gray-600">
                We've helped creators and businesses of all sizes grow their social media presence
                and achieve remarkable results across different platforms.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/studio.png" 
                alt="Social Media Studio"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Our Client Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results that demonstrate our proven approach to social media growth and management
            </p>
          </div>

          {/* Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chris Howard */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white">
                <div className="flex justify-between items-start">
                  <CardTitle>Chris Howard</CardTitle>
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardDescription className="text-purple-100">Content Creator</CardDescription>
              </CardHeader>
              <div className="p-4">
                <img 
                  src="/assets/images/jordan.png" 
                  alt="Chris Howard"
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <CardContent className="pt-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                      </svg>
                      TikTok Growth
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Starting Followers:</span>
                        <span className="font-medium">15,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Current Followers:</span>
                        <span className="font-medium">50,700</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Starting Likes:</span>
                        <span className="font-medium">225,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Current Likes:</span>
                        <span className="font-medium">800,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Timeframe:</span>
                        <span className="font-medium">14 months</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      Instagram Growth
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Starting Followers:</span>
                        <span className="font-medium">12,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Current Followers:</span>
                        <span className="font-medium">25,400</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Timeframe:</span>
                        <span className="font-medium">14 months</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <div className="flex items-center justify-between w-full">
                  <div className="text-sm font-medium text-[#6E59A5]">
                    <span className="inline-flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      238% TikTok Growth
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#6E59A5]">
                    <span className="inline-flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      112% Instagram Growth
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* Solstice X Bloom */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] text-white">
                <div className="flex justify-between items-start">
                  <CardTitle>Solstice X Bloom</CardTitle>
                  <Award className="h-6 w-6" />
                </div>
                <CardDescription className="text-blue-100">Brand</CardDescription>
              </CardHeader>
              <div className="p-4">
                <img 
                  src="/assets/images/eric.png" 
                  alt="Solstice X Bloom"
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <CardContent className="pt-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      Instagram Growth
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Starting Followers:</span>
                        <span className="font-medium">400</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Current Followers:</span>
                        <span className="font-medium">4,900</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Timeframe:</span>
                        <span className="font-medium">6 months</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-medium">Strategy Highlights</h3>
                    <ul className="mt-2 space-y-1 text-sm list-disc pl-4">
                      <li className="text-gray-600">Consistent branded content approach</li>
                      <li className="text-gray-600">Strategic hashtag targeting</li>
                      <li className="text-gray-600">Engagement-focused community building</li>
                      <li className="text-gray-600">Influencer collaboration campaigns</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <div className="flex items-center justify-between w-full">
                  <div className="text-sm font-medium text-[#0EA5E9]">
                    <span className="inline-flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      1,125% Instagram Growth
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* Graceland Ranch */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#8A898C] to-[#403E43] text-white">
                <div className="flex justify-between items-start">
                  <CardTitle>Graceland Ranch</CardTitle>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                  </svg>
                </div>
                <CardDescription className="text-gray-100">Business</CardDescription>
              </CardHeader>
              <div className="p-4">
                <img 
                  src="/assets/images/clayton.png" 
                  alt="Graceland Ranch"
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <CardContent className="pt-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                      </svg>
                      TikTok Growth
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Starting Followers:</span>
                        <span className="font-medium">0</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Current Followers:</span>
                        <span className="font-medium">275,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Timeframe:</span>
                        <span className="font-medium">3.5 years</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      Instagram Growth
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Current Followers:</span>
                        <span className="font-medium">15,000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <div className="flex items-center justify-center w-full">
                  <div className="text-sm font-medium text-[#403E43]">
                    <span className="inline-flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      From zero to 275K TikTok followers
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Services Section with Alternating Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Social Media Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make your podcast stand out with specialized add-on services tailored to your content
            </p>
          </div>
          
          {/* Service 1 - Content Creation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="inline-block p-3 bg-[#E5DEFF] rounded-2xl mb-4">
                <Share2 className="h-7 w-7 text-[#7E69AB]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Strategy & Creation</h3>
              <p className="text-gray-600 mb-4">
                Turn your raw recordings into polished episodes, ready for your listeners with professional editing tailored specifically to your podcast.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✓</span>
                  <span>Platform-specific content optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✓</span>
                  <span>Trending topic integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✓</span>
                  <span>Consistent posting schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✓</span>
                  <span>Brand voice development</span>
                </li>
              </ul>
            </div>
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <img 
                src="/lovable-uploads/compressed_sonyalpha.png" 
                alt="Content Creation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Service 2 - Community Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/compressed_rhodecaster2.png" 
                alt="Community Management"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block p-3 bg-[#D3E4FD] rounded-2xl mb-4">
                <MessageSquare className="h-7 w-7 text-[#0EA5E9]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Management</h3>
              <p className="text-gray-600 mb-4">
                Our team helps your podcast reach more listeners by crafting engaging content, managing your social presence, and fostering genuine community interactions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#0EA5E9] mr-2">✓</span>
                  <span>Timely response to comments and messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0EA5E9] mr-2">✓</span>
                  <span>Proactive audience engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0EA5E9] mr-2">✓</span>
                  <span>Community growth initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0EA5E9] mr-2">✓</span>
                  <span>Crisis management and moderation</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 3 - Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block p-3 bg-[#F1F0FB] rounded-2xl mb-4">
                <BarChart className="h-7 w-7 text-[#403E43]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics & Growth Strategy</h3>
              <p className="text-gray-600 mb-4">
                We manage every aspect of your social presence, from creating compelling content and scheduling posts to engaging your audience and growing your listener base across key platforms.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#403E43] mr-2">✓</span>
                  <span>Performance tracking and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#403E43] mr-2">✓</span>
                  <span>Audience insights and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#403E43] mr-2">✓</span>
                  <span>Competitor benchmarking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#403E43] mr-2">✓</span>
                  <span>Strategy optimization</span>
                </li>
              </ul>
            </div>
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <img 
                src="/lovable-uploads/compressed_sonylong.png" 
                alt="Analytics and Strategy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Breakdown Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick answers to the questions creators ask most about our studio services and pricing</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                <span className="text-[#7E69AB] font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Platform-Specific Strategy</h3>
              <p className="text-gray-600">
                We develop custom approaches optimized for each social media platform's unique algorithm and audience behavior.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                <span className="text-[#7E69AB] font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Engaging Content Creation</h3>
              <p className="text-gray-600">
                Our team creates content that resonates with your target audience and encourages shares, comments, and follows.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                <span className="text-[#7E69AB] font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Community Building</h3>
              <p className="text-gray-600">
                We focus on building genuine connections with followers, creating a community that actively engages with your content.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                <span className="text-[#7E69AB] font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Analytics & Optimization</h3>
              <p className="text-gray-600">
                Continuous monitoring and adjustment of strategies based on performance data to maximize growth and engagement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2">Camera Setup</h3>
              <p className="text-gray-600">
                We provide high-quality cameras, professional lighting, and multiple angles to keep your audience visually engaged throughout your podcast.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6">Professional Cyc Wall</h2>
              <p className="text-gray-600 mb-6">
                Create professional-grade visuals effortlessly with our seamless cyc wall, ideal for:
              </p>
              <ul className="space-y-2 mb-8 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✓</span>
                  <span>Video podcasts and interviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✓</span>
                  <span>Product and e-commerce photography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✓</span>
                  <span>Corporate and promotional videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B5CF6] mr-2">✓</span>
                  <span>Commercials and creative shoots</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2">Custom Editing Packages</h3>
              <p className="text-gray-600">
                Absolutely—we tailor editing services specifically to your podcast's style and vision, with flexible options for all budgets.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-2">Social Media Management Details</h3>
              <p className="text-gray-600">
                We manage every aspect of your social presence, from creating compelling content and scheduling posts to engaging your audience and growing your listener base across key platforms.
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to launch your podcast?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Book a studio session today and let us handle the rest.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            >
              <Link to="/booking">Book Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagement;
