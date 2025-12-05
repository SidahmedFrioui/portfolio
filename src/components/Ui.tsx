const uiProjects = [
    { image: "/ui.jpg", title: "Dashboard UI", description: "A responsive admin dashboard with charts and analytics.", tech: ["React", "Tailwind CSS"] },
    { image: "/ui1.jpg", title: "Landing Page", description: "Marketing page with modern animations and responsive layout.", tech: ["Next.js", "Framer Motion"] },
    { image: "/ui2.jpg", title: "Mobile App Design", description: "Flutter app screens focusing on usability and accessibility.", tech: ["Flutter"] },
    { image: "/ui3.jpg", title: "E-commerce UI", description: "Clean and intuitive product listings and checkout flow.", tech: ["Angular", "Tailwind CSS"] },
];

export default function Ui() {
    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">UI / UX Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {uiProjects.map((project) => (
                    <UiItem key={project.image} {...project} />
                ))}
            </div>
        </section>
    );
}

function UiItem({ image, title, description, tech }: { image: string; title: string; description: string; tech: string[] }) {
    return (
        <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
            <img src={image} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-3">{description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {tech.map((t) => (
                        <span key={t} className="text-black bg-green-400 text-xs font-medium px-2 py-1 rounded">{t}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
