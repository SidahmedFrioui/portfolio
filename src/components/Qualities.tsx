const qualities = [
    { description: "Building stuff from scratch", icon: "/light-bulb.png" },
    { description: "Architecture and big picture stuff", icon: "/blueprint.png" },
    { description: "Clean code that's enjoyable to work with", icon: "/code.png" },
    { description: "Designing and implementing beautiful UI", icon: "/palette.png" },
    { description: "Working outside the comfort zone", icon: "/relax.png" },
    { description: "Having a strong grasp of core CS concepts", icon: "/biceps.png" },
];

export default function Qualities() {
    return (
        <section className="relative rounded-3xl py-16 px-8 flex flex-col gap-8 items-start bg-[url('/skills-bg.png')] bg-cover bg-center bg-gray-900">
            <div className="absolute inset-0 bg-black rounded-3xl bg-opacity-80"></div>
            <div className="relative z-10 text-white w-full">
                <h2 className="text-3xl font-bold mb-4">Maker at heart.</h2>
                <p className="text-blue-400 text-xl mb-8">What I love doing</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {qualities.map((quality) => (
                        <QualityItem key={quality.description} {...quality} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function QualityItem({ description, icon }: { description: string; icon: string }) {
    return (
        <div className="flex flex-col items-center justify-between p-4 w-full max-w-48 bg-[#1d4d67] bg-opacity-50 rounded-3xl gap-2">
            <img src={icon} alt={description} className="w-16 h-16" />
            <p className="text-white text-center text-sm font-medium max-w-2xl">{description}</p>
        </div>
    );
}
