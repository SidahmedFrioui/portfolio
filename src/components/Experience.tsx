const timelineData = [
    {
        company: "Youchoz",
        logo: "/logo.png",
        title: "Full Stack Developer",
        positions: [
            { date: "2024-08", event: "Joined as a Full Stack Developer" },
            { date: "2024-09", event: "Fixed Critical Bugs & Improved Stability" },
            { date: "2024-10", event: "Rebuilt the Entire Website from Scratch" },
            { date: "2024-11", event: "Rebuilt Authentication (Email/Password Instead of SMS)" },
            { date: "2025-01", event: "Complete UI Redesign" },
            { date: "2025-01", event: "Performed Major Code Refactoring" },
        ],
    },
    {
        company: "Sougplus",
        logo: "/sougplus.png",
        title: "Full Stack Developer (Freelance)",
        positions: [
            { date: "2024-11", event: "Implemented Full UI/UX Design" },
            { date: "2024-11", event: "Built Backend (NestJS, MySQL, Redis, Resend for Emails)" },
            { date: "2024-12", event: "Developed Storefront (Angular SSR, Tailwind, Stripe)" },
            { date: "2024-12", event: "Built Store Admin & Admin Panel (PrimeNG)" },
            { date: "2025-01", event: "Implemented Store Listings, Cart, Auth & Live Chat (Gemini AI)" },
            { date: "2025-02", event: "Integrated New Features & Optimized Performance" },
        ],
    },
];

export default function WorkExperience() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-8 mt-24">Work</h2>
            <section className="rounded-3xl bg-[#292524] flex flex-col md:flex-row p-4">
                <div className="flex flex-col w-full mt-6">
                    {timelineData.map((job, jobIndex) => (
                        <div key={jobIndex} className="w-full max-w-lg mb-12">
                            <div className="flex flex-row items-center mb-4">
                                <img src={job.logo} alt={job.company} className="h-12" />
                                <div className="ml-4">
                                    <span className="text-gray-300 font-semibold text-xl">{job.company}</span>
                                    <p className="text-gray-400 text-sm">{job.title}</p>
                                </div>
                            </div>
                            {job.positions.map((position, index) => (
                                <TimelineItem key={index} date={position.date} event={position.event} />
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

function TimelineItem({ date, event }: { date: string; event: string }) {
    return (
        <div className="flex items-center m-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
            <div>
                <p className="text-gray-300 font-semibold">{date}</p>
                <p className="text-gray-400">{event}</p>
            </div>
        </div>
    );
}
