import Link from "next/link";

export default function HomeBlogSection() {
    const latestPosts = [
        {
            title: "Stop Uploading PDFs",
            subtitle: "Menu Engineering", 
            slug: "menu-engineering-ai",
            tag: "TACTICS"
        },
        {
            title: "The Zero-Click Bar",
            subtitle: "Answer Engine Optimization",
            slug: "zero-click-bar", 
            tag: "STRATEGY"
        },
        {
            title: "Why Your Bar is Invisible",
            subtitle: "Local SEO Theory",
            slug: "invisible-bar",
            tag: "THEORY"
        }
    ];

    return (
        <section className="bg-bone text-matte py-10 px-6 md:px-12 border-t border-charcoal/10">
            <div className="max-w-[1400px] mx-auto">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-4">
                    <h2 className="text-3xl md:text-4xl font-display font-black tracking-tighter leading-[0.8] uppercase text-matte">
                        Shift Notes
                    </h2>
                    <div className="mt-3 md:mt-0 max-w-sm">
                        <p className="font-mono text-[10px] tracking-widest text-charcoal/60 uppercase mb-2 leading-relaxed">
                            Logbook entries from the front lines of digital hospitality.
                        </p>
                        <Link href="/blog">
                             <span className="inline-block border border-charcoal px-6 py-3 font-mono text-[10px] tracking-[0.2em] uppercase hover:bg-matte hover:text-bone transition-colors cursor-pointer">
                                Read The Logbook
                             </span>
                        </Link>
                    </div>
                </div>

                {/* Posts Ticker / List */}
                <div className="border-t border-charcoal/20">
                    {latestPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                            <div className="py-4 border-b border-charcoal/20 flex flex-col md:flex-row items-baseline justify-between hover:bg-white/50 transition-colors px-4 -mx-4">
                                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/40 mb-4 md:mb-0 w-32">
                                    {post.tag}
                                </span>
                                
                                <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                                    {post.title}
                                </h3>
                                
                                <span className="hidden md:block font-serif italic text-charcoal/50 text-base group-hover:text-charcoal transition-colors">
                                    ({post.subtitle})
                                </span>

                                <span className="md:hidden mt-4 text-xs font-mono uppercase underline">Read Entry</span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
