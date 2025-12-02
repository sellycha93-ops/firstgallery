
import React from 'react';
import { Hero } from '../Hero';
import { BestSeller } from '../BestSeller';
import { NewArrivals } from '../NewArrivals';
import { Sustainability } from '../Sustainability';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <BestSeller />
      <NewArrivals />
      <Sustainability />
    </div>
  );
};
