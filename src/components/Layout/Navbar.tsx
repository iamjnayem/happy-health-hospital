import React, { useState, useEffect } from 'react';
import { hospitalInfo } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* উপরের তথ্য বার */}
      <div className="bg-hospital-primary text-white py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-2" />
              <span>{hospitalInfo.phone}</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2" />
              <span>{hospitalInfo.email}</span>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{hospitalInfo.address}</span>
          </div>
        </div>
      </div>

      {/* মূল ন্যাভিগেশন */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
            ? 'bg-white shadow-md py-2'
            : 'bg-transparent py-4'
          }`}
      >
        <div className="container flex justify-between items-center">
          {/* লোগো */}
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-hospital-primary">
              {hospitalInfo.name}
            </span>
          </a>

          {/* ডেস্কটপ ন্যাভিগেশন */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-medium hover:text-hospital-primary transition-colors">সেবা সমূহ</a>
            <a href="#departments" className="font-medium hover:text-hospital-primary transition-colors">বিভাগসমূহ</a>
            <a href="#doctors" className="font-medium hover:text-hospital-primary transition-colors">চিকিৎসকগণ</a>
            <a href="#branches" className="font-medium hover:text-hospital-primary transition-colors">শাখাসমূহ</a>
            <a href="#careers" className="font-medium hover:text-hospital-primary transition-colors">ক্যারিয়ার</a>
            <Button className="bg-hospital-primary hover:bg-hospital-secondary">অ্যাপয়েন্টমেন্ট নিন</Button>
          </nav>

          {/* মোবাইল মেনু বাটন */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="মেনু টগল করুন"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* মোবাইল ন্যাভিগেশন */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container py-4 space-y-4">
              <a href="#services" className="block py-2 hover:text-hospital-primary transition-colors">সেবা সমূহ</a>
              <a href="#departments" className="block py-2 hover:text-hospital-primary transition-colors">বিভাগসমূহ</a>
              <a href="#doctors" className="block py-2 hover:text-hospital-primary transition-colors">চিকিৎসকগণ</a>
              <a href="#branches" className="block py-2 hover:text-hospital-primary transition-colors">শাখাসমূহ</a>
              <a href="#careers" className="block py-2 hover:text-hospital-primary transition-colors">ক্যারিয়ার</a>
              <Button className="w-full bg-hospital-primary hover:bg-hospital-secondary">অ্যাপয়েন্টমেন্ট নিন</Button>

              {/* মোবাইল যোগাযোগ তথ্য */}
              <div className="border-t pt-4 mt-4 space-y-2 text-sm">
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
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
