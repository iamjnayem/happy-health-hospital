
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import DepartmentsSection from '@/components/Home/DepartmentsSection';
import DoctorsSection from '@/components/Home/DoctorsSection';
import BranchesSection from '@/components/Home/BranchesSection';
import StatsSection from '@/components/Home/StatsSection';
import CampaignsSection from '@/components/Home/CampaignsSection';
import CareersSection from '@/components/Home/CareersSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <DepartmentsSection />
        <StatsSection />
        <DoctorsSection />
        <BranchesSection />
        <CampaignsSection />
        <CareersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
