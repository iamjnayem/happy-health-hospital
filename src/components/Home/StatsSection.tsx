
import React from 'react';
import { statistics } from '@/data/mockData';
import { motion } from './utils/CounterAnimation';

// Simple counter animation component
const CounterAnimation = ({ target }: { target: string }) => {
  return <span>{target}</span>;
};

const StatsSection = () => {
  return (
    <section className="bg-hospital-primary text-white py-24">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              <CounterAnimation target={statistics.patients} />
            </div>
            <p className="text-hospital-accent">
              পরিবেশনকৃত রোগী
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              <CounterAnimation target={statistics.doctors} />
            </div>
            <p className="text-hospital-accent">
              বিশেষজ্ঞ ডাক্তার
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              <CounterAnimation target={statistics.beds} />
            </div>
            <p className="text-hospital-accent">
              হাসপাতালের বেড
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              <CounterAnimation target={statistics.satisfaction} />
            </div>
            <p className="text-hospital-accent">
              রোগীর সন্তুষ্টি
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              <CounterAnimation target={statistics.awards} />
            </div>
            <p className="text-hospital-accent">
              অর্জিত পুরস্কার
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              <CounterAnimation target={statistics.experience} />
            </div>
            <p className="text-hospital-accent">
              অভিজ্ঞতার বছর</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
