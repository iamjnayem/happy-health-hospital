
import React from 'react';
import { services } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-hospital-primary mb-4">Our Services</h2>
          <p className="text-gray-600">
            We provide a wide range of medical services to meet all your healthcare needs with the highest standards of quality and patient care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-hospital-primary/10 text-hospital-primary rounded-2xl flex items-center justify-center mb-4">
                  {/* Simplified icons using Tailwind classes */}
                  {service.icon === 'ambulance' && <span className="text-2xl font-bold">🚑</span>}
                  {service.icon === 'flask' && <span className="text-2xl font-bold">🧪</span>}
                  {service.icon === 'x-ray' && <span className="text-2xl font-bold">📊</span>}
                  {service.icon === 'scissors' && <span className="text-2xl font-bold">✂️</span>}
                  {service.icon === 'activity' && <span className="text-2xl font-bold">📈</span>}
                  {service.icon === 'brain' && <span className="text-2xl font-bold">🧠</span>}
                </div>
                <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <a 
                  href="#" 
                  className="text-hospital-primary font-medium flex items-center text-sm group-hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
