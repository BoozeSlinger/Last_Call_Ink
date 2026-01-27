import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";

export default function Post_InvisibleBar() {
  return (
    <main className="relative min-h-screen bg-bone text-matte selection:bg-matte selection:text-bone">
      <SidebarBlade />

      <article className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48">
        
        {/* Post Header */}
        <header className="max-w-4xl mb-24">
            <div className="flex items-center gap-4 mb-8 font-mono text-xs tracking-[0.2em] text-charcoal/60 uppercase">
                <Link href="/blog" className="hover:text-black hover:underline">&larr; Back to Logbook</Link>
                <span>/</span>
                <span>Theory</span>
                <span>/</span>
                <span>2024-05-21</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter uppercase mb-12">
                Why Your Bar <br/> is Invisible
                <span className="block text-4xl md:text-5xl lg:text-6xl text-charcoal/40 mt-4 normal-case font-serif italic tracking-normal">
                    (Even if you're on Page One)
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
                        <li>The Hook</li>
                        <li>Death of the Click</li>
                        <li>The 3.6x Rule</li>
                        <li>Stop Being a Ghost</li>
                        <li>The Audit</li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-5 prose prose-xl prose-stone prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter prose-p:font-serif prose-p:text-charcoal/90">
                
                <p className="lead font-sans text-2xl md:text-3xl font-light text-charcoal leading-snug mb-12">
                    Start by acknowledging the grind. You’ve spent years perfecting your cocktail menu and fighting for that top spot on Google. But here’s the reality: the "top spot" just moved.
                </p>

                <p>
                    If someone asks their phone for the "best dive bar with a patio" and the AI doesn't mention you, you’re effectively closed for business to that customer. It doesn't matter if your Old Fashioned is award-winning if the algorithm hasn't tasted it.
                </p>

                <h2 className="text-5xl mt-16 mb-8">The Death of the Click</h2>
                <p>
                    Welcome to the <strong>Answer Engine Era</strong>.
                </p>
                <p>
                    Used to be, people searched "bars near me," clicked a blue link, and read a menu. Now? They ask ChatGPT, Gemini, or Perplexity. They don't want a list of links; they want an answer.
                </p>
                <p>
                    McKinsey data shows that 50% of people are already using AI to make buying decisions. It’s not about SEO links anymore; it’s about being the recommended answer. If you aren't fed into the LLM (Large Language Model), you don't exist in the conversation.
                </p>

                <h2 className="text-5xl mt-16 mb-8">The 3.6x Rule</h2>
                <p>
                    Why is "good enough" making you invisible? Because the gap between the winners and the background noise is widening.
                </p>
                <div className="my-12 border-y-2 border-charcoal/10 py-8 bg-white/50 px-8 not-prose">
                    <div className="grid grid-cols-2 gap-8 font-mono text-sm leading-relaxed">
                        <div>
                            <strong className="block uppercase tracking-widest text-xs opacity-50 mb-2">The Metric</strong>
                            <span className="block text-lg">Review Volume</span>
                        </div>
                        <div>
                            <strong className="block uppercase tracking-widest text-xs opacity-50 mb-2">Why AI Cares</strong>
                            <span className="block text-lg text-charcoal/70">AI needs "evidence of life" to trust you enough to recommend you.</span>
                        </div>
                        <div className="col-span-2 h-px bg-charcoal/10"></div>
                        <div>
                            <strong className="block uppercase tracking-widest text-xs opacity-50 mb-2">The Metric</strong>
                            <span className="block text-lg">Structured Data</span>
                        </div>
                        <div>
                            <strong className="block uppercase tracking-widest text-xs opacity-50 mb-2">Why AI Cares</strong>
                            <span className="block text-lg text-charcoal/70">If your menu is a PDF, the AI is blind to your best sellers.</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-5xl mt-16 mb-8">Stop Being an AI Ghost</h2>
                <p>
                    This is where we talk about <strong>GEO (Generative Engine Optimization)</strong>. It sounds fancy, but keep it casual—it’s just making sure the "robots" can read your menu as easily as your customers can.
                </p>
                
                <h3 className="text-3xl font-sans normal-case tracking-normal font-bold mt-12 mb-4">Three Things You Can Fix Tonight:</h3>
                <ul className="list-none pl-0 space-y-6">
                    <li className="pl-6 border-l-4 border-matte">
                        <strong>Check your robots.txt:</strong> Make sure you aren't accidentally blocking the AI crawlers. You'd be surprised how many sites have a "Keep Out" sign for the very bots trying to bring them customers.
                    </li>
                    <li className="pl-6 border-l-4 border-matte">
                        <strong>Update your attributes:</strong> If you have Wi-Fi or a heated patio, tell Google explicitly. The AI can't feel the heat lamps; you have to write it down.
                    </li>
                    <li className="pl-6 border-l-4 border-matte">
                        <strong>Respond to that 3-star review:</strong> AI looks for "active" owners. Silence looks like a closed business.
                    </li>
                </ul>

                <div className="mt-24 p-12 bg-matte text-bone rounded-lg not-prose relative overflow-hidden group">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-6">Is Your Bar <br/> Recommendable?</h2>
                        <p className="font-sans text-xl opacity-80 mb-8 max-w-xl">
                            Let's find out. Get the AI Visibility Audit. Think of it as a health check for your digital presence before the rush hits.
                        </p>
                        <a href="/contact" className="inline-block bg-bone text-matte font-mono text-sm tracking-widest uppercase px-8 py-4 hover:scale-105 transition-transform">
                            Get The Audit &rarr;
                        </a>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                </div>

            </div>
        </div>
      </article>
    </main>
  );
}
