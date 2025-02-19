const images = [
    { src: "/next.png", alt: "Next.js" },
    { src: "/tailwind.svg", alt: "Tailwind CSS" },
]

export default function Footer() {
    return (
        <footer className="text-white py-8 px-4 bg-[#0c0a09]">
            <p className="text-center text-sm">MADE WITH</p>
            <div className="flex flex-row items-center justify-center gap-4 my-8">
                {images.map((image) => (
                    <img key={image.alt} src={image.src} alt={image.alt} className="w-12 h-12" />
                ))}
            </div>
            <p className="text-center text-sm">All logos, trademarks, and brandnames are the property of their respective owners.</p>
        </footer>
    );
}
