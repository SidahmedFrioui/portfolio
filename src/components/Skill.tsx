import { PortfolioSkill } from "./Skills";

export default function Skill({title, icon, tags}: PortfolioSkill) {
    return (
        <div className="flex flex-col items-start bg-[#121825] rounded-3xl p-8 gap-6 max-w-xs">
            <div className="flex flex-row items-center gap-4">
                <img src={icon} alt={title} className="w-8 h-8" />
                <h2 className="text-gray-400 font-medium text-md">{title}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="text-[#2dd4bf] font-semibold text-sm bg-[#142d30] py-2 px-4 rounded-3xl">{tag}</span>
                ))}
            </div>
        </div>
    );
}
