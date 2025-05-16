
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
      title: "সাবস্ক্রিপশন সফল!",
      description: "আমাদের নিউজলেটারে সাবস্ক্রাইব করার জন্য ধন্যবাদ।",
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
            <h3 className="text-xl font-bold mb-4">
              দ্রুত লিঙ্কসমূহ
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                আমাদের সম্পর্কে
              </a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">
                আমাদের সেবা
              </a></li>
              <li><a href="#doctors" className="text-gray-300 hover:text-white transition-colors">
                আমাদের ডাক্তারবৃন্দ
              </a></li>
              <li><a href="#branches" className="text-gray-300 hover:text-white transition-colors">
                আমাদের শাখাসমূহ
              </a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">
                ক্যারিয়ার
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                যোগাযোগ করুন
              </a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">সেবাসমূহ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">জরুরি সেবা</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">হৃদরোগ বিভাগ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">স্নায়ুবিজ্ঞান বিভাগ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">শিশু বিভাগ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">পরীক্ষাগার সেবা</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">সমস্ত সেবা</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">নিউজলেটার</h3>
            <p className="mb-4 text-gray-300">আপডেট পেতে আমাদের নিউজলেটার সাবস্ক্রাইব করুন।</p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা"
                required
                className="bg-gray-700 border-gray-600 focus:border-hospital-secondary"
              />
              <Button
                type="submit"
                className="w-full bg-hospital-primary hover:bg-hospital-secondary"
              >
                সাবস্ক্রাইব করুন
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {hospitalInfo.name}. সকল অধিকার সংরক্ষিত।
          </p>
          <div className="flex space-x-4">
            <a href={hospitalInfo.socialMedia.facebook} aria-label="ফেসবুক" className="text-gray-400 hover:text-white transition-colors">
              {/* Facebook Icon */}
            </a>
            <a href={hospitalInfo.socialMedia.twitter} aria-label="টুইটার" className="text-gray-400 hover:text-white transition-colors">
              {/* Twitter Icon */}
            </a>
            <a href={hospitalInfo.socialMedia.instagram} aria-label="ইনস্টাগ্রাম" className="text-gray-400 hover:text-white transition-colors">
              {/* Instagram Icon */}
            </a>
            <a href={hospitalInfo.socialMedia.linkedin} aria-label="লিঙ্কডইন" className="text-gray-400 hover:text-white transition-colors">
              {/* LinkedIn Icon */}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
