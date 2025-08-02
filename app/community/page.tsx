import { Users, MessageCircle, Calendar, Award, Sparkles, ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const communityStats = [
  { number: "50,000+", label: "Members" },
  { number: "1,200+", label: "Discussions" },
  { number: "500+", label: "Events" },
  { number: "95%", label: "Satisfaction" }
];

const communityFeatures = [
  {
    title: "Discussion Forums",
    description: "Connect with fellow freelancers and clients. Share tips, ask questions, and learn from each other.",
    icon: <MessageCircle className="h-8 w-8 text-zomy-primary" />,
    members: "15,000+ active"
  },
  {
    title: "Virtual Events",
    description: "Join webinars, workshops, and networking events to grow your skills and network.",
    icon: <Calendar className="h-8 w-8 text-zomy-primary" />,
    members: "Monthly events"
  },
  {
    title: "Mentorship Program",
    description: "Connect with experienced professionals for guidance and career development.",
    icon: <Award className="h-8 w-8 text-zomy-primary" />,
    members: "200+ mentors"
  },
  {
    title: "Resource Library",
    description: "Access templates, guides, and best practices shared by the community.",
    icon: <Sparkles className="h-8 w-8 text-zomy-primary" />,
    members: "1,000+ resources"
  }
];

const recentDiscussions = [
  {
    title: "Best practices for client communication",
    author: "Sarah Chen",
    replies: 24,
    views: 156,
    category: "Tips & Tricks"
  },
  {
    title: "How to handle scope creep effectively",
    author: "Mike Rodriguez",
    replies: 18,
    views: 89,
    category: "Project Management"
  },
  {
    title: "Freelancer tax tips for 2024",
    author: "Emma Johnson",
    replies: 32,
    views: 234,
    category: "Finance"
  },
  {
    title: "Building a strong portfolio",
    author: "David Kim",
    replies: 15,
    views: 67,
    category: "Career Growth"
  }
];

export default function CommunityPage() {
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
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Thriving Community</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-6 leading-tight">
              Join Our
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Amazing Community
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Connect with thousands of freelancers and clients. Share knowledge, learn from peers, 
              and grow your network in our supportive community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Join Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/help">
                <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2 border-zomy-gray-light hover:border-zomy-primary hover:text-zomy-primary transition-all duration-300">
                  Browse Forums
                </Button>
              </Link>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {communityStats.map((stat, index) => (
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

      {/* Community Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              What You'll Find
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover all the ways to connect, learn, and grow with our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-zomy-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <Badge variant="outline" className="text-zomy-primary border-zomy-primary">
                    {feature.members}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zomy-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Recent Discussions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what the community is talking about and join the conversation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentDiscussions.map((discussion, index) => (
              <Card key={index} className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-zomy-text">
                      {discussion.title}
                    </h3>
                    <Badge className="bg-zomy-accent-green text-white text-xs">
                      {discussion.category}
                    </Badge>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">
                    by {discussion.author}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                    </div>
                    <Button variant="ghost" className="text-zomy-primary hover:text-orange-600 p-0 h-auto">
                      Join Discussion
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zomy-text mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who are already part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
                Join Now
              </Button>
            </Link>
            <Link href="/help">
              <Button variant="outline" size="lg" className="px-8 py-3 border-zomy-gray-light">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 