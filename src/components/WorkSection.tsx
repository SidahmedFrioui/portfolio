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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="rounded-3xl relative group border-2 border-transparent hover:border-[#2563eb] transition-all duration-300 overflow-hidden">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-3xl" />

            <div className="absolute inset-0 bg-black bg-opacity-80 p-6 flex flex-col justify-end rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                <p className="text-[#2563eb] text-sm mb-2">{role}</p>
                <p className="text-gray-300 text-sm mb-2">{tech}</p>
                <p className="text-white text-sm mb-2">{description}</p>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 text-[#2563eb] hover:text-[#2563eb]/80 font-medium">
                        View Project →
                    </a>
                )}
            </div>
        </div>
    );
}
