'use client';

import { Bell, Briefcase, DollarSign, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FreelancerLayout from '@/components/layout/FreelancerLayout';
import JobCard from '@/components/jobs/JobCard';

const stats = [
  {
    title: 'Active Projects',
    value: '3',
    icon: <Briefcase className="h-4 w-4" />,
    change: '+2 this month',
    changeType: 'positive'
  },
  {
    title: 'Total Earnings',
    value: '$12,450',
    icon: <DollarSign className="h-4 w-4" />,
    change: '+15% from last month',
    changeType: 'positive'
  },
  {
    title: 'Profile Views',
    value: '284',
    icon: <TrendingUp className="h-4 w-4" />,
    change: '+8% this week',
    changeType: 'positive'
  },
  {
    title: 'Rating',
    value: '4.9',
    icon: <Star className="h-4 w-4" />,
    change: 'Based on 47 reviews',
    changeType: 'neutral'
  }
];

const recentJobs = [
  {
    id: '1',
    title: 'Modern E-commerce Website Design',
    client: 'TechStart Inc.',
    budget: '$2,500 - $3,500',
    duration: '2-3 weeks',
    skills: ['UI/UX Design', 'Figma', 'Web Design'],
    description: 'Looking for a talented designer to create a modern, responsive e-commerce website...',
    postedTime: '2 hours ago',
    applicants: 12
  },
  {
    id: '2',
    title: 'React.js Frontend Development',
    client: 'Digital Solutions',
    budget: '$1,800 - $2,200',
    duration: '1-2 weeks',
    skills: ['React', 'JavaScript', 'CSS'],
    description: 'Need an experienced React developer to build a responsive frontend application...',
    postedTime: '5 hours ago',
    applicants: 8
  },
  {
    id: '3',
    title: 'Mobile App UI/UX Design',
    client: 'StartupXYZ',
    budget: '$1,200 - $1,800',
    duration: '1 week',
    skills: ['Mobile Design', 'Figma', 'Prototyping'],
    description: 'Creating a user-friendly mobile app interface for our new fitness application...',
    postedTime: '1 day ago',
    applicants: 15
  }
];

export default function FreelancerDashboard() {
  return (
    <FreelancerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-zomy-text">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Sarah! Here's what's happening with your projects.</p>
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

        {/* Recent Jobs & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Jobs */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-zomy-text">Recent Job Opportunities</CardTitle>
              <CardDescription>Jobs that match your skills and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-zomy-text">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-zomy-primary hover:bg-orange-600 text-white">
                <Briefcase className="h-4 w-4 mr-2" />
                Browse Jobs
              </Button>
              <Button variant="outline" className="w-full border-zomy-gray-light">
                <TrendingUp className="h-4 w-4 mr-2" />
                Update Profile
              </Button>
              <Button variant="outline" className="w-full border-zomy-gray-light">
                <DollarSign className="h-4 w-4 mr-2" />
                View Earnings
              </Button>
              <Button variant="outline" className="w-full border-zomy-gray-light">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-zomy-text">Recent Activity</CardTitle>
            <CardDescription>Your latest project updates and messages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 border border-zomy-gray-light rounded-lg">
                <div className="w-2 h-2 bg-zomy-accent-green rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zomy-text">Project "E-commerce Redesign" updated</p>
                  <p className="text-xs text-gray-500">Client uploaded new requirements</p>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 border border-zomy-gray-light rounded-lg">
                <div className="w-2 h-2 bg-zomy-accent-yellow rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zomy-text">New message from TechStart Inc.</p>
                  <p className="text-xs text-gray-500">Regarding project timeline</p>
                </div>
                <span className="text-xs text-gray-500">4 hours ago</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 border border-zomy-gray-light rounded-lg">
                <div className="w-2 h-2 bg-zomy-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zomy-text">Payment received</p>
                  <p className="text-xs text-gray-500">$2,500 for Mobile App Design</p>
                </div>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FreelancerLayout>
  );
}