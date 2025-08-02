'use client';

import { Briefcase, DollarSign, Eye, Users, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ClientLayout from '@/components/layout/ClientLayout';
import FreelancerCard from '@/components/freelancers/FreelancerCard';

const stats = [
  {
    title: 'Active Projects',
    value: '5',
    icon: <Briefcase className="h-4 w-4" />,
    change: '+2 this month',
    changeType: 'positive'
  },
  {
    title: 'Total Spent',
    value: '$18,750',
    icon: <DollarSign className="h-4 w-4" />,
    change: '+25% from last month',
    changeType: 'positive'
  },
  {
    title: 'Job Views',
    value: '432',
    icon: <Eye className="h-4 w-4" />,
    change: '+12% this week',
    changeType: 'positive'
  },
  {
    title: 'Total Freelancers',
    value: '23',
    icon: <Users className="h-4 w-4" />,
    change: 'Worked with this year',
    changeType: 'neutral'
  }
];

const activeProjects = [
  {
    id: '1',
    title: 'E-commerce Website Redesign',
    freelancer: 'Sarah Chen',
    status: 'In Progress',
    progress: 75,
    deadline: '2024-02-15',
    budget: '$3,500'
  },
  {
    id: '2',
    title: 'Mobile App Development',
    freelancer: 'Michael Rodriguez',
    status: 'Review',
    progress: 90,
    deadline: '2024-02-10',
    budget: '$8,500'
  },
  {
    id: '3',
    title: 'Brand Identity Design',
    freelancer: 'Emily Johnson',
    status: 'In Progress',
    progress: 45,
    deadline: '2024-02-20',
    budget: '$2,200'
  }
];

const topFreelancers = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'UI/UX Designer',
    rating: 4.9,
    hourlyRate: '$85',
    skills: ['UI/UX Design', 'Figma', 'Prototyping'],
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    completedJobs: 47,
    responseTime: '1 hour'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    title: 'Full Stack Developer',
    rating: 4.8,
    hourlyRate: '$95',
    skills: ['React', 'Node.js', 'MongoDB'],
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    completedJobs: 62,
    responseTime: '2 hours'
  }
];

export default function ClientDashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-zomy-accent-yellow text-amber-800';
      case 'Review':
        return 'bg-zomy-accent-green text-green-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-zomy-accent-green';
    if (progress >= 60) return 'bg-zomy-accent-yellow';
    return 'bg-zomy-primary';
  };

  return (
    <ClientLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-zomy-text">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-zomy-text">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <div className="p-2 bg-zomy-primary/10 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-zomy-text">Active Projects</CardTitle>
              <CardDescription>Track the progress of your ongoing projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeProjects.map((project) => (
                <div key={project.id} className="border border-zomy-gray-light rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-zomy-text">{project.title}</h3>
                      <p className="text-sm text-gray-600">by {project.freelancer}</p>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-zomy-text font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      Due: {project.deadline}
                    </div>
                    <div className="text-zomy-text font-medium">
                      {project.budget}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top Freelancers */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-zomy-text">Top Freelancers</CardTitle>
              <CardDescription>Your most reliable talent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topFreelancers.map((freelancer) => (
                <FreelancerCard key={freelancer.id} freelancer={freelancer} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-zomy-text">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-zomy-primary hover:bg-orange-600 text-white">
                <Briefcase className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
              <Button variant="outline" className="border-zomy-gray-light">
                <Users className="h-4 w-4 mr-2" />
                Browse Freelancers
              </Button>
              <Button variant="outline" className="border-zomy-gray-light">
                <CheckCircle className="h-4 w-4 mr-2" />
                Review Projects
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ClientLayout>
  );
}