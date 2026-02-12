"use client";

import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CraftBeers from "./CraftBeers";
import Events from "./Events";
import BeerClub from "./BeerClub";
import Story from "./Story";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

interface LocationPageProps {
  location: string;
}

export default function LocationPage({ location }: LocationPageProps) {
  const isTemecula = location.toLowerCase() === "temecula";
  const brandColor = isTemecula ? "#6c0988" : "#a0c514";
  
  // Image mappings
  const heroImage = isTemecula ? "/images/gallery/bs1.webp" : "/images/gallery/bsfullerton.webp";
  const storyImages = isTemecula 
    ? ["/images/gallery/bs7.webp", undefined, "/images/gallery/bs2.webp"] 
    : ["/images/gallery/bs7.webp", undefined, "/images/gallery/bs13.webp"];
  
  const clubImage = isTemecula 
    ? "/images/gallery/bs3.webp" 
    : "/images/gallery/bs5.webp";
  
  // We can use the extra images (bs10 for Fullerton) in other components or sections
  const extraSectionImage = !isTemecula ? "/images/gallery/bs10.webp" : undefined;

  return (
    <div className={`bg-black min-h-screen text-white selection:bg-[${brandColor}] selection:text-black scroll-smooth`}>
      <Navbar accentColor={brandColor} />
      <Hero location={location} image={heroImage} accentColor={brandColor} />
      <Story images={storyImages as string[]} />
      
      {/* Background container for some sections if needed */}
      <div className="relative">
        {extraSectionImage && (
          <div className="absolute inset-x-0 top-0 h-[500px] opacity-10 grayscale pointer-events-none">
            <img src={extraSectionImage} className="w-full h-full object-cover" alt="" />
          </div>
        )}
        <CraftBeers accentColor={brandColor} />
      </div>

      <Events accentColor={brandColor} />
      <BeerClub accentColor={brandColor} bgImage={clubImage} />
      <Gallery accentColor={brandColor} />
      <Contact accentColor={brandColor} />
      <Footer accentColor={brandColor} currentLocation={location} />
    </div>
  );
}
