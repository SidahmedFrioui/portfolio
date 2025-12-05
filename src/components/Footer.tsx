const images = [
    { src: "/next.png", alt: "Next.js" },
    { src: "/tailwind.svg", alt: "Tailwind CSS" },
];

export default function Footer() {
    return (
        <footer className="text-white py-12 px-4 bg-[#0c0a09] border-t border-white/10">

            <div className="text-center mb-6">
                <p className="text-xs tracking-widest text-gray-400">BUILT WITH</p>
            </div>

            <div className="flex items-center justify-center gap-8 mb-6">
                {images.map((image) => (
                    <img
                        key={image.alt}
                        src={image.src}
                        alt={image.alt}
                        className="w-10 h-10 opacity-80 hover:opacity-100 transition"
                    />
                ))}
            </div>

            <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Sidahmed Frioui — Crafted with precision, passion, and way too much coffee.
            </p>

            <p className="text-center text-xs mt-4 text-gray-600">
                All logos and trademarks belong to their respective owners.
            </p>
        </footer>
    );
}
