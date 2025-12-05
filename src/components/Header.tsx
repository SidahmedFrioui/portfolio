const headerData = {
    title: "I’m Sidahmed Frioui — Full Stack Developer",
    description: "I build scalable, high-performance web applications with clean, maintainable code. Passionate about UI effects, animations, and intuitive user experiences."
};

export default function Header() {
    return (
        <header className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh]">

            <div className="max-w-xl text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {headerData.title}
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                    {headerData.description}
                </p>

                <div className="flex justify-center md:justify-start gap-4">
                    <a href="#work" className="bg-[#2563eb] hover:bg-[#2563eb]/80 text-black font-bold py-2 px-6 rounded transition">
                        See My Work
                    </a>
                    <a href="#contact" className="border border-[#2563eb] hover:border-[#2563eb]/80 text-[#2563eb] hover:text-[#2563eb]/80 font-bold py-2 px-6 rounded transition">
                        Contact Me
                    </a>
                </div>
            </div>

            <img src="/retro.png" alt="Profile" className="w-64 md:w-80 mb-10 md:mb-0 animate-bounce" />
        </header>
    );
}