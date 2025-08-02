import { Zap, Github, Slack, Trello, Figma, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const integrations = [
  {
    name: "GitHub",
    description: "Connect your repositories and manage code collaboration seamlessly.",
    icon: <Github className="h-8 w-8 text-zomy-primary" />,
    category: "Development",
    status: "Available"
  },
  {
    name: "Slack",
    description: "Get real-time notifications and updates directly in your Slack workspace.",
    icon: <Slack className="h-8 w-8 text-zomy-primary" />,
    category: "Communication",
    status: "Available"
  },
  {
    name: "Trello",
    description: "Sync your project boards and track progress across platforms.",
    icon: <Trello className="h-8 w-8 text-zomy-primary" />,
    category: "Project Management",
    status: "Available"
  },
  {
    name: "Figma",
    description: "Import designs and collaborate on creative projects effortlessly.",
    icon: <Figma className="h-8 w-8 text-zomy-primary" />,
    category: "Design",
    status: "Coming Soon"
  },
  {
    name: "Discord",
    description: "Integrate with Discord servers for team communication and updates.",
    icon: <MessageCircle className="h-8 w-8 text-zomy-primary" />,
    category: "Communication",
    status: "Available"
  },
  {
    name: "Zapier",
    description: "Connect with 5000+ apps through our Zapier integration.",
    icon: <Zap className="h-8 w-8 text-zomy-primary" />,
    category: "Automation",
    status: "Available"
  }
];

const categories = ["All", "Development", "Communication", "Project Management", "Design", "Automation"];

export default function IntegrationsPage() {
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
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Seamless Integrations</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-6 leading-tight">
              Connect with
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Your Favorite Tools
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Integrate ZOMY with the tools you already use. Streamline your workflow and 
              keep everything connected in one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Integrating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2 border-zomy-gray-light hover:border-zomy-primary hover:text-zomy-primary transition-all duration-300">
                  Request Integration
                </Button>
              </Link>
            </div>
          </div>

          {/* Integration Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-zomy-primary" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">Easy Setup</h3>
                <p className="text-gray-600 text-sm">One-click integration with popular tools</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-zomy-accent-green" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">Real-time Sync</h3>
                <p className="text-gray-600 text-sm">Automatic updates across all platforms</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="h-6 w-6 text-zomy-accent-yellow" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">API Access</h3>
                <p className="text-gray-600 text-sm">Build custom integrations with our API</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Available Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with the tools you love and streamline your workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {integration.icon}
                      <div>
                        <h3 className="text-xl font-semibold text-zomy-text">
                          {integration.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {integration.category}
                        </p>
                      </div>
                    </div>
                    <Badge className={`${
                      integration.status === 'Available' 
                        ? 'bg-zomy-accent-green text-white' 
                        : 'bg-zomy-accent-yellow text-amber-800'
                    }`}>
                      {integration.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {integration.description}
                  </p>
                  <Button variant="outline" className="w-full border-zomy-gray-light hover:border-zomy-primary">
                    {integration.status === 'Available' ? 'Connect' : 'Notify Me'}
                  </Button>
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
            Need a Different Integration?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're constantly adding new integrations. Let us know what tools you'd like to see connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
                Request Integration
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="outline" size="lg" className="px-8 py-3 border-zomy-gray-light">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 