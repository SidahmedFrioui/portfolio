import SectionTitle from "./SectionTitle";

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
        <section className="py-16 relative overflow-hidden">
            <div className="relative z-10">
                <SectionTitle title="Education" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 relative z-10">
                {studies.map((study, index) => (
                    <StudyItem key={study.degree} {...study} index={index} />
                ))}
            </div>
        </section>
    );
}

function StudyItem({ degree, institution, duration, highlights, index }: PortfolioStudy & { index: number }) {
    return (
        <div
            className="group relative bg-[#121825] rounded-3xl p-8 flex flex-col gap-4 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
            }}
        >

            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-gray-800 group-hover:border-[#2563eb]/50 transition-colors duration-300"></div>

            {/* Academic icon */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[#2563eb]/20 to-purple-500/20 rounded-full flex items-center justify-center border border-[#2563eb]/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg
                    className="w-6 h-6 text-[#2563eb]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative pr-16">
                {/* Degree */}
                <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {degree}
                </h3>

                {/* Institution with icon */}
                <div className="flex items-start gap-2 mb-2">
                    <svg
                        className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                        {institution}
                    </p>
                </div>

                {/* Duration with icon */}
                <div className="flex items-center gap-2 mb-4">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[#2563eb] text-sm font-semibold">
                        {duration}
                    </p>
                </div>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-gray-700 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-purple-500 transition-all duration-500 rounded-full mb-4"></div>

                {/* Highlights */}
                <ul className="flex flex-wrap gap-2">
                    {highlights.map((item, idx) => (
                        <li
                            key={idx}
                            className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                            style={{
                                animation: `fadeIn 0.4s ease-out ${(index * 0.2) + (idx * 0.1)}s both`
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl pointer-events-none"></div>

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