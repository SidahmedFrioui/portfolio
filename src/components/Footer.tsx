const images = [
    { src: "/next.png", alt: "Next.js" },
    { src: "/tailwind.svg", alt: "Tailwind CSS" },
];

export default function Footer() {
    return (
        <footer className="relative text-white py-12 px-4 bg-[#0c0a09] border-t border-white/10 overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Built with section */}
                <div className="text-center mb-8">
                    <p className="text-xs tracking-widest text-gray-500 mb-6 font-semibold flex items-center justify-center gap-2">
                        <span className="w-8 h-px bg-gradient-to-r from-transparent to-gray-600"></span>
                        BUILT WITH
                        <span className="w-8 h-px bg-gradient-to-l from-transparent to-gray-600"></span>
                    </p>

                    {/* Tech stack icons */}
                    <div className="flex items-center justify-center gap-6">
                        {images.map((image, index) => (
                            <div
                                key={image.alt}
                                className="group relative"
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-[#2563eb]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>

                                {/* Icon container */}
                                <div className="relative w-14 h-14 bg-gray-800/50 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-[#2563eb] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                {/* Tooltip */}
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700">
                                    {image.alt}
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 border-r border-b border-gray-700 rotate-45"></span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

                {/* Copyright text */}
                <p className="text-center text-sm text-gray-400 mb-4 leading-relaxed">
                    © {new Date().getFullYear()} <span className="text-white font-semibold">Sidahmed Frioui</span> — Crafted with precision, passion, and way too much{" "}
                    <span className="inline-block animate-bounce">☕</span> coffee.
                </p>

                {/* Disclaimer */}
                <p className="text-center text-xs text-gray-600">
                    All logos and trademarks belong to their respective owners.
                </p>
            </div>
        </footer>
    );
}

