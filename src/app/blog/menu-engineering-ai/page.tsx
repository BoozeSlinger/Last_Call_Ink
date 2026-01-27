import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";

export default function Post_MenuEngineering() {
  return (
    <main className="relative min-h-screen bg-bone text-matte selection:bg-matte selection:text-bone">
      <SidebarBlade />

      <article className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48">
        
        {/* Post Header */}
        <header className="max-w-4xl mb-24">
            <div className="flex items-center gap-4 mb-8 font-mono text-xs tracking-[0.2em] text-charcoal/60 uppercase">
                <Link href="/blog" className="hover:text-black hover:underline">&larr; Back to Logbook</Link>
                <span>/</span>
                <span>Tactics</span>
                <span>/</span>
                <span>2024-06-04</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter uppercase mb-12">
                Stop Uploading <br/> PDFs
                <span className="block text-4xl md:text-5xl lg:text-6xl text-charcoal/40 mt-4 normal-case font-serif italic tracking-normal">
                    (How to Menu Engineer for the Robot Age)
                </span>
            </h1>
        </header>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Table of Contents */}
            <div className="lg:col-span-3 hidden lg:block">
                <div className="sticky top-32 border-l border-charcoal/20 pl-6">
                    <p className="font-mono text-xs tracking-widest text-charcoal/50 uppercase mb-4">In this shift note</p>
                    <ul className="space-y-4 font-sans text-sm font-medium text-charcoal/80">
                        <li>The PDF Problem</li>
                        <li>Why Robots Hate Images</li>
                        <li>Structured Data Menus</li>
                        <li>The 'Dish Search' Fix</li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-5 prose prose-xl prose-stone prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter prose-p:font-serif prose-p:text-charcoal/90">
                
                {/* DIRECT ANSWER (The Snippet) */}
                <p className="lead font-sans text-2xl md:text-3xl font-light text-charcoal leading-snug mb-12 border-l-4 border-matte pl-6">
                    <strong>The Short Version:</strong> To an AI, a PDF menu is just a flat image. It cannot "read" the ingredients, prices, or dietary tags efficiently. To rank for "best steak frites near me," your menu must be <strong>HTML text</strong> marked up with Schema data. Stop creating digital dead ends.
                </p>

                <p>
                    We get it. The PDF ensures your branding is perfect. The fonts are right, the spacing is elegant, and the logo is perfectly centered. It looks great to a human sitting at a desktop computer in 2012.
                </p>
                <p>
                    But on a phone? It's a pinch-and-zoom nightmare. And to an AI crawler? It's a "Do Not Enter" sign.
                </p>

                <h2 className="text-5xl mt-16 mb-8">Why Robots Hate Images</h2>
                <p>
                    Search engines are text-processing machines. While Google Lens is getting smarter, relying on OCR (Optical Character Recognition) to sell your $25 cocktails is a gamble you shouldn&apos;t take.
                </p>
                <p>
                    When you upload a PDF:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Load Times Spike:</strong> Users on 4G have to download a 5MB file just to see if you have IPA on tap.</li>
                    <li><strong>No Keyword Data:</strong> Google doesn&apos;t easily index the text inside the image, meaning you don&apos;t rank for &quot;Wagyu Burger&quot; or &quot;Mezcal.&quot;</li>
                    <li><strong>Accessibility Fail:</strong> Screen readers for visually impaired users struggle with PDFs, which is a massive UX failure (and potential lawsuit).</li>
                </ul>

                <h2 className="text-5xl mt-16 mb-8">The &quot;Dish Search&quot; Revolution</h2>
                <p>
                    People don&apos;t just search for restaurants anymore; they search for cravings.
                </p>
                <p>
                   <em>&quot;Where can I get spicy dan dan noodles?&quot;</em><br/>
                   <em>&quot;Who has gluten-free pizza crust?&quot;</em>
                </p>
                <p>
                    If that data is locked in a PDF, the Answer Engine skips you. If it&apos;s in HTML text on your site, you win.
                </p>

                {/* TABLE FOR COMPARISON */}
                <div className="my-12 overflow-x-auto not-prose">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-matte">
                                <th className="py-4 font-mono uppercase tracking-widest text-sm text-charcoal/60">Feature</th>
                                <th className="py-4 font-mono uppercase tracking-widest text-sm text-charcoal/60">PDF Menu</th>
                                <th className="py-4 font-mono uppercase tracking-widest text-sm text-charcoal/60">HTML/Structured Menu</th>
                            </tr>
                        </thead>
                        <tbody className="font-sans">
                            <tr className="border-b border-charcoal/10">
                                <td className="py-4 font-bold">Searchability</td>
                                <td className="py-4 text-charcoal/70">Near Zero (Title only)</td>
                                <td className="py-4 text-matte bg-charcoal/5">High (Every Ingredient)</td>
                            </tr>
                            <tr className="border-b border-charcoal/10">
                                <td className="py-4 font-bold">Mobile UX</td>
                                <td className="py-4 text-charcoal/70">Pinch & Zoom Hell</td>
                                <td className="py-4 text-matte bg-charcoal/5">Responsive Flow</td>
                            </tr>
                            <tr className="border-b border-charcoal/10">
                                <td className="py-4 font-bold">Update Speed</td>
                                <td className="py-4 text-charcoal/70">Re-upload file every time</td>
                                <td className="py-4 text-matte bg-charcoal/5">Instant CMS Edit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-5xl mt-16 mb-8">How to Fix It</h2>
                <p>
                    You don&apos;t have to sacrifice aesthetics for function. That&apos;s a false choice.
                </p>

                <h3 className="text-3xl font-sans normal-case tracking-normal font-bold mt-12 mb-4">Step 1: Digitize Data</h3>
                <p>
                    Turn your menu into a structured format. If you use a modern POS (Toast, Square), you often have an API feed available. Use it.
                </p>

                <h3 className="text-3xl font-sans normal-case tracking-normal font-bold mt-12 mb-4">Step 2: Use &quot;Menu&quot; Schema</h3>
                <p>
                    Wrap your menu sections in Schema.org markup.
                </p>
                <pre className="bg-charcoal/5 p-4 rounded text-xs font-mono overflow-x-auto not-prose border border-charcoal/10">
{`{
  "@type": "Menu",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Cocktails",
      "hasMenuItem": ...
    }
  ]
}`}
                </pre>
                <p className="mt-4">
                    This tells Google exactly what everything is.
                </p>

                <h3 className="text-3xl font-sans normal-case tracking-normal font-bold mt-12 mb-4">Step 3: Keep a &quot;Print&quot; Button</h3>
                <p>
                    Old habits die hard. You can still keep a &quot;Download Menu&quot; button for the 5% of users (or event planners) who want it. But don&apos;t make it the default experience.
                </p>

                <div className="mt-24 p-12 bg-charcoal text-bone rounded-lg not-prose">
                    <h2 className="text-3xl font-display uppercase tracking-tighter mb-4">Is your menu invisible?</h2>
                    <p className="font-sans text-lg opacity-80 mb-6">
                        We build custom menu systems that look like art but read like data. Best of both worlds.
                    </p>
                    <a href="/contact" className="inline-block bg-bone text-matte font-mono text-sm tracking-widest uppercase px-8 py-4 hover:scale-105 transition-transform">
                        Digitize My Menu &rarr;
                    </a>
                </div>

            </div>
        </div>
      </article>
    </main>
  );
}
