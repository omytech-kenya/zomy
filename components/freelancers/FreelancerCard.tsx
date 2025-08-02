import { Star, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface FreelancerCardProps {
  freelancer: {
    id: string;
    name: string;
    title: string;
    rating: number;
    hourlyRate: string;
    skills: string[];
    avatar: string;
    completedJobs: number;
    responseTime: string;
  };
}

export default function FreelancerCard({ freelancer }: FreelancerCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow bg-white">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
            <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-zomy-text">{freelancer.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{freelancer.title}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-zomy-accent-yellow mr-1" />
                <span>{freelancer.rating}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-zomy-accent-green mr-1" />
                <span>{freelancer.completedJobs} jobs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {freelancer.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {freelancer.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{freelancer.skills.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-lg font-semibold text-zomy-text">{freelancer.hourlyRate}/hr</div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              <span>Responds in {freelancer.responseTime}</span>
            </div>
          </div>
          <Button size="sm" className="bg-zomy-primary hover:bg-orange-600">
            Hire Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}