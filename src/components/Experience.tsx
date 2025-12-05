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
        <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Work Experience</h2>
            <div className="flex flex-col gap-12">
                {workData.map((job) => (
                    <div key={job.company} className="bg-[#292524] p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
                        <div className="flex items-center mb-4">
                            <img src={job.logo} alt={job.company} className="h-12 w-12 rounded-md" />
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                <p className="text-gray-400 text-sm">{job.company} • {job.duration}</p>
                                <p className="text-[#2563eb] text-sm mt-1">{job.tech}</p>
                            </div>
                        </div>
                        <ul className="mt-4 list-disc list-inside text-gray-300">
                            {job.highlights.map((item, idx) => (
                                <li key={idx} className="mb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
