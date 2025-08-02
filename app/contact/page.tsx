import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Sparkles, ArrowRight, Users, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email Us',
    description: 'Get in touch with our support team',
    value: 'support@zomy.com',
    action: 'mailto:support@zomy.com'
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Call Us',
    description: 'Speak with our sales team',
    value: '+1 (555) 123-4567',
    action: 'tel:+15551234567'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Visit Us',
    description: 'Our headquarters',
    value: '123 Innovation Drive, Tech City, TC 12345',
    action: '#'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Business Hours',
    description: 'When we\'re available',
    value: 'Mon-Fri: 9AM-6PM EST',
    action: '#'
  }
];

export default function ContactPage() {
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
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">We're Here to Help</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-8 leading-tight">
              Get in
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Have questions about ZOMY? We're here to help. Reach out to our team and we'll get back to you 
              as soon as possible with personalized support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
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

          {/* Support Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-6 w-6 text-zomy-primary" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Round-the-clock assistance for all your needs</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-zomy-accent-green" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Experienced professionals ready to help</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-zomy-accent-yellow" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">Get answers within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-zomy-text">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-zomy-primary hover:bg-orange-600 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-zomy-text mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Choose the best way to reach us. Our team is ready to help with any questions about ZOMY.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-zomy-primary/10 rounded-lg">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-zomy-text mb-1">
                            {info.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {info.description}
                          </p>
                          <a 
                            href={info.action}
                            className="text-zomy-primary hover:text-orange-600 text-sm font-medium"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zomy-gray-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zomy-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  How do I get started with ZOMY?
                </h3>
                <p className="text-gray-600">
                  Simply sign up for a free account and start exploring. You can create your profile and begin connecting with clients or freelancers immediately.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  What payment methods do you support?
                </h3>
                <p className="text-gray-600">
                  We support all major credit cards, PayPal, and bank transfers. All payments are processed securely through our trusted payment partners.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  Is my data secure?
                </h3>
                <p className="text-gray-600">
                  Yes, we use industry-standard encryption and security measures to protect your data. Your privacy and security are our top priorities.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  Can I cancel my subscription anytime?
                </h3>
                <p className="text-gray-600">
                  Absolutely. You can cancel your subscription at any time with no cancellation fees. You'll continue to have access until the end of your billing period.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  Do you offer customer support?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer 24/7 customer support through email, live chat, and phone. Our support team is always ready to help you.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  How do I report an issue?
                </h3>
                <p className="text-gray-600">
                  You can report issues through our contact form, email us directly, or use the in-app support feature. We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zomy-text mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
              <MessageSquare className="h-5 w-5 mr-2" />
              Start Live Chat
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 border-zomy-gray-light">
              <Mail className="h-5 w-5 mr-2" />
              Email Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 