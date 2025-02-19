import { useState, useEffect } from "react";

export default function Header() {
    const headerBrief = "I’m a Full Stack Developer with a strong passion for UI effects, animations, and building intuitive, dynamic user experiences. I focus on writing clean, maintainable code and solving complex problems efficiently.";
    const headerDetails = `Over the past four years, I have worked on various real-world applications, contributing to both frontend and backend development. My expertise includes modern web technologies such as HTML, CSS, JavaScript, TypeScript, Angular, and Flutter, as well as backend development with Node.js, NestJS, and PHP. I have built and optimized responsive, high-performance web applications with a focus on scalability and maintainability.
    I have experience in full system overhauls, from rebuilding authentication systems to complete UI redesigns and major code refactoring. My work often involves integrating Firebase, MySQL, and other backend services, ensuring smooth and efficient data handling.
    While web and app development are my main focus, I’m also interested in AI and machine learning and how they can be leveraged to enhance modern applications.`;

    const [displayedText, setDisplayedText] = useState("");
    const fullText = `${headerBrief}\n\n${headerDetails}`;
    const speed = 15;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }

                .floating {
                    animation: float 2s ease-in-out infinite;
                }
            `}
            </style>

            <header className="flex flex-col-reverse sm:flex-row items-center md:items-start justify-between mt-2 md:mt-10">
                <div className="text-light tracking-wide max-w-xl text-base md:text-xl leading-relaxed md:leading-relaxed whitespace-pre-line">
                    {displayedText.replace(/undefined/g, "").trim() || ""}
                </div>
                <img src="/retro.png" className="w-1/3 justify-end floating my-10" alt="Profile" />
            </header>
        </>
    );
}
