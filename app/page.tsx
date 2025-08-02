import { ArrowRight, CheckCircle, MessageSquare, Users, Zap, Sparkles, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const features = [
  {
    icon: <Users className="h-8 w-8 text-zomy-primary" />,
    title: "Connect Talent & Opportunity",
    description: "Match freelancers with perfect projects and clients with ideal talent through our intelligent platform."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-zomy-primary" />,
    title: "Seamless Communication",
    description: "Built-in messaging system keeps all project communications organized and accessible."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-zomy-primary" />,
    title: "Project Management",
    description: "Track progress, manage deliverables, and ensure successful project completion."
  },
  {
    icon: <Zap className="h-8 w-8 text-zomy-primary" />,
    title: "Fast & Reliable",
    description: "Lightning-fast platform built for modern workflows and real-time collaboration."
  }
];

const testimonials = [
  {
    name: "Amina Johnson",
    role: "Freelance Designer",
    content: "ZOMY transformed how I manage my freelance business. The platform is intuitive and helps me find quality clients effortlessly."
  },
  {
    name: "Kiprop Smith",
    role: "Startup Founder",
    content: "Finding skilled developers was always a challenge until we discovered ZOMY. The quality of talent here is exceptional."
  },
  {
    name: "Wanjiku Williams",
    role: "Marketing Director",
    content: "The collaboration tools make working with remote freelancers feel seamless. ZOMY is now essential to our workflow."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zomy-background">
      <Navbar />
      
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zomy-background via-white to-zomy-background py-12 px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-zomy-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-zomy-accent-green/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-zomy-accent-yellow/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-zomy-primary/10 text-zomy-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">The Future of Freelancing</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-6 leading-tight">
              The Ultimate
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Freelancer & Client
              </span>
              Collaboration Platform
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Connect, collaborate, and create amazing projects together. ZOMY brings freelancers and clients 
              together in a seamless, professional environment designed for success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2 border-zomy-gray-light hover:border-zomy-primary hover:text-zomy-primary transition-all duration-300">
                  Sign In
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-zomy-primary mb-2">50K+</div>
                <div className="text-gray-600 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zomy-primary mb-2">150K+</div>
                <div className="text-gray-600 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zomy-primary mb-2">4.9/5</div>
                <div className="text-gray-600 text-sm">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zomy-primary mb-2">98%</div>
                <div className="text-gray-600 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-zomy-primary" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">Smart Matching</h3>
                <p className="text-gray-600 text-sm">AI-powered recommendations for perfect client-freelancer matches</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-zomy-accent-green" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">Secure Payments</h3>
                <p className="text-gray-600 text-sm">Protected escrow system with multiple payment options</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-zomy-accent-yellow" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">Lightning Fast</h3>
                <p className="text-gray-600 text-sm">Built for speed with modern technology and real-time updates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Why Choose ZOMY?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for modern professionals who demand efficiency, quality, and seamless collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-zomy-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-zomy-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-zomy-primary/10 text-zomy-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Community Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our community of freelancers and clients have to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-2 bg-zomy-primary/10 rounded-full">
                      <Sparkles className="h-6 w-6 text-zomy-primary" />
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="h-4 w-4 text-zomy-accent-yellow fill-current">
                          ★
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic text-center leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="text-center">
                    <h4 className="font-semibold text-zomy-text text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zomy-primary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of professionals who trust ZOMY for their freelance and client collaboration needs.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary" className="bg-white text-zomy-primary hover:bg-gray-100 px-8 py-3">
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}