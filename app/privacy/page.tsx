import { Shield, Lock, Eye, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const privacySections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly to us, such as when you create an account, complete your profile, or communicate with other users. This includes your name, email address, payment information, and any other information you choose to provide."
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, and ensure the security of our platform."
  },
  {
    title: "Information Sharing",
    content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law."
  },
  {
    title: "Data Security",
    content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal information. You can also control your privacy settings through your account dashboard."
  },
  {
    title: "Cookies and Tracking",
    content: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content and advertisements."
  }
];

export default function PrivacyPage() {
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
              <span className="text-sm font-medium">Privacy First</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-6 leading-tight">
              Privacy
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Your privacy is fundamental to us. This policy explains how we collect, use, and protect your information 
              to ensure a secure and trustworthy experience on ZOMY.
            </p>

            {/* Last Updated */}
            <div className="inline-flex items-center space-x-2 bg-zomy-gray-light text-gray-600 px-4 py-2 rounded-full">
              <span className="text-sm">Last Updated: January 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {privacySections.map((section, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-zomy-text mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zomy-gray-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zomy-text mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If you have any questions about this privacy policy or our data practices, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
                Contact Us
              </Button>
            </Link>
            <Link href="/terms">
              <Button variant="outline" size="lg" className="px-8 py-3 border-zomy-gray-light">
                Terms of Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 