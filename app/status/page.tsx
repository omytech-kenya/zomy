import { CheckCircle, AlertCircle, XCircle, Activity, Clock, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const systemStatus = {
  overall: "All Systems Operational",
  uptime: "99.9%",
  lastIncident: "None in the past 90 days"
};

const services = [
  {
    name: "Website",
    status: "operational",
    responseTime: "45ms",
    uptime: "99.9%"
  },
  {
    name: "API",
    status: "operational",
    responseTime: "120ms",
    uptime: "99.8%"
  },
  {
    name: "Database",
    status: "operational",
    responseTime: "15ms",
    uptime: "99.9%"
  },
  {
    name: "Payment Processing",
    status: "operational",
    responseTime: "200ms",
    uptime: "99.7%"
  },
  {
    name: "File Storage",
    status: "operational",
    responseTime: "80ms",
    uptime: "99.9%"
  },
  {
    name: "Email Service",
    status: "operational",
    responseTime: "150ms",
    uptime: "99.8%"
  }
];

const recentIncidents = [
  {
    title: "Scheduled Maintenance - Database Optimization",
    date: "January 15, 2024",
    duration: "30 minutes",
    status: "resolved",
    description: "Routine database maintenance to improve performance and reliability."
  },
  {
    title: "Payment Gateway Update",
    date: "January 10, 2024",
    duration: "15 minutes",
    status: "resolved",
    description: "Updated payment processing system with enhanced security features."
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="h-5 w-5 text-zomy-accent-green" />;
    case 'degraded':
      return <AlertCircle className="h-5 w-5 text-zomy-accent-yellow" />;
    case 'outage':
      return <XCircle className="h-5 w-5 text-red-500" />;
    default:
      return <Activity className="h-5 w-5 text-gray-400" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'operational':
      return <Badge className="bg-zomy-accent-green text-white">Operational</Badge>;
    case 'degraded':
      return <Badge className="bg-zomy-accent-yellow text-amber-800">Degraded</Badge>;
    case 'outage':
      return <Badge className="bg-red-500 text-white">Outage</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

export default function StatusPage() {
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
              <Activity className="h-4 w-4" />
              <span className="text-sm font-medium">System Status</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zomy-text mb-6 leading-tight">
              System
              <span className="block text-zomy-primary bg-gradient-to-r from-zomy-primary to-orange-600 bg-clip-text text-transparent">
                Status
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Real-time status of ZOMY services. We're committed to providing reliable 
              and consistent service to our community.
            </p>
          </div>

          {/* Overall Status */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-zomy-accent-green mr-3" />
                  <h2 className="text-2xl font-bold text-zomy-text">
                    {systemStatus.overall}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-zomy-primary mb-2">
                      {systemStatus.uptime}
                    </div>
                    <div className="text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-zomy-primary mb-2">
                      0
                    </div>
                    <div className="text-gray-600">Active Incidents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-zomy-primary mb-2">
                      90 days
                    </div>
                    <div className="text-gray-600">Since Last Incident</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Service Status
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Current status of all ZOMY services and components.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-zomy-text">
                      {service.name}
                    </h3>
                    {getStatusIcon(service.status)}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      {getStatusBadge(service.status)}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Response Time:</span>
                      <span className="text-zomy-text font-medium">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Uptime:</span>
                      <span className="text-zomy-text font-medium">{service.uptime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zomy-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zomy-text mb-4">
              Recent Incidents
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Historical incidents and maintenance events.
            </p>
          </div>
          
          <div className="space-y-6">
            {recentIncidents.map((incident, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-zomy-text">
                      {incident.title}
                    </h3>
                    <Badge className="bg-zomy-accent-green text-white">
                      {incident.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {incident.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{incident.date}</span>
                    <span>Duration: {incident.duration}</span>
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
            Need Support?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If you're experiencing issues not reflected in our status page, 
            please contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-zomy-primary hover:bg-orange-600 text-white px-8 py-3">
                Contact Support
              </Button>
            </Link>
            <Link href="/help">
              <Button variant="outline" size="lg" className="px-8 py-3 border-zomy-gray-light">
                Help Center
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 