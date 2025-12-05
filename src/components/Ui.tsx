import SectionTitle from "./SectionTitle";

const uiProjects = [
    { image: "/ui.jpg", title: "Go Fit", description: "A clean and energetic mobile fitness experience." },
    { image: "/ui1.jpg", title: "N'TIC", description: "A modern ecommerce interface built for speed and clarity." },
    { image: "/ui2.jpg", title: "Quikifa", description: "A stylish women’s fashion store with smooth browsing flows." },
    { image: "/ui3.jpg", title: "EVA", description: "Elegant UI for a high-end women’s boutique." },
    { image: "/ui4.jpg", title: "Buyini Landing Page", description: "A professional SaaS landing page designed to convert." },
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
            <SectionTitle title="UI / UX Showcase" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
                {uiProjects.map((project) => (
                    <UiItem key={project.image} {...project} />
                ))}
            </div>
        </section>
    );
}

function UiItem({ image, title, description }: { image: string; title: string; description: string }) {
    return (
        <div className="relative group rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1">
            {/* Animated gradient border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>

            {/* Card container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
                    />
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Hover overlay with enhanced effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-center items-center text-center">
                    {/* Title with slide-up animation */}
                    <h3 className="text-white text-2xl font-bold mb-3 tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {title}
                    </h3>

                    {/* Description with slide-up animation */}
                    <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {description}
                    </p>

                    {/* Enhanced preview button */}
                    <button
                        className="relative overflow-hidden bg-gradient-to-r from-[#2563eb] to-[#2563eb] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 hover:scale-105 active:scale-95"
                        onClick={() => window.open(image, '_blank')}
                    >
                        {/* Button shimmer effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        <span className="relative flex items-center gap-2">
                            Preview
                            <svg
                                className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-45"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Card shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
        </div>
    );
}