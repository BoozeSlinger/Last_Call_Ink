"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const eventDetails = [
  { day: 10, title: "Fullerton Events", time: "5 PM - 8 PM", color: "#a0c514" },
  { day: 15, title: "Temecula Events", time: "6 PM - 9 PM", color: "#6c0988" },
  { day: 22, title: "Fullerton Events", time: "5 PM - 8 PM", color: "#a0c514" },
  { day: 24, title: "Temecula Events", time: "6 PM - 9 PM", color: "#6c0988" },
  { day: 28, title: "Quiz Night", time: "7 PM", color: "#a0c514" },
];

interface EventsProps {
  accentColor?: string;
}

export default function Events({ accentColor = "#a0c514" }: EventsProps) {
  const days = Array.from({ length: 35 }, (_, i) => i - 2); // Simulating October 2024 calendar start

  return (
    <section id="events" className="py-32 bg-black px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[120px] rounded-full pointer-events-none" 
        style={{ backgroundColor: `${accentColor}10` }}
      />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <span 
            className="font-sans font-black text-xs uppercase tracking-[0.8em] mb-4 block"
            style={{ color: accentColor }}
          >
            The Schedule
          </span>
          <h2 className="text-white font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">
            UPCOMING <br /> EVENTS
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass overflow-hidden rounded-[2rem] foundry-border">
            {/* Calendar Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-6">
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition-all">
                  <ChevronLeft size={24} className="text-white" />
                </button>
                <div className="text-white font-display font-black text-3xl uppercase tracking-widest">
                  October 2024
                </div>
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition-all">
                  <ChevronRight size={24} className="text-white" />
                </button>
              </div>
              <div className="hidden md:flex gap-4">
                <button 
                  className="px-6 py-2 text-black font-display font-black text-xs uppercase tracking-widest rounded-full"
                  style={{ backgroundColor: accentColor }}
                >
                  Today
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 border-collapse relative">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-4 text-center border-b border-r border-white/10 bg-white/10 text-white/40 font-sans font-black text-[10px] uppercase tracking-[0.3em]">
                  {day}
                </div>
              ))}
              
              {days.map((dayNum, i) => {
                const isCurrentMonth = dayNum > 0 && dayNum <= 31;
                const events = eventDetails.filter(e => e.day === dayNum);
                
                return (
                  <div 
                    key={i} 
                    className={`min-h-[160px] p-4 border-b border-r border-white/10 transition-all hover:bg-white/5 group relative
                      ${!isCurrentMonth ? 'bg-black/40' : 'bg-transparent'}
                    `}
                  >
                    <span className={`font-display font-black text-lg ${isCurrentMonth ? 'text-white/20 group-hover:text-lime-primary' : 'text-white/5'}`}>
                      {dayNum > 0 && dayNum <= 31 ? dayNum : ""}
                    </span>
                    
                    <div className="mt-4 space-y-2">
                      {events.map((event, idx) => (
                        <div 
                          key={idx}
                          className="p-2 rounded-lg text-[10px] font-sans font-black uppercase tracking-tighter leading-tight border-l-4 shadow-xl"
                          style={{ 
                            backgroundColor: `${event.color}20`, 
                            borderColor: event.color,
                            color: event.color
                          }}
                        >
                          <div className="mb-0.5">{event.title}</div>
                          <div className="opacity-60">{event.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
