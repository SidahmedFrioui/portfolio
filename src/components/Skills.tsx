import Skill from "./Skill";

export type PortfolioSkill = {
    title: string;
    icon: string;
    tags: string[];
}

const skills: PortfolioSkill[] = [
    {title: "Programming languages and frameworks", icon: "/programming.png", tags: ["Typescript", "Javascript", "Python", "C", "PHP"]},
    {title: "Devops", icon: "/docker.png", tags: ["Docker", "Nginx", "CI/CD", "Git", "Kubernetes", "AWS", "Linux"]},
    {title: "Data storage and caching", icon: "/database.png", tags: ["MongoDB", "Elasticsearch", "Redis", "MySQL", "PostgreSQL"]},
    {title: "Frontend", icon: "/palette.png", tags: ["UI/UX", "Angular", "React", "Next.js", "Tailwind CSS"]},
    {title: "App publishing", icon: "store.png", tags: ["iOS App Store", "TestFlight", "Android Play Store", "Play Store Beta tracks"]},   
    {title: "Backend", icon: "backend.png", tags: ["NestJS", "Express", "Hono", "Laravel"]},
    {title: "Mobile", icon: "mobile.png", tags: ["Flutter"]},
    {title: "Integrations", icon: "api.png", tags: ["Stripe", "Firebase", "Resend", "Google Maps", "In-app payments"]},
]

export default function Skills() {
    return (
        <section className="py-16 px-0 flex flex-col gap-8 items-center">
            <h2 className="text-3xl text-center font-bold">Superpowers</h2>
            <p className="text-blue-400 text-center text-xl max-w-2xl">I consider all these as tools and instruments to create my art. While I'm trying to think of one specialization to deep dive in, I've used these technologies at some point and have thoroughly enjoyed creating with them. By no means, can I call myself an expert in most of these things, but hey, I believe that once you know the what and why of it, the answer to how is just a few well-executed Google searches away!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill) => (
                    <Skill key={skill.title} title={skill.title} icon={skill.icon} tags={skill.tags} />
                ))}
            </div>
        </section>
    );
}
