
import { Trophy, TrendingUp, CheckCircle, Users, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";

const CaseStudies = () => {
  const caseStudies = [
    {
      name: "Chris Howard",
      image: "/lovable-uploads/compressed_microphone.png",
      description: "Content Creator & Influencer",
      achievements: [
        "Grew TikTok from 15k to 50.7k followers in 14 months",
        "Increased TikTok likes from 225k to 800k",
        "Expanded Instagram following from 12k to 25.4k followers in 14 months"
      ],
      icon: <TrendingUp className="h-6 w-6 text-purple-500" />
    },
    {
      name: "Solstice X Bloom",
      image: "/lovable-uploads/compressed_sonyalpha.png",
      description: "Creative Brand",
      achievements: [
        "Grew from 400 to 4,900 followers in just 6 months",
        "Established distinct brand identity across platforms",
        "Consistent engagement growth month-over-month"
      ],
      icon: <Instagram className="h-6 w-6 text-purple-500" />
    },
    {
      name: "Graceland Ranch",
      image: "/lovable-uploads/compressed_sonylong.png",
      description: "Lifestyle & Hospitality Brand",
      achievements: [
        "Built TikTok following from 0 to 275k followers in 3.5 years",
        "Developed Instagram audience of 15k followers",
        "Created viral content strategy focusing on ranch lifestyle"
      ],
      icon: <Trophy className="h-6 w-6 text-purple-500" />
    }
  ];

  return (
    <PageTransition>
      <section className="relative">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-b from-purple-900 to-purple-800 text-white">
          <div className="container mx-auto px-6 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-bourbon">Success Stories</h1>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              See how we've helped creators and brands grow their social media presence and engagement.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.name} 
                    className="object-cover w-full h-48 transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{study.name}</CardTitle>
                    {study.icon}
                  </div>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {study.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read Full Case Study</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-studio-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-bourbon">How We Achieve Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-5">
                  <TrendingUp className="h-7 w-7 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Content Planning</h3>
                <p className="text-studio-600">
                  We develop customized content strategies aligned with your brand voice and audience demographics.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-5">
                  <Users className="h-7 w-7 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Audience Growth Tactics</h3>
                <p className="text-studio-600">
                  Our proven methods help you attract and retain followers who genuinely connect with your content.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-5">
                  <Instagram className="h-7 w-7 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Platform-Specific Optimization</h3>
                <p className="text-studio-600">
                  We tailor your content to match the unique algorithms and user behaviors of each social platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-800 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to grow your social media presence?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Book our studio and leverage our expertise to boost your followers and engagement.
            </p>
            <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-100" asChild>
              <a href="/booking">Book Now</a>
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CaseStudies;
