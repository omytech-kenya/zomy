import { Check, Zap, Star, Crown, Sparkles, DollarSign, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Up to 3 active projects',
      'Basic messaging',
      'Standard support',
      'Community access'
    ],
    cta: 'Get Started Free',
    popular: false,
    icon: <Zap className="h-6 w-6" />
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'per month',
    description: 'For growing businesses and freelancers',
    features: [
      'Unlimited projects',
      'Priority messaging',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
      'API access'
    ],
    cta: 'Start Free Trial',
    popular: true,
    icon: <Star className="h-6 w-6" />
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For large teams and organizations',
    features: [
      'Everything in Professional',
      'Team collaboration tools',
      'Advanced security',
      'Dedicated account manager',
      'Custom integrations',
      'White-label options'
    ],
    cta: 'Contact Sales',
    popular: false,
    icon: <Crown className="h-6 w-6" />
  }
];

export default function PricingPage() {
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
              <DollarSign className="h-4 w-4" />
              <span className="text-sm font-medium">Transparent Pricing</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-8 leading-tight">
              Simple,
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your needs. Start free and upgrade as you grow. 
              No hidden fees, no surprises.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2 border-zomy-gray-light hover:border-zomy-primary hover:text-zomy-primary transition-all duration-300">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          {/* Pricing Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-zomy-primary" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">Free Forever</h3>
                <p className="text-gray-600 text-sm">Start with our free plan, no credit card required</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-zomy-accent-green" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">Secure Payments</h3>
                <p className="text-gray-600 text-sm">Protected transactions with industry-standard security</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-zomy-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-zomy-accent-yellow" />
                </div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">Premium Support</h3>
                <p className="text-gray-600 text-sm">Priority support for all paid plans</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Toggle for monthly/yearly */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className="text-gray-600">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" id="billing-toggle" />
              <label htmlFor="billing-toggle" className="block w-14 h-8 bg-gray-200 rounded-full cursor-pointer">
                <span className="block w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
            <span className="text-gray-600">Yearly <Badge className="bg-zomy-accent-green text-white ml-2">Save 20%</Badge></span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-white ${
                  plan.popular 
                    ? 'ring-2 ring-zomy-primary shadow-xl scale-105' 
                    : 'shadow-lg'
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zomy-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-zomy-primary/10 rounded-lg">
                      {plan.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-zomy-text">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-zomy-text">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-zomy-accent-green mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/auth/signup">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-zomy-primary hover:bg-orange-600 text-white' 
                          : 'bg-white text-zomy-primary border border-zomy-primary hover:bg-zomy-primary hover:text-white'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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
              Everything you need to know about our pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  Can I change my plan anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600">
                  Yes, all paid plans come with a 14-day free trial. No credit card required.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers for annual plans.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-gray-600">
                  We offer a 30-day money-back guarantee for all paid plans.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription at any time with no cancellation fees.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zomy-text mb-2">
                  Is there a setup fee?
                </h3>
                <p className="text-gray-600">
                  No setup fees. You only pay for the plan you choose.
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who trust ZOMY for their freelance and client collaboration needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="px-8 py-3 border-zomy-gray-light">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}