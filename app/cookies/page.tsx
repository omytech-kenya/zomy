import { Shield, Settings, Eye, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';

const cookieTypes = [
  {
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.",
    examples: ["Authentication", "Security", "Session management"],
    required: true
  },
  {
    title: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    examples: ["Google Analytics", "Performance metrics", "User behavior"],
    required: false
  },
  {
    title: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
    examples: ["Language preferences", "Theme settings", "Form data"],
    required: false
  },
  {
    title: "Marketing Cookies",
    description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
    examples: ["Social media", "Advertising networks", "Retargeting"],
    required: false
  }
];

const cookieSettings = [
  {
    category: "Essential",
    description: "Always active - required for site functionality",
    status: "Always On"
  },
  {
    category: "Analytics",
    description: "Help us improve our website and services",
    status: "Optional"
  },
  {
    category: "Functional",
    description: "Remember your preferences and settings",
    status: "Optional"
  },
  {
    category: "Marketing",
    description: "Show you relevant advertisements",
    status: "Optional"
  }
];

export default function CookiesPage() {
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
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Cookie Policy</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-6 leading-tight">
              Cookie
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We use cookies to enhance your experience on ZOMY. This policy explains what cookies are, 
              how we use them, and how you can control them.
            </p>

            {/* Last Updated */}
            <div className="inline-flex items-center space-x-2 bg-zomy-gray-light text-gray-600 px-4 py-2 rounded-full">
              <span className="text-sm">Last Updated: January 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the different types of cookies and their purposes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-zomy-text">
                      {type.title}
                    </h3>
                    {type.required && (
                      <Badge className="bg-zomy-accent-green text-white">Required</Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {type.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-zomy-text mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.examples.map((example, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-zomy-accent-green mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Settings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zomy-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Cookie Settings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Control which cookies you allow on our website.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {cookieSettings.map((setting, index) => (
                <Card key={index} className="border-0 shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-zomy-text mb-2">
                          {setting.category} Cookies
                        </h3>
                        <p className="text-gray-600">
                          {setting.description}
                        </p>
                      </div>
                      <Badge className={`${
                        setting.status === 'Always On' 
                          ? 'bg-zomy-accent-green text-white' 
                          : 'bg-zomy-accent-yellow text-amber-800'
                      }`}>
                        {setting.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zomy-text mb-4">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  You can control and manage cookies in several ways. Most web browsers allow you to manage cookies through their settings preferences. You can also use our cookie consent manager to control which cookies you allow on our website.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-zomy-text mb-2">Browser Settings</h3>
                    <p className="text-gray-600 text-sm">
                      You can delete or block cookies through your browser settings. However, this may affect your experience on our website.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zomy-text mb-2">Cookie Consent</h3>
                    <p className="text-gray-600 text-sm">
                      Use our cookie consent manager to control which types of cookies you allow on our website.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zomy-text mb-4">
                  Third-Party Cookies
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Some cookies are placed by third-party services that appear on our pages. We use these services to enhance your experience and provide additional functionality.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-zomy-gray-light rounded-lg">
                    <div>
                      <h3 className="font-semibold text-zomy-text">Google Analytics</h3>
                      <p className="text-gray-600 text-sm">Website analytics and performance tracking</p>
                    </div>
                    <Badge variant="outline" className="text-zomy-primary border-zomy-primary">
                      Analytics
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-zomy-gray-light rounded-lg">
                    <div>
                      <h3 className="font-semibold text-zomy-text">Social Media</h3>
                      <p className="text-gray-600 text-sm">Social media integration and sharing</p>
                    </div>
                    <Badge variant="outline" className="text-zomy-primary border-zomy-primary">
                      Marketing
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zomy-gray-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zomy-text mb-6">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If you have any questions about our cookie policy or how we use cookies, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
                Contact Us
              </Button>
            </Link>
            <Link href="/privacy">
              <Button variant="outline" size="lg" className="px-8 py-3 border-zomy-gray-light">
                Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 