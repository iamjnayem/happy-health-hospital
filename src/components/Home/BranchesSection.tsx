
import React, { useEffect, useRef, useState } from 'react';
import { branches } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

const BranchesSection = () => {
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const mapRefs = useRef<{[key: string]: any}>({});
  const [activeTab, setActiveTab] = useState(branches[0].id.toString());
  
  useEffect(() => {
    // In a real application, you would load the Google Maps API here
    // For this example, we'll simulate the API loading
    const timer = setTimeout(() => {
      setMapApiLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!mapApiLoaded) return;
    
    // Simulate rendering maps when API is loaded
    branches.forEach(branch => {
      const mapId = `map-${branch.id}`;
      const mapContainer = document.getElementById(mapId);
      if (mapContainer && !mapRefs.current[mapId]) {
        // In a real application, you would initialize the Google Map here
        // For now, we'll just add a placeholder
        mapContainer.innerHTML = `
          <div class="w-full h-full flex items-center justify-center bg-gray-200 relative overflow-hidden">
            <div class="absolute inset-0 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000" stroke-width="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div class="bg-hospital-primary text-white px-3 py-1 rounded-full z-10 flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>${branch.name}</span>
            </div>
          </div>
        `;
        mapRefs.current[mapId] = true;
      }
    });
  }, [mapApiLoaded, activeTab]);
  
  return (
    <section id="branches" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-hospital-primary mb-4">
            আমাদের শাখাসমূহ
          </h2>
          <p className="text-gray-600">
            আমাদের বিভিন্ন শাখায় গিয়ে সহজেই আমাদের সকল স্বাস্থ্যসেবা গ্রহণ করুন।
          </p>
        </div>
        
        <Tabs 
          defaultValue={branches[0].id.toString()} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="flex justify-center flex-wrap mb-8 gap-2">
            {branches.map((branch) => (
              <TabsTrigger 
                key={branch.id} 
                value={branch.id.toString()}
                className="data-[state=active]:bg-hospital-primary data-[state=active]:text-white px-6 py-2"
              >
                {branch.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {branches.map((branch) => (
            <TabsContent 
              key={branch.id} 
              value={branch.id.toString()}
              className="border rounded-lg shadow-md bg-white overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Map */}
                <div className="h-72 md:h-auto" id={`map-${branch.id}`}>
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    {!mapApiLoaded && <p>
                      ম্যাপ লোড হচ্ছে...
                    </p>}
                  </div>
                </div>
                
                {/* Branch Info */}
                <Card className="border-none shadow-none">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-hospital-primary mb-4">{branch.name}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 text-hospital-primary mt-0.5" />
                        <p>{branch.address}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-hospital-primary" />
                        <p>{branch.phone}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-hospital-primary" />
                        <p>{branch.email}</p>
                      </div>
                    </div>
                    
                    <h4 className="font-bold mb-3">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {branch.services.map((service, index) => (
                        <span 
                          key={index} 
                          className="bg-hospital-primary/10 text-hospital-primary px-3 py-1 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default BranchesSection;
