
import React from 'react';
import { jobs } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CareersSection = () => {
  return (
    <section id="careers" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-hospital-primary mb-4">
            আমাদের টিমে যোগ দিন
          </h2>
          <p className="text-gray-600">
            মেডিকেয়ার হাসপাতালে ক্যারিয়ার গড়ুন এবং আমাদের অসাধারণ স্বাস্থ্যসেবা প্রদানের মিশনের অংশ হোন।
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => {
            // Calculate days remaining
            const deadline = new Date(job.deadline);
            const today = new Date();
            const daysRemaining = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 3600 * 24));
            
            return (
              <Card 
                key={job.id} 
                className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-hospital-primary">{job.department}</p>
                    </div>
                    <Badge 
                      variant={job.type === "Full-time" ? "default" : "outline"}
                      className={job.type === "Full-time" ? "bg-hospital-primary" : ""}
                    >
                      {job.type}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        অভিজ্ঞতা
                      </p>
                      <p className="font-medium">{job.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        শিক্ষাগত যোগ্যতা
                      </p>
                      <p className="font-medium">{job.education}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {daysRemaining} দিন বাকি
                      </span>
                    </div>
                    <Button className="bg-hospital-primary hover:bg-hospital-secondary">
                      আবেদন করুন
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white">
            সব চাকরি দেখুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
