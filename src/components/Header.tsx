const headerData = {
    title: "I'm Sidahmed Frioui — Full Stack Developer",
    description: "I build scalable, high-performance web applications with clean, maintainable code. Passionate about UI effects, animations, and intuitive user experiences."
};

export default function Header() {
    return (
        <header className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh] relative">
            {/* Animated background gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Content container */}
            <div className="max-w-xl text-center md:text-left relative z-10">
                {/* Title with gradient and animation */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    <span className="inline-block animate-fade-in-up bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                        {headerData.title.split(' ').map((word, i) => (
                            <span
                                key={i}
                                className="inline-block mr-2"
                                style={{
                                    animationDelay: `${i * 0.1}s`,
                                    animation: 'fadeInUp 0.6s ease-out both'
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </span>
                </h1>

                {/* Description with subtle animation */}
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    {headerData.description}
                </p>

                {/* CTA Buttons with enhanced effects */}
                <div className="flex justify-center md:justify-start gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                    {/* Primary CTA */}
                    <a
                        href="mailto:frioui.sidahmed19@gmail.com"
                        className="group relative overflow-hidden bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95"
                    >
                        {/* Button shimmer */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        <span className="relative flex items-center gap-2">
                            Hire me
                            <svg
                                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                    </a>

                    {/* Secondary CTA */}
                    <a
                        href="#work"
                        className="group relative overflow-hidden border-2 border-[#2563eb] hover:border-[#3b82f6] text-[#2563eb] hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        {/* Fill on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        <span className="relative flex items-center gap-2">
                            See My Work
                            <svg
                                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-y-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            {/* Profile image with enhanced animation */}
            <div className="relative w-64 md:w-80 mb-10 md:mb-0 opacity-0 animate-fade-in z-10" style={{ animationDelay: '0.3s' }}>
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

                {/* Image with float animation */}
                <img
                    src="/retro.png"
                    alt="Profile"
                    className="relative w-full h-auto animate-float drop-shadow-2xl"
                />
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out both;
                }
                
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out both;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </header>
    );
}