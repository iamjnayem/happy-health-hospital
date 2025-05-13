
import React, { useEffect, useState, useRef } from 'react';

export const motion = {
  // This is a placeholder for animation logic
};

const CounterAnimation = ({ target, duration = 2000 }: { target: string; duration?: number }) => {
  const [count, setCount] = useState("0");
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target]);

  const animateValue = () => {
    // For numeric targets with a "+" suffix
    if (target.endsWith("+")) {
      const numericTarget = parseInt(target.replace(/\D/g, ""), 10);
      
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * numericTarget);
        
        // Format with commas if needed
        setCount(currentCount.toLocaleString() + "+");
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    } 
    // For percentage values
    else if (target.includes("%")) {
      const numericTarget = parseInt(target, 10);
      
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * numericTarget);
        
        setCount(currentCount + "%");
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    } 
    // For text values like "35+ years"
    else {
      setCount(target);
    }
  };

  return <span ref={elementRef}>{count}</span>;
};

export default CounterAnimation;
