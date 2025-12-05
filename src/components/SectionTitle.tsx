import Line from "./Line"

export default function SectionTitle({ title }: { title: string }) {
    return (
        <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2">
                {title}
            </h2>
            <Line />
        </div>
    );
}