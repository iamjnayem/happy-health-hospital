
import React from 'react';
import { doctors } from '@/data/mockData';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DoctorsSection = () => {
  return (
    <section id="doctors" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-hospital-primary mb-4">Our Specialists</h2>
          <p className="text-gray-600">
            Meet our team of experienced doctors who are dedicated to providing you with the highest quality healthcare.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
              {/* Doctor Image */}
              <div className="aspect-square relative overflow-hidden bg-gray-200">
                <img
                  src="/placeholder.svg" 
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm">Available: {doctor.available}</p>
                </div>
              </div>
              
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                <p className="text-hospital-primary font-medium mb-2">{doctor.specialty}</p>
                <div className="border-t pt-3 mt-3 text-sm text-gray-600">
                  <p className="mb-1">{doctor.education}</p>
                  <p>{doctor.experience} experience</p>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white"
                >
                  Book Appointment
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="link" className="text-hospital-primary text-lg">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
