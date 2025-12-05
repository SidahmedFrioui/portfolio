const strengths = [
    { title: "Building from Scratch", icon: "/light-bulb.png", example: "Created scalable web & mobile apps end-to-end, including backend and frontend." },
    { title: "System Architecture", icon: "/blueprint.png", example: "Designed modular, maintainable codebases and scalable APIs for multiple projects." },
    { title: "Clean, Maintainable Code", icon: "/code.png", example: "Refactored legacy systems and optimized code for performance and readability." },
    { title: "UI/UX Design", icon: "/palette.png", example: "Crafted intuitive and responsive interfaces with animations and user-centric design." },
    { title: "Problem Solving & Growth", icon: "/biceps.png", example: "Tackle complex challenges outside comfort zone and adapt quickly to new tech." },
];

export default function Qualities() {
    return (
        <section className="py-16 bg-[#0c0a09] flex flex-col gap-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Core Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {strengths.map((strength) => (
                    <StrengthItem key={strength.title} {...strength} />
                ))}
            </div>
        </section>
    );
}

function StrengthItem({ title, icon, example }: { title: string; icon: string; example: string }) {
    return (
        <div className="flex flex-col items-center bg-[#121825] rounded-3xl p-6 gap-4 hover:shadow-lg transition-shadow duration-300">
            <img src={icon} alt={title} className="w-16 h-16" />
            <h3 className="text-white font-semibold text-lg text-center">{title}</h3>
            <p className="text-gray-300 text-center text-sm">{example}</p>
        </div>
    );
}
