import { Star, Quote, Sparkles, Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Freelance Designer",
    company: "Independent Designer",
    rating: 5,
    content: "ZOMY transformed how I manage my freelance business. The platform is intuitive and helps me find quality clients effortlessly.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    category: "Designer"
  },
  {
    name: "Michael Rodriguez",
    role: "Startup Founder",
    company: "TechStart Inc.",
    rating: 5,
    content: "Finding skilled developers was always a challenge until we discovered ZOMY. The quality of talent here is exceptional.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    category: "Client"
  },
  {
    name: "Emily Johnson",
    role: "Marketing Director",
    company: "Digital Solutions",
    rating: 5,
    content: "The collaboration tools make working with remote freelancers feel seamless. ZOMY is now essential to our workflow.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    category: "Client"
  }
];

const stats = [
  { number: "50,000+", label: "Active Users" },
  { number: "150,000+", label: "Projects Completed" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "98%", label: "Satisfaction Rate" }
];

export default function TestimonialsPage() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${
          i < rating ? 'text-zomy-accent-yellow fill-current' : 'text-gray-300'
        }`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-zomy-background">
      <Navbar />
      
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zomy-background via-white to-zomy-background py-24 px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-zomy-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-zomy-accent-green/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-zomy-accent-yellow/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-zomy-primary/10 text-zomy-primary px-4 py-2 rounded-full mb-8">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Community Stories</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-8 leading-tight">
              What Our
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Community Says
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Hear from freelancers and clients who have transformed their work with ZOMY. 
              Real stories from real people achieving their goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2 border-zomy-gray-light hover:border-zomy-primary hover:text-zomy-primary transition-all duration-300">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>

          {/* Community Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-zomy-primary" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">50K+ Members</h3>
                <p className="text-gray-600 text-sm">Growing community of talented professionals</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-zomy-accent-green" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">4.9/5 Rating</h3>
                <p className="text-gray-600 text-sm">Consistently high satisfaction scores</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-zomy-accent-yellow" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">98% Satisfaction</h3>
                <p className="text-gray-600 text-sm">Users love our platform experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zomy-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-2 bg-zomy-primary/10 rounded-full">
                      <Quote className="h-6 w-6 text-zomy-primary" />
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic text-center">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-zomy-text">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                    <Badge className={`${
                      testimonial.category === 'Client' 
                        ? 'bg-zomy-accent-green text-white' 
                        : 'bg-zomy-accent-yellow text-amber-800'
                    }`}>
                      {testimonial.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zomy-gray-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zomy-text mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your journey with ZOMY and experience the difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
                Get Started Free
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="px-8 py-3 border-zomy-gray-light">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 