import { 
  Users, 
  MessageSquare, 
  CheckCircle, 
  Zap, 
  Shield, 
  CreditCard, 
  BarChart3, 
  FileText,
  Calendar,
  Bell,
  Settings,
  Globe,
  Sparkles,
  Star,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const features = [
  {
    category: "For Freelancers",
    items: [
      {
        icon: <Users className="h-6 w-6" />,
        title: "Smart Job Matching",
        description: "AI-powered job recommendations based on your skills, experience, and preferences.",
        benefits: ["Personalized job alerts", "Skill-based matching", "Location preferences"]
      },
      {
        icon: <CreditCard className="h-6 w-6" />,
        title: "Secure Payments",
        description: "Get paid safely with our escrow system and multiple payment options.",
        benefits: ["Escrow protection", "Multiple payment methods", "Automated invoicing"]
      },
      {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Portfolio & Analytics",
        description: "Showcase your work and track your performance with detailed analytics.",
        benefits: ["Portfolio builder", "Performance metrics", "Earnings tracking"]
      },
      {
        icon: <MessageSquare className="h-6 w-6" />,
        title: "Built-in Communication",
        description: "Seamless messaging, video calls, and file sharing with clients.",
        benefits: ["Real-time messaging", "Video calls", "File sharing"]
      }
    ]
  },
  {
    category: "For Clients",
    items: [
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Vetted Talent Pool",
        description: "Access pre-screened professionals with verified skills and track records.",
        benefits: ["Background verification", "Skill assessments", "Portfolio reviews"]
      },
      {
        icon: <CheckCircle className="h-6 w-6" />,
        title: "Project Management",
        description: "Track progress, manage milestones, and ensure project success.",
        benefits: ["Milestone tracking", "Progress updates", "Quality assurance"]
      },
      {
        icon: <Calendar className="h-6 w-6" />,
        title: "Flexible Hiring",
        description: "Hire for one-time projects or long-term partnerships with flexible contracts.",
        benefits: ["Project-based hiring", "Long-term contracts", "Team building"]
      },
      {
        icon: <FileText className="h-6 w-6" />,
        title: "Contract Management",
        description: "Create, sign, and manage contracts with built-in legal protection.",
        benefits: ["Custom contracts", "Digital signatures", "Legal compliance"]
      }
    ]
  },
  {
    category: "Platform Features",
    items: [
      {
        icon: <Zap className="h-6 w-6" />,
        title: "Lightning Fast",
        description: "Built for speed with modern technology and optimized performance.",
        benefits: ["Fast loading", "Real-time updates", "Mobile optimized"]
      },
      {
        icon: <Globe className="h-6 w-6" />,
        title: "Global Reach",
        description: "Connect with talent and clients from around the world.",
        benefits: ["Multi-language support", "Global payments", "Time zone handling"]
      },
      {
        icon: <Bell className="h-6 w-6" />,
        title: "Smart Notifications",
        description: "Stay updated with intelligent notifications and alerts.",
        benefits: ["Custom alerts", "Email notifications", "Mobile push"]
      },
      {
        icon: <Settings className="h-6 w-6" />,
        title: "Customizable Workflow",
        description: "Adapt the platform to your specific needs and preferences.",
        benefits: ["Custom workflows", "Integration options", "API access"]
      }
    ]
  }
];

const platformStats = [
  { number: "50+", label: "Countries" },
  { number: "100+", label: "Skills" },
  { number: "24/7", label: "Support" },
  { number: "99.9%", label: "Uptime" }
];

export default function FeaturesPage() {
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
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Comprehensive Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-8 leading-tight">
              Powerful Features for
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Every Need
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how ZOMY's comprehensive platform helps freelancers and clients 
              collaborate, communicate, and succeed together with cutting-edge tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2 border-zomy-gray-light hover:border-zomy-primary hover:text-zomy-primary transition-all duration-300">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-zomy-primary" />
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

      {/* Platform Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat, index) => (
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

      {/* Features by Category */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-zomy-text mb-4">
                  {category.category}
                </h2>
                <div className="w-24 h-1 bg-zomy-primary mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.items.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="bg-white hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-zomy-primary/10 rounded-lg">
                          {feature.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-zomy-text">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {feature.description}
                      </CardDescription>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-zomy-accent-green flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zomy-gray-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zomy-text mb-4">
              How ZOMY Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get started and succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zomy-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-zomy-text mb-3">
                Create Your Profile
              </h3>
              <p className="text-gray-600">
                Sign up and build your professional profile. Showcase your skills, 
                experience, and portfolio to attract the right opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zomy-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-zomy-text mb-3">
                Connect & Collaborate
              </h3>
              <p className="text-gray-600">
                Find the perfect match for your project or skills. Use our 
                communication tools to discuss requirements and get started.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zomy-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-zomy-text mb-3">
                Deliver & Get Paid
              </h3>
              <p className="text-gray-600">
                Complete your work with our project management tools. 
                Get paid securely through our protected payment system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zomy-text mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who trust ZOMY for their collaboration needs.
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