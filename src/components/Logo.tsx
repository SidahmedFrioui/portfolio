export const Logo = () => {
    return (
        <a href="/">
            <div className="group relative inline-block">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Logo content */}
                <h1 className="relative text-lg font-extrabold tracking-tight text-white flex items-center gap-1">
                    {/* Code brackets with animation */}
                    <span className="inline-flex items-center">
                        <span className="text-[#2563eb] text-2xl font-bold transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12 inline-block">
                            &lt;
                        </span>
                        <span className="text-[#2563eb] text-2xl font-bold transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 inline-block">
                            /&gt;
                        </span>
                    </span>

                    {/* Name with gradient on hover */}
                    <span className="ml-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        Sidahmed Frioui
                    </span>

                    {/* Animated cursor */}
                    <span className="inline-block w-0.5 h-5 bg-[#2563eb] ml-1 animate-pulse"></span>
                </h1>
            </div>
        </a>
    );
};