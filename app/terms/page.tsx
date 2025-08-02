import { FileText, Shield, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const termsSections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using ZOMY, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
  },
  {
    title: "User Accounts",
    content: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password."
  },
  {
    title: "User Conduct",
    content: "You agree to use the platform only for lawful purposes and in accordance with these Terms. You agree not to use the service to transmit any material that is defamatory, offensive, or otherwise objectionable."
  },
  {
    title: "Payment Terms",
    content: "All payments are processed securely through our payment partners. Fees are clearly displayed before any transaction. Refunds are handled according to our refund policy."
  },
  {
    title: "Intellectual Property",
    content: "The content on ZOMY, including text, graphics, logos, and software, is the property of ZOMY and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without permission."
  },
  {
    title: "Limitation of Liability",
    content: "ZOMY shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service or any transactions conducted through the platform."
  },
  {
    title: "Termination",
    content: "We may terminate or suspend your account immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the service will cease immediately."
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform. Your continued use of the service constitutes acceptance of the new terms."
  }
];

export default function TermsPage() {
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
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Legal Terms</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-6 leading-tight">
              Terms of
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              These terms govern your use of ZOMY and outline the rights and responsibilities 
              of both users and our platform to ensure a fair and secure environment.
            </p>

            {/* Last Updated */}
            <div className="inline-flex items-center space-x-2 bg-zomy-gray-light text-gray-600 px-4 py-2 rounded-full">
              <span className="text-sm">Last Updated: January 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {termsSections.map((section, index) => (
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
            Questions About Terms?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If you have any questions about these terms of service, 
            please contact our legal team for clarification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
                Contact Legal Team
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