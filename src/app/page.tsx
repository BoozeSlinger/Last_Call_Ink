import dynamic from "next/dynamic";
import SidebarBlade from "@/components/SidebarBlade";
import BentoSection from "@/components/BentoSection";
import HomeBlogSection from "@/components/HomeBlogSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

// Performance Optimization: Dynamic import for heavy components with parallax/video
const HeroReveal = dynamic(() => import("@/components/HeroReveal"), {
  ssr: true,
  loading: () => <div className="h-screen bg-stark" />,
});

export default function Home() {
  return (
    <main className="relative bg-matte">
      <SidebarBlade />
      <HeroReveal />
      
      {/* The Proof (Projects) */}
      <BentoSection />
      
      {/* House Menu (Services + Testimonial Snippets) */}
      <ServicesSection />

      {/* Pull up a stool (Contact) */}
      <ContactSection />

      {/* Shift Notes (Blog) */}
      <HomeBlogSection />
      
      {/* Footer Standard */}
      <div className="pl-[60px] md:pl-[80px]">
        <footer className="py-20 px-8 border-t border-charcoal bg-matte">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-4xl font-display font-black text-stark/20 uppercase tracking-tighter">
              LAST CALL <br /> COLLECTIVE
            </div>
            <div className="text-center font-mono text-[10px] tracking-[0.4em] text-stone-600 uppercase">
              © 2024 / The House Standard
            </div>
            <a 
              href="mailto:contact@lastcall.co"
              className="font-mono text-[10px] tracking-widest text-stark border border-stark/20 px-8 py-4 uppercase hover:bg-stark hover:text-matte transition-all"
            >
              Inquiries
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
