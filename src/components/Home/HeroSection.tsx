
import React from 'react';
import { hospitalInfo } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import AppointmentModal from '@/components/Appointment/AppointmentModal';

const HeroSection = () => {
  const [showAppointment, setShowAppointment] = React.useState(false);

  return (
    <div className="relative bg-gradient-to-r from-hospital-primary to-hospital-secondary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="white" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>
      
      <div className="container relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              আপনার স্বাস্থ্য আমাদের <span className="text-hospital-accent">প্রাধান্য</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              {hospitalInfo.name} এ আপনাকে স্বাগতম, যেখানে আমরা সহানুভূতি ও দক্ষতার সাথে সর্বোত্তম স্বাস্থ্যসেবা প্রদান করি।
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-hospital-primary hover:bg-hospital-accent hover:text-hospital-primary" 
                size="lg"
                onClick={() => setShowAppointment(true)}
              >
                অ্যাপয়েন্টমেন্ট বুক করুন
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-hospital-primary hover:bg-white/20" 
                size="lg"
              >
                আমাদের সেবা
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold">
                  ৩৫+
                </div>
                <div className="text-sm opacity-90">
                  বছরের অভিজ্ঞতা</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold">
                  ২০০+
                </div>
                <div className="text-sm opacity-90">
                  ডাক্তার
                </div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold">
                  ৫০,০০০+
                </div>
                <div className="text-sm opacity-90">
                  সুখী রোগী
                </div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold">
                  ৯৮%
                </div>
                <div className="text-sm opacity-90">
                  সন্তুষ্টির হার
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              {/* We'll use a placeholder image here */}
              <div className="aspect-[4/3] bg-hospital-accent flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Hospital care" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-hospital-accent opacity-40"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-hospital-accent opacity-40"></div>
          </div>
        </div>
      </div>
      
      {/* Appointment Modal */}
      <AppointmentModal isOpen={showAppointment} onClose={() => setShowAppointment(false)} />
    </div>
  );
};

export default HeroSection;
