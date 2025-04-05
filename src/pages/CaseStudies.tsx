import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Instagram, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/static/images/compressed_microphone.png"
            alt="Social Media Success"
            className="absolute inset-0 w-full h-full object-cover"
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
            Social Media Success Stories
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Real results from our proven social media strategies
          </motion.p>
        </div>
      </section>

      {/* Case Studies Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Our Client Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've helped creators and businesses of all sizes grow their social media presence
              and achieve remarkable results across different platforms.
            </p>
          </div>

          {/* Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chris Howard */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                <div className="flex justify-between items-start">
                  <CardTitle>Chris Howard</CardTitle>
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardDescription className="text-purple-100">Content Creator</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
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
                  <div className="text-sm font-medium text-green-600">
                    <span className="inline-flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      238% TikTok Growth
                    </span>
                  </div>
                  <div className="text-sm font-medium text-green-600">
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
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="flex justify-between items-start">
                  <CardTitle>Solstice X Bloom</CardTitle>
                  <Award className="h-6 w-6" />
                </div>
                <CardDescription className="text-blue-100">Brand</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
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
                  <div className="text-sm font-medium text-green-600">
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
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="flex justify-between items-start">
                  <CardTitle>Graceland Ranch</CardTitle>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                  </svg>
                </div>
                <CardDescription className="text-green-100">Business</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
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
                  <div className="text-sm font-medium text-green-600">
                    <span className="inline-flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      From zero to 275K TikTok followers
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Grow Your Social Media Presence?</h3>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Our team of social media experts can help you achieve these kinds of results too. Let's discuss your goals and create a custom strategy for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/booking">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/pricing">View Our Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Breakdown Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Achieve Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven approach combines strategy, content creation, and community engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Platform-Specific Strategy</h3>
              <p className="text-gray-600">
                We develop custom approaches optimized for each social media platform's unique algorithm and audience behavior.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Engaging Content Creation</h3>
              <p className="text-gray-600">
                Our team creates content that resonates with your target audience and encourages shares, comments, and follows.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Community Building</h3>
              <p className="text-gray-600">
                We focus on building genuine connections with followers, creating a community that actively engages with your content.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Analytics & Optimization</h3>
              <p className="text-gray-600">
                Continuous monitoring and adjustment of strategies based on performance data to maximize growth and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
