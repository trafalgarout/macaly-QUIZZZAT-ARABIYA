"use client";

import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  className?: string;
}

const adUnits = [
  "7352451765", // ADS1
  "8056009400", // ADS2  
  "3281344818", // ADS3
  "4240646223", // ADS4
  "2927564558", // ADS5
  "8342099801"  // ADS6
];

export function AdSense({ adSlot, className = "" }: AdSenseProps) {
  console.log('AdSense component rendering with slot:', adSlot);
  
  useEffect(() => {
    console.log('AdSense useEffect triggered for slot:', adSlot);
    const timeout = setTimeout(() => {
      try {
        console.log('Pushing ad for slot:', adSlot);
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { 
        console.error('AdSense error for slot', adSlot, ':', e); 
      }
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [adSlot]);

  return (
    <div className={`my-6 ${className}`}>
      <ins 
        className="adsbygoogle" 
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6865939387108271"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Multiple ads component for pages
export function AdSenseMultiple({ count = 6 }: { count?: number }) {
  console.log('Rendering multiple AdSense ads, count:', count);
  const selectedAdUnits = adUnits.slice(0, count);
  
  return (
    <>
      {selectedAdUnits.map((adSlot, index) => (
        <AdSense 
          key={`ad-${adSlot}-${index}`}
          adSlot={adSlot}
          className="animate-bounce-in"
        />
      ))}
    </>
  );
}

// Individual ad components for easy use
export const AdSense1 = () => <AdSense adSlot="7352451765" />;
export const AdSense2 = () => <AdSense adSlot="8056009400" />;
export const AdSense3 = () => <AdSense adSlot="3281344818" />;
export const AdSense4 = () => <AdSense adSlot="4240646223" />;
export const AdSense5 = () => <AdSense adSlot="2927564558" />;
export const AdSense6 = () => <AdSense adSlot="8342099801" />;

// Extend window object for TypeScript
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}