import SectionTitle from "./SectionTitle";

const projects = [
    {
        title: "NTIC Informatique",
        description: "Online store for selling IT products.",
        role: "Full Stack",
        tech: "Nextjs(StoreFront), Svelte(Admin), Nestjs(Backend), PostgresSQL",
        image: "/projects/ntic-informatique.jpg",
        link: "https://nticinformatique.com"
    },
    {
        title: "Buyini",
        description: "A full ERP webapp with AI features.",
        role: "Full Stack",
        tech: "React(Frontend/Admin), Astro(Landing Page), Nestjs(Backend), PostgresSQL",
        image: "/projects/buyini.jpg",
        link: "https://buyini.com"
    },
    {
        title: "Sougplus",
        description: "A marketplace for buying and selling products.",
        role: "Full Stack",
        tech: "Angular, Nestjs, MySQL",
        image: "/projects/sougplus.png",
        link: "https://www.sougplus.com/"
    },
    {
        title: "Ecoguard",
        description: "Frontend platform to monitor wildfire detection devices in real-time.",
        role: "Full Stack",
        tech: "Angular, Nestjs, MySQL, WebSockets",
        image: "/projects/ecoguard.png",
        link: "https://ecoguard-8eb48.web.app"
    },
    {
        title: "Admin Dashboard",
        description: "Dashboard for managing home service professionals app.",
        role: "Frontend",
        tech: "Angular, PrimeNG",
        image: "/projects/admin-dashboard.png",
        link: "https://profinder-c46e0.web.app"
    },
    {
        title: "Eartisan",
        description: "Mobile app for home service professionals.",
        role: "Mobile",
        tech: "Flutter, Firebase",
        image: "/projects/eartisan1-portrait.png",
        link: "#"
    }
]

export default function WorkSection() {
    return (
        <section className="py-16" id="work">
            <SectionTitle title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}

function ProjectItem({ title, description, role, tech, image, link }: {
    title: string;
    description: string;
    role: string;
    tech: string;
    image: string;
    link?: string;
}) {
    return (
        <div className="rounded-3xl relative group overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

            {/* Card wrapper */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-gray-800 group-hover:border-transparent transition-all duration-300">
                {/* Image with zoom effect */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 flex flex-col justify-end">
                    {/* Role badge */}
                    <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#2563eb] to-purple-600 rounded-full text-xs font-semibold text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                        {role}
                    </span>

                    {/* Title with glow effect */}
                    <h3 className="text-2xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:translate-x-1 group-hover:text-shadow-glow">
                        {title}
                    </h3>

                    {/* Tech stack */}
                    <p className="text-gray-300 text-sm mb-2 line-clamp-1 transition-colors duration-300 group-hover:text-gray-200">
                        {tech}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-3 transition-colors duration-300 group-hover:text-gray-300">
                        {description}
                    </p>

                    {/* Link with arrow animation */}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#3b82f6] font-semibold transition-all duration-300 group-hover:gap-3"
                        >
                            <span>View Project</span>
                            <svg
                                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    )}
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
        </div>
    );
}