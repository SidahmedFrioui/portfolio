import Line from "./Line";
import SectionTitle from "./SectionTitle";

const coreSkills = [
    { title: "Frontend", icon: "/palette.png", tags: ["React", "Angular", "UI/UX"] },
    { title: "Backend", icon: "/backend.png", tags: ["NestJS", "Express", "Node.js", "TypeScript"] },
];

const secondarySkills = [
    { title: "Databases & Caching", icon: "/database.png", tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
    { title: "DevOps & Deployment", icon: "/docker.png", tags: ["Docker", "CI/CD", "Nginx", "AWS"] },
    { title: "Mobile & Integrations", icon: "/mobile.png", tags: ["React native", "Firebase", "Stripe", "Google Maps"] },
];

export default function Skills() {
    return (
        <section className="py-16 flex flex-col gap-12  relative overflow-hidden">
            <SectionTitle title="Skills & Expertise" />
            {/* Core Expertise */}
            <div className="w-full relative z-10">
                <h3 className="text-2xl text-[#2563eb] mb-6 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#2563eb] rounded-full animate-pulse"></span>
                    Core Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreSkills.map((skill, index) => <Skill key={skill.title} {...skill} index={index} />)}
                </div>
            </div>

            {/* Secondary Skills */}
            <div className="w-full mt-12 relative z-10">
                <h3 className="text-2xl text-[#2563eb] mb-6 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#2563eb] rounded-full animate-pulse"></span>
                    Other Skills & Tools
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {secondarySkills.map((skill, index) => <Skill key={skill.title} {...skill} index={index} />)}
                </div>
            </div>
        </section>
    );
}

function Skill({ title, icon, tags, index }: { title: string; icon: string; tags: string[]; index: number }) {
    return (
        <div
            className="group relative flex flex-col items-start bg-[#121825] rounded-3xl p-6 gap-4 max-w-xs transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
        >
            {/* Gradient border glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] via-[#2dd4bf] to-[#2563eb] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-gray-800 group-hover:border-[#2563eb]/50 transition-colors duration-300"></div>

            {/* Content */}
            <div className="relative w-full">
                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-[#2563eb]/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                            src={icon}
                            alt={title}
                            className="relative w-10 h-10 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                        />
                    </div>
                    <h4 className="text-white font-bold text-lg group-hover:text-[#2563eb] transition-colors duration-300">
                        {title}
                    </h4>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span
                            key={tag}
                            className="text-sm font-medium px-3 py-1.5 rounded-full bg-[#142d30] text-[#2dd4bf] border border-[#2dd4bf]/20 hover:border-[#2dd4bf]/60 hover:bg-[#142d30]/80 transition-all duration-300 hover:scale-105 cursor-default"
                            style={{
                                animation: `fadeIn 0.4s ease-out ${(index * 0.1) + (i * 0.05)}s both`
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Animations */}
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
            `}</style>
        </div>
    );
}