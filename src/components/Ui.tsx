const uiProjects = [
    { image: "/ui.jpg", title: "Go Fit", description: "A clean and energetic mobile fitness experience." },
    { image: "/ui1.jpg", title: "N'TIC", description: "A modern ecommerce interface built for speed and clarity." },
    { image: "/ui2.jpg", title: "Quikifa", description: "A stylish women’s fashion store with smooth browsing flows." },
    { image: "/ui3.jpg", title: "EVA", description: "Elegant UI for a high-end women’s boutique." },
    { image: "/ui4.jpg", title: "Buyini Landing", description: "A professional SaaS landing page designed to convert." },
    { image: "/ui5.jpg", title: "NTIC Informatique", description: "A tech-focused storefront with clean product grids." },
    { image: "/ui6.jpg", title: "Buyini App", description: "A full ERP webapp with dashboard-first UX." },
    {
        image: "/ui7.jpg",
        title: "Ecommerce Dashboard",
        description: "A dashboard-first experience focused on clarity, workflow speed, and intuitive data access."
    }
];

export default function Ui() {
    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
                UI / UX Showcase
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {uiProjects.map((project) => (
                    <UiItem key={project.image} {...project} />
                ))}
            </div>
        </section>
    );
}

function UiItem({ image, title, description }: { image: string; title: string; description: string }) {
    return (
        <div className="relative group rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/10">

            <img
                src={image}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                    {title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-4">
                    {description}
                </p>

                {/* THE PREVIEW BUTTON */}
                <button
                    className="mt-2 bg-white text-black font-semibold px-4 py-2 rounded-full text-sm shadow-md hover:bg-gray-200 transition"
                    onClick={() => window.open(image, '_blank')}
                >
                    Preview
                </button>
            </div>
        </div>
    );
}
