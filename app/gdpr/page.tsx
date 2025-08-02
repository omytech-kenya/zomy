import { Shield, Lock, Eye, CheckCircle, Sparkles, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const gdprRights = [
  {
    title: "Right to Access",
    description: "You have the right to request access to your personal data and receive information about how we process it.",
    icon: <Eye className="h-6 w-6 text-zomy-primary" />
  },
  {
    title: "Right to Rectification",
    description: "You can request correction of inaccurate or incomplete personal data we hold about you.",
    icon: <CheckCircle className="h-6 w-6 text-zomy-primary" />
  },
  {
    title: "Right to Erasure",
    description: "You can request deletion of your personal data in certain circumstances (the 'right to be forgotten').",
    icon: <Shield className="h-6 w-6 text-zomy-primary" />
  },
  {
    title: "Right to Portability",
    description: "You can request a copy of your personal data in a structured, machine-readable format.",
    icon: <FileText className="h-6 w-6 text-zomy-primary" />
  },
  {
    title: "Right to Object",
    description: "You can object to processing of your personal data in certain circumstances.",
    icon: <Lock className="h-6 w-6 text-zomy-primary" />
  },
  {
    title: "Right to Restriction",
    description: "You can request restriction of processing of your personal data in certain circumstances.",
    icon: <Sparkles className="h-6 w-6 text-zomy-primary" />
  }
];

const dataProcessing = [
  {
    purpose: "Account Management",
    legalBasis: "Contract Performance",
    retention: "Account lifetime + 7 years"
  },
  {
    purpose: "Service Provision",
    legalBasis: "Contract Performance",
    retention: "Service duration + 3 years"
  },
  {
    purpose: "Communication",
    legalBasis: "Legitimate Interest",
    retention: "Until consent withdrawal"
  },
  {
    purpose: "Analytics",
    legalBasis: "Legitimate Interest",
    retention: "2 years"
  },
  {
    purpose: "Marketing",
    legalBasis: "Consent",
    retention: "Until consent withdrawal"
  },
  {
    purpose: "Legal Compliance",
    legalBasis: "Legal Obligation",
    retention: "As required by law"
  }
];

export default function GDPRPage() {
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
              <span className="text-sm font-medium">GDPR Compliance</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-6 leading-tight">
              GDPR
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR). 
              This page explains your rights and how we handle your personal data.
            </p>

            {/* Last Updated */}
            <div className="inline-flex items-center space-x-2 bg-zomy-gray-light text-gray-600 px-4 py-2 rounded-full">
              <span className="text-sm">Last Updated: January 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Your GDPR Rights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Under GDPR, you have several rights regarding your personal data. Here's how we support them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gdprRights.map((right, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-zomy-primary/10 rounded-lg mr-4">
                      {right.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-zomy-text">
                      {right.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {right.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Processing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zomy-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              How We Process Your Data
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparency about our data processing activities and legal basis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataProcessing.map((processing, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-zomy-text mb-3">
                    {processing.purpose}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600 text-sm">Legal Basis:</span>
                      <Badge variant="outline" className="ml-2 text-zomy-primary border-zomy-primary">
                        {processing.legalBasis}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Retention:</span>
                      <p className="text-zomy-text font-medium mt-1">{processing.retention}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zomy-text mb-4">
                  Data Protection Measures
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of processing your personal data.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-zomy-text mb-2">Technical Measures</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Encryption of data in transit and at rest</li>
                      <li>• Regular security assessments</li>
                      <li>• Access controls and authentication</li>
                      <li>• Secure data centers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zomy-text mb-2">Organizational Measures</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Staff training on data protection</li>
                      <li>• Data protection impact assessments</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular policy reviews</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zomy-text mb-4">
                  Exercising Your Rights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To exercise any of your GDPR rights, please contact our Data Protection Officer. We will respond to your request within one month.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-zomy-text mb-2">Contact Information</h3>
                    <p className="text-gray-600 text-sm">
                      Email: privacy@zomy.com<br/>
                      Address: [Your Company Address]<br/>
                      Phone: [Your Phone Number]
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zomy-text mb-2">What to Include</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Your full name and contact details</li>
                      <li>• Specific right you want to exercise</li>
                      <li>• Any relevant account information</li>
                      <li>• Proof of identity if required</li>
                    </ul>
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
            Questions About GDPR?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If you have any questions about our GDPR compliance or want to exercise your rights, 
            please don't hesitate to contact our Data Protection Officer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
                Contact DPO
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