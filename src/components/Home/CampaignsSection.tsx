
import React from 'react';
import { campaigns } from '@/data/mockData';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

const CampaignsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-hospital-primary mb-4">
            স্বাস্থ্য ক্যাম্পেইন ও অফারসমূহ
          </h2>
          <p className="text-gray-600">
            আমাদের বিশেষ স্বাস্থ্য ক্যাম্পেইন, প্রোমোশন ও অফারসমূহের সুবিধা নিন—উন্নতমানের স্বাস্থ্যসেবা আরও সহজলভ্য করতে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
              {/* Campaign Image */}
              <div className="aspect-video relative overflow-hidden bg-gray-200">
                <img
                  src="/placeholder.svg" 
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-hospital-primary">
                  {campaign.category}
                </Badge>
              </div>
              
              <CardContent className="pt-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">{campaign.title}</h3>
                <p className="text-gray-600 mb-4">{campaign.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{campaign.date}</span>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white"
                >
                  আরও জানুন
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;
