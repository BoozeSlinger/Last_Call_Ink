import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";

export default function BlogIndex() {
  const posts = [
    {
      slug: "menu-engineering-ai",
      title: "Stop Uploading PDFs (How to Menu Engineer for the Robot Age)",
      excerpt: "To an AI, your PDF menu is just a flat image. Stop killing your SEO and start ranking for 'spicy dan dan noodles'.",
      date: "SHIFT NOTE #003",
      category: "TACTICS",
    },
    {
      slug: "zero-click-bar",
      title: "The Zero-Click Bar (Winning Customers Who Never Visit Your Site)",
      excerpt: "58% of searches end without a click. If you aren't optimizing your Google Business Profile, you're invisible.",
      date: "SHIFT NOTE #002",
      category: "STRATEGY",
    },
    {
      slug: "invisible-bar",
      title: "Why Your Bar is Invisible (Even if You're on Page One)",
      excerpt: "If the AI doesn't know your happy hour specials, do they even exist? The game has changed from clicks to answers.",
      date: "SHIFT NOTE #001",
      category: "THEORY",
    },
  ];

  return (
    <main className="relative min-h-screen bg-bone text-matte selection:bg-matte selection:text-bone">
      {/* Sidebar Navigation */}
      <SidebarBlade />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48">
        {/* Header */}
        <header className="mb-24">
          {/* Home Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 mb-12 font-mono text-[10px] tracking-widest uppercase text-matte/60 hover:text-amber-600 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-8xl md:text-[8rem] lg:text-[10rem] font-display font-black tracking-tighter leading-[0.8] mb-8 uppercase text-matte">
            Shift <br /> Notes
          </h1>
          <p className="text-xl md:text-2xl font-mono text-charcoal/60 max-w-2xl border-l-2 border-charcoal/20 pl-6">
            Logbook entries from the front lines of digital hospitality. Updates, theory, and the occasional rant.
          </p>
        </header>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block relative"
            >
              <article>
                <div className="border-b border-charcoal/20 pb-6 mb-6 flex justify-between items-end">
                    <span className="font-mono text-xs tracking-[0.2em] text-charcoal/60 uppercase">{post.date}</span>
                    <span className="font-mono text-xs tracking-widest bg-matte text-bone px-2 py-1 uppercase">{post.category}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-none mb-6 group-hover:opacity-60 transition-opacity uppercase">
                  {post.title}
                </h2>
                
                <p className="font-sans text-lg text-charcoal/80 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="font-mono text-sm tracking-widest uppercase border border-charcoal/20 inline-block px-6 py-3 group-hover:bg-matte group-hover:text-bone transition-colors">
                  Read Verification &rarr;
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
