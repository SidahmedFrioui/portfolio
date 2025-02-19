const projects = [
    {
        title: "Sougplus",
        description: "A listings/marketplace for buying and selling products",
        image: "/projects/sougplus.png",
        link: "https://www.sougplus.com/"
    },
    {
        title: "Ecoguard",
        description: "A frontend platform for monitoring wildfire detection devices",
        image: "/projects/ecoguard.png",
        link: "https://ecoguard-8eb48.web.app"
    },
    {
        title: "Admin Dashboard",
        description: "Admine dashboard for managing home service professionals app",
        image: "/projects/admin-dashboard.png",
        link: "https://profinder-c46e0.web.app"
    },
    {
        title: "Eartisan",
        description: "A home service professionals mobile app",
        image: "/projects/eartisan1-portrait.png"
    }
]

export default function WorkSection() { 
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectItem key={project.title} {...project} />
                    ))}
                </div>
        </section>
    );
}

function ProjectItem({ title, description, image, link }: {
    title: string;
    description: string;
    image: string;
    link?: string;
}) {
    return (
        <div className="rounded-3xl relative group border-2 border-transparent hover:border-blue-500 transition-all duration-300">
            <div className="rounded-3xl overflow-hidden">
                <img 
                    src={image} 
                    alt={title}
                    className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black rounded-3xl bg-opacity-80 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-white">{description}</p>
                    {link && (
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 text-blue-300 hover:text-blue-400"
                        >
                            View Project →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
