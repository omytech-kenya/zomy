import { Clock, DollarSign, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    client: string;
    budget: string;
    duration: string;
    skills: string[];
    description: string;
    postedTime: string;
    applicants: number;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow bg-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-zomy-text mb-2">{job.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{job.client}</p>
          </div>
          <Button size="sm" className="bg-zomy-primary hover:bg-orange-600">
            Apply Now
          </Button>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>{job.budget}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{job.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{job.applicants} applicants</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{job.postedTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}