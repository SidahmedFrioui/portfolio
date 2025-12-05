const studies = [
    {
        degree: "B.Sc. Computer Science",
        institution: "University of Abou Bekr Belkaid Tlemcen",
        duration: "2021 - 2024",
        highlights: ["Full Stack Development", "Data Structures & Algorithms", "Web Development"]
    },
    {
        degree: "M.Sc. Artificial Intelligence",
        institution: "University of Abou Bekr Belkaid Tlemcen",
        duration: "2024 - 2026",
        highlights: ["Machine Learning", "Deep Learning", "Data Analytics"]
    },
];

type PortfolioStudy = {
    degree: string;
    institution: string;
    duration: string;
    highlights: string[];
}

export default function Study() {
    return (
        <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {studies.map((study) => (
                    <StudyItem key={study.degree} {...study} />
                ))}
            </div>
        </section>
    );
}

function StudyItem({ degree, institution, duration, highlights }: PortfolioStudy) {
    return (
        <div className="bg-[#121825] rounded-3xl p-8 flex flex-col gap-4 shadow-lg hover:shadow-xl transition">
            <h3 className="text-white font-bold text-xl">{degree}</h3>
            <p className="text-gray-400 font-medium">{institution}</p>
            <p className="text-gray-400 text-sm">{duration}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
                {highlights.map((item, idx) => (
                    <li key={idx} className="bg-[#2563eb] text-black px-2 py-1 rounded text-sm font-medium">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
