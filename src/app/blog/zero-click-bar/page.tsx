import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";
import Footer from "@/components/Footer";

export default function Post_ZeroClick() {
  return (
    <main className="relative min-h-screen bg-bone text-matte selection:bg-matte selection:text-bone">
      <SidebarBlade />

      <article className="max-w-[1400px] mx-auto pl-[60px] md:pl-[120px] pr-6 md:pr-12 py-16 md:py-20">
        
        {/* Post Header */}
        <header className="max-w-4xl mb-24">
            <div className="flex items-center gap-4 mb-8 font-mono text-xs tracking-[0.2em] text-charcoal/60 uppercase">
                <Link href="/" className="inline-flex items-center gap-2 hover:text-amber-600 transition-colors group">
                  <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-amber-600 transition-colors">&larr; Logbook</Link>
                <span>/</span>
                <span>Strategy</span>
                <span>/</span>
                <span>2024-05-28</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter uppercase mb-12">
                The Zero-Click <br/> Bar
                <span className="block text-4xl md:text-5xl lg:text-6xl text-charcoal/40 mt-4 normal-case font-serif italic tracking-normal">
                    (Winning Customers Who Never Visit Your Site)
                </span>
            </h1>
        </header>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Table of Contents area equivalent */}
            <div className="lg:col-span-3 hidden lg:block">
                <div className="sticky top-32 border-l border-charcoal/20 pl-6">
                    <p className="font-mono text-xs tracking-widest text-charcoal/50 uppercase mb-4">In this shift note</p>
                    <ul className="space-y-4 font-sans text-sm font-medium text-charcoal/80">
                        <li>The New Front Door</li>
                        <li>What is Zero-Click?</li>
                        <li>The Trust Gap</li>
                        <li>Optimization Checklist</li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-5 prose prose-xl prose-stone prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter prose-p:font-serif prose-p:text-charcoal/90">
                
                {/* DIRECT ANSWER (The Snippet) */}
                <p className="lead font-sans text-2xl md:text-3xl font-light text-charcoal leading-snug mb-12 border-l-4 border-matte pl-6">
                    <strong>The Hard Truth:</strong> Your website is no longer the front door. 58% of searches now end without a click because Google (and AI) serves the answer directly on the results page. To win, you must optimize your <strong>Google Business Profile</strong> and <strong>Structured Data</strong> to be the answer, not just a link.
                </p>

                <p>
                    You spent five grand on a website that looks slick, loads fast, and tells your story. But if the potential guest finds your hours, checks your menu, scans your vibe check (photos), and books a table—all without leaving Google Search—did your website even matter?
                </p>
                <p>
                    This is the <strong>Zero-Click Reality</strong>. It&apos;s not fair, but it&apos;s how the internet works in 2026.
                </p>

                <h2 className="text-5xl mt-16 mb-8">What exactly is a &quot;Zero-Click&quot; Search?</h2>
                <p>
                    A Zero-Click search happens when a user&apos;s query is answered directly on the Search Engine Results Page (SERP). Think about the last time you checked the weather or a sports score. You didn&apos;t click a link to &quot;weather.com&quot;—you just looked at the card Google showed you.
                </p>
                <p>
                    For bars, this looks like:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>&quot;What time does The Broken Shaker close?&quot; (Hours Snippet)</li>
                    <li>&quot;Best rooftop bar happy hour&quot; (Local Pack Map View)</li>
                    <li>&quot;Does Death &amp; Co have reservations?&quot; (Reserve with Google button)</li>
                </ul>
                <p>
                    In all these cases, the customer got what they needed and converted (visited or booked) without ever seeing your carefully crafted homepage.
                </p>

                <h2 className="text-5xl mt-16 mb-8">The 60% Void</h2>
                <p>
                    We&apos;re seeing a massive shift in user behavior. Users trust the platform (Google/Apple Maps/ChatGPT) more than individual websites.
                </p>

                {/* TABLE FOR COMPARISON area equivalent */}
                <div className="my-12 overflow-x-auto not-prose">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-matte">
                                <th className="py-4 font-mono uppercase tracking-widest text-sm text-charcoal/60">Touchpoint</th>
                                <th className="py-4 font-mono uppercase tracking-widest text-sm text-charcoal/60">Digital Era (2015)</th>
                                <th className="py-4 font-mono uppercase tracking-widest text-sm text-charcoal/60">AI Era (2026)</th>
                            </tr>
                        </thead>
                        <tbody className="font-sans">
                            <tr className="border-b border-charcoal/10">
                                <td className="py-4 font-bold">Primary Interaction</td>
                                <td className="py-4 text-charcoal/70">Homepage Visit</td>
                                <td className="py-4 text-matte bg-charcoal/5">Entity Card (GBP/Map)</td>
                            </tr>
                            <tr className="border-b border-charcoal/10">
                                <td className="py-4 font-bold">Menu Browsing</td>
                                <td className="py-4 text-charcoal/70">PDF Download</td>
                                <td className="py-4 text-matte bg-charcoal/5">Structured &quot;Dish&quot; Results</td>
                            </tr>
                            <tr className="border-b border-charcoal/10">
                                <td className="py-4 font-bold">Conversion Speed</td>
                                <td className="py-4 text-charcoal/70">3-5 Minutes</td>
                                <td className="py-4 text-matte bg-charcoal/5">15-30 Seconds</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-5xl mt-16 mb-8">How to Engineer Your Presence</h2>
                <p>
                    If you can&apos;t force them to click, you have to force the platform to represent you correctly. This is <strong>Entity Optimization</strong>.
                </p>

                <h3 className="text-3xl font-sans normal-case tracking-normal font-bold mt-12 mb-4">1. Feed the Beast (Google Business Profile)</h3>
                <p>
                    Your GBP is your new homepage. Period.
                </p>
                <ul className="list-none pl-0 space-y-4">
                    <li className="flex items-start gap-4">
                        <span className="font-bold text-xl text-matte">01</span>
                        <span><strong>Upload High-Res Vibes:</strong> Google uses AI vision to tag your photos. If you upload a dark, blurry photo, it tags it &quot;Nightclub&quot; or &quot;Undefined.&quot; Upload a crisp shot of a burger? It tags &quot;Food&quot; and &quot;Dinner.&quot;</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-bold text-xl text-matte">02</span>
                        <span><strong>Q&amp;A Section:</strong> Don&apos;t wait for questions. Post your own FAQs. &quot;Do you have gluten-free beer?&quot; &quot;Yes, we carry...&quot; This feeds the voice search answers directly.</span>
                    </li>
                </ul>

                <h3 className="text-3xl font-sans normal-case tracking-normal font-bold mt-12 mb-4">2. Schema Markup is Non-Negotiable</h3>
                <p>
                    This is the hidden code that tells robot crawlers exactly what you are. Without it, you&apos;re just text on a screen. With it, you are a defined entity with <strong>OperatingHours</strong>, <strong>priceRange</strong>, and <strong>servesCuisine</strong> attributes.
                </p>
                <p>
                    <strong>Bold Statement:</strong> If you don&apos;t have <code className="bg-charcoal/10 px-2 py-1 rounded text-sm">LocalBusiness</code> schema on your site, you are voluntarily hiding from 20% of local searches.
                </p>

                <div className="mt-24 p-12 border border-charcoal/20 rounded-lg not-prose">
                    <h2 className="text-3xl font-display uppercase tracking-tighter mb-4">Don&apos;t guess. Check properly.</h2>
                    <p className="font-sans text-lg opacity-80 mb-6">
                        Most &quot;SEO Experts&quot; still obsess over keywords. We obsess over Entities. Let&apos;s see if your digital passport is stamped correctly.
                    </p>
                    <a href="/contact" className="inline-block bg-matte text-bone font-mono text-sm tracking-widest uppercase px-8 py-4 hover:opacity-90 transition-opacity">
                        Book An Entity Audit &rarr;
                    </a>
                </div>

            </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
