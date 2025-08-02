import { HelpCircle, Search, MessageCircle, BookOpen, Video, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const helpCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics and set up your account",
    icon: <Sparkles className="h-8 w-8 text-zomy-primary" />,
    articles: 12
  },
  {
    title: "Account & Billing",
    description: "Manage your account settings and payments",
    icon: <HelpCircle className="h-8 w-8 text-zomy-primary" />,
    articles: 8
  },
  {
    title: "Projects & Collaboration",
    description: "Work effectively with clients and freelancers",
    icon: <MessageCircle className="h-8 w-8 text-zomy-primary" />,
    articles: 15
  },
  {
    title: "Security & Privacy",
    description: "Keep your account and data safe",
    icon: <BookOpen className="h-8 w-8 text-zomy-primary" />,
    articles: 6
  }
];

const popularArticles = [
  {
    title: "How to create your first project",
    category: "Getting Started",
    readTime: "3 min read"
  },
  {
    title: "Setting up payment methods",
    category: "Account & Billing",
    readTime: "5 min read"
  },
  {
    title: "Best practices for client communication",
    category: "Projects & Collaboration",
    readTime: "7 min read"
  },
  {
    title: "Two-factor authentication setup",
    category: "Security & Privacy",
    readTime: "4 min read"
  }
];

const supportOptions = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: <MessageCircle className="h-6 w-6" />,
    available: true
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step guides and walkthroughs",
    icon: <Video className="h-6 w-6" />,
    available: true
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share tips",
    icon: <BookOpen className="h-6 w-6" />,
    available: true
  }
];

export default function HelpPage() {
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
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Help & Support</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-6 leading-tight">
              How Can We
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Find answers to your questions, learn best practices, and get the support you need 
              to make the most of ZOMY.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, and guides..."
                  className="w-full pl-12 pr-4 py-4 border border-zomy-gray-light rounded-lg focus:ring-2 focus:ring-zomy-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportOptions.map((option, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-zomy-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zomy-text mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the help you need organized by topic and category.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-zomy-text mb-3 text-center">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {category.description}
                  </p>
                  <div className="text-center">
                    <Badge variant="outline" className="text-zomy-primary border-zomy-primary">
                      {category.articles} articles
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zomy-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most viewed help articles and guides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-zomy-text">
                      {article.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {article.readTime}
                    </Badge>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">
                    {article.category}
                  </p>
                  <Button variant="ghost" className="text-zomy-primary hover:text-orange-600 p-0 h-auto">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zomy-text mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
                Contact Support
              </Button>
            </Link>
            <Link href="/community">
              <Button variant="outline" size="lg" className="px-8 py-3 border-zomy-gray-light">
                Visit Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 