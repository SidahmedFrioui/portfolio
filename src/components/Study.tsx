const studies = [
    {
        title: "Bachelor of Science in Computer Science",
        institution: "University of abou bekr belkaid tlemcen",
        duration: "2021 - 2024",
    },
    {
        title: "Master in Artificial Intelligence",
        institution: "University of abou bekr belkaid tlemcen",
        duration: "2024 - 2026",
    },
]

type PortfolioStudy = {
    title: string;
    institution: string;
    duration: string;
}

export default function Study() {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">Study</h2>
            <div className="grid grid-cols-1 gap-6">
                {studies.map((study) => (
                    <StudyItem key={study.title} {...study} />
                ))}
            </div>
        </section>
    );
}

function StudyItem({title, institution, duration}: PortfolioStudy) {
    return (
        <div className="flex flex-col items-start bg-[#121825] rounded-3xl p-8 gap-6 max-w-lg">
            <h3 className="text-gray-400 font-medium text-md">{title}</h3>
            <p className="text-gray-400 font-medium text-md">{institution}</p>
            <p className="text-gray-400 font-medium text-md">{duration}</p>
        </div>
    );
}
