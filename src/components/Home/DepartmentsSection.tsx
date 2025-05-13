
import React from 'react';
import { departments } from '@/data/mockData';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DepartmentsSection = () => {
  return (
    <section id="departments" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-hospital-primary mb-4">Our Departments</h2>
          <p className="text-gray-600">
            Our hospital features specialized departments with expert teams dedicated to providing comprehensive care across medical fields.
          </p>
        </div>
        
        <Tabs defaultValue={departments[0].name.toLowerCase()} className="max-w-4xl mx-auto">
          <TabsList className="flex justify-center flex-wrap mb-8 gap-2">
            {departments.map((dept) => (
              <TabsTrigger 
                key={dept.id} 
                value={dept.name.toLowerCase()}
                className="data-[state=active]:bg-hospital-primary data-[state=active]:text-white px-6 py-2"
              >
                {dept.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {departments.map((dept) => (
            <TabsContent 
              key={dept.id} 
              value={dept.name.toLowerCase()}
              className="border p-6 rounded-lg shadow-md bg-white"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-hospital-primary mb-4">{dept.name}</h3>
                  <p className="mb-6 text-gray-600">{dept.description}</p>
                  
                  <h4 className="font-bold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hospital-primary rounded-full mr-3"></div>
                      <span>Expert Specialists & Consultants</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hospital-primary rounded-full mr-3"></div>
                      <span>State-of-the-art Equipment</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hospital-primary rounded-full mr-3"></div>
                      <span>Comprehensive Treatment Plans</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hospital-primary rounded-full mr-3"></div>
                      <span>Supportive Patient Care</span>
                    </li>
                  </ul>
                </div>
                
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  {/* Placeholder image */}
                  <div className="w-full h-full flex items-center justify-center bg-hospital-primary/10">
                    <span className="text-5xl">
                      {dept.icon === 'heart' && '❤️'}
                      {dept.icon === 'brain' && '🧠'}
                      {dept.icon === 'bone' && '🦴'}
                      {dept.icon === 'baby' && '👶'}
                      {dept.icon === 'activity' && '📈'}
                      {dept.icon === 'user' && '👩‍⚕️'}
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DepartmentsSection;
