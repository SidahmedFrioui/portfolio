import SectionTitle from "./SectionTitle";

const strengths = [
    { title: "Building from Scratch", icon: "/light-bulb.png", example: "Created scalable web & mobile apps end-to-end, including backend and frontend." },
    { title: "System Architecture", icon: "/blueprint.png", example: "Designed modular, maintainable codebases and scalable APIs for multiple projects." },
    { title: "Clean, Maintainable Code", icon: "/code.png", example: "Refactored legacy systems and optimized code for performance and readability." },
    { title: "UI/UX Design", icon: "/palette.png", example: "Crafted intuitive and responsive interfaces with animations and user-centric design." },
    { title: "Problem Solving & Growth", icon: "/biceps.png", example: "Tackle complex challenges outside comfort zone and adapt quickly to new tech." },
];

export default function Qualities() {
    return (
        <section className="py-16 bg-[#0c0a09] flex flex-col gap-12 relative overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10">
                <SectionTitle title="Core Strengths" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 relative z-10">
                {strengths.map((strength, index) => (
                    <StrengthItem key={strength.title} {...strength} index={index} />
                ))}
            </div>
        </section>
    );
}

function StrengthItem({ title, icon, example, index }: { title: string; icon: string; example: string; index: number }) {
    return (
        <div
            className="group relative flex flex-col items-center bg-[#121825] rounded-3xl p-8 gap-4 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
            }}
        >
            {/* Gradient border glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>

            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-gray-800 group-hover:border-[#2563eb]/50 transition-colors duration-300"></div>

            {/* Icon container with glow effect */}
            <div className="relative mb-2">
                {/* Icon glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/40 to-purple-500/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>

                {/* Icon background circle */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-full flex items-center justify-center border border-gray-700 group-hover:border-[#2563eb] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <img
                        src={icon}
                        alt={title}
                        className="w-10 h-10 transform transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Title */}
            <h3 className="text-white font-bold text-xl text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {title}
            </h3>

            {/* Divider line */}
            <div className="w-16 h-0.5 bg-gray-700 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-purple-500 transition-all duration-500 rounded-full"></div>

            {/* Example text */}
            <p className="text-gray-400 text-center text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {example}
            </p>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl pointer-events-none"></div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#2563eb] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}