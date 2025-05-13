
import React from 'react';
import { hospitalInfo } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // Here you would typically send the email to your API
    console.log('Subscribing email:', email);
    
    toast({
      title: "Subscription Successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    form.reset();
  };

  return (
    <footer className="bg-hospital-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{hospitalInfo.name}</h3>
            <p className="mb-4 text-gray-300">{hospitalInfo.tagline}</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>{hospitalInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>{hospitalInfo.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{hospitalInfo.address}</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#doctors" className="text-gray-300 hover:text-white transition-colors">Our Doctors</a></li>
              <li><a href="#branches" className="text-gray-300 hover:text-white transition-colors">Locations</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Emergency Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cardiology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Neurology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pediatrics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Laboratory Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Services</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">Subscribe to our newsletter to receive updates.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="Your email address"
                required
                className="bg-gray-700 border-gray-600 focus:border-hospital-secondary"
              />
              <Button 
                type="submit" 
                className="w-full bg-hospital-primary hover:bg-hospital-secondary"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {hospitalInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href={hospitalInfo.socialMedia.facebook} aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1.02-1.1h3.22V.45L14.84.43c-4.15 0-5.08 3.1-5.08 5.07v1.96H6.9v4.12h2.87v11.97h4.73V11.58h3.2l.4-4.12z"/></svg>
            </a>
            <a href={hospitalInfo.socialMedia.twitter} aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.74 4.81c-.88.39-1.82.65-2.8.77a4.88 4.88 0 0 0 2.13-2.68c-.94.56-1.97.96-3.07 1.18a4.84 4.84 0 0 0-8.26 4.41A13.72 13.72 0 0 1 2.28 3.11a4.84 4.84 0 0 0 1.5 6.45 4.82 4.82 0 0 1-2.2-.6v.06a4.84 4.84 0 0 0 3.88 4.75 4.84 4.84 0 0 1-2.19.08 4.84 4.84 0 0 0 4.53 3.36 9.69 9.69 0 0 1-6 2.07c-.39 0-.78-.02-1.16-.07a13.5 13.5 0 0 0 7.36 2.16c8.84 0 13.68-7.33 13.68-13.68 0-.21 0-.42-.01-.62a9.72 9.72 0 0 0 2.4-2.48L23.74 4.8z"/></svg>
            </a>
            <a href={hospitalInfo.socialMedia.instagram} aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.84-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
            </a>
            <a href={hospitalInfo.socialMedia.linkedin} aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.13 1.13 1 2.5 1s2.48 1.13 2.48 2.5zM5 8H0v16h5V8zm7.98 0H8.03v16h4.95v-8.38c0-4.67 6.03-5.05 6.03 0V24H24V13.9c0-7.88-8.92-7.59-11.02-3.75V8z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
