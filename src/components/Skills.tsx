const coreSkills = [
    { title: "Frontend", icon: "/palette.png", tags: ["React", "Angular", "UI/UX"] },
    { title: "Backend", icon: "/backend.png", tags: ["NestJS", "Express", "Node.js", "TypeScript"] },
];

const secondarySkills = [
    { title: "Databases & Caching", icon: "/database.png", tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
    { title: "DevOps & Deployment", icon: "/docker.png", tags: ["Docker", "CI/CD", "Nginx", "AWS"] },
    { title: "Mobile & Integrations", icon: "/mobile.png", tags: ["Flutter", "Firebase", "Stripe", "Google Maps"] },
];

export default function Skills() {
    return (
        <section className="py-16 flex flex-col gap-12 items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Expertise</h2>

            {/* Core Expertise */}
            <div className="w-full">
                <h3 className="text-xl text-[#2563eb] mb-6 font-semibold">Core Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreSkills.map(skill => <Skill key={skill.title} {...skill} />)}
                </div>
            </div>

            {/* Secondary Skills */}
            <div className="w-full mt-12">
                <h3 className="text-xl text-[#2563eb] mb-6 font-semibold">Other Skills & Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {secondarySkills.map(skill => <Skill key={skill.title} {...skill} />)}
                </div>
            </div>
        </section>
    );
}

function Skill({ title, icon, tags }: { title: string; icon: string; tags: string[]; }) {
    return (
        <div className={`flex flex-col items-start bg-[#121825] rounded-3xl p-6 gap-4 max-w-xs`}>
            <div className="flex items-center gap-3">
                <img src={icon} alt={title} className="w-8 h-8" />
                <h4 className="text-white font-semibold text-md">{title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className={`text-sm font-medium px-3 py-1 rounded-full bg-[#142d30] text-[#2dd4bf]`}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
