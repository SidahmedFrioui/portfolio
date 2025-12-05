import Line from "./Line";
import SectionTitle from "./SectionTitle";

const workData = [
    {
        company: "Youchoz",
        title: "Full Stack Developer",
        duration: "Aug 2024 – Present",
        tech: "Angular, React native, Firebase",
        highlights: [
            "Rebuilt entire website & authentication system, improving performance and maintainability",
            "Led complete UI redesign for modern, responsive experience",
            "Performed major code refactoring, optimizing scalability",
        ],
        logo: "/logo.png"
    },
    {
        company: "Sougplus",
        title: "Full Stack Developer (Freelance)",
        duration: "Nov 2024 – Feb 2025",
        tech: "Angular, NestJS, MySQL, Redis, Stripe, Firebase",
        highlights: [
            "Implemented full UI/UX design for marketplace platform",
            "Built backend APIs and real-time features (chat, cart, listings)",
            "Developed admin dashboard & storefront with SSR, optimizing speed and SEO"
        ],
        logo: "/sougplus.png"
    },
    {
        company: "Karabic",
        title: "Full Stack Developer (Freelance)",
        duration: "Sep 2025",
        tech: "Astro, Strapi",
        highlights: [
            "Architected and developed the entire blog platform with Astro for blazing-fast performance and SEO",
            "Designed clean UI/UX focused on readability and structured content presentation",
            "Integrated Strapi CMS with custom content types for easy article management",
            "Implemented dynamic routing, pagination, and author-based filtering",
            "Optimized metadata, sitemap, and OpenGraph tags for maximum search visibility"
        ],
        logo: "/karabic_logo.png"
    }
];

export default function WorkExperience() {
    return (
        <section className="py-16 relative">
            {/* Subtle ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 via-transparent to-transparent pointer-events-none" />

            <SectionTitle title="Work Experience" />
            <div className="flex flex-col gap-8 mt-12">
                {workData.map((job, idx) => (
                    <div
                        key={job.company}
                        className="group relative bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-900/40 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 hover:border-zinc-700/80 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 overflow-hidden"
                    >
                        {/* Subtle corner accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Sleek side indicator */}
                        <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative flex items-start gap-5">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src={job.logo}
                                    alt={job.company}
                                    className="relative h-14 w-14 rounded-xl object-cover ring-1 ring-zinc-800 group-hover:ring-zinc-700 transition-all duration-300"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-100 transition-colors duration-300">
                                            {job.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm tracking-wide">
                                            {job.company} <span className="text-zinc-600 mx-2">•</span> {job.duration}
                                        </p>
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-950/30 border border-blue-900/30 rounded-full mb-5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                    <p className="text-blue-300 text-xs font-medium tracking-wide">
                                        {job.tech}
                                    </p>
                                </div>

                                <ul className="space-y-3">
                                    {job.highlights.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed group/item"
                                        >
                                            <span className="text-zinc-600 group-hover/item:text-blue-500 transition-colors duration-300 mt-1 text-xs">▸</span>
                                            <span className="flex-1">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}