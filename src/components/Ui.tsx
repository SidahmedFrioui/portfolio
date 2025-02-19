const uiImages = [
    "/ui.jpg",
    "/ui1.jpg",
    "/ui2.jpg",
    "/ui3.jpg",
];

export default function Ui() {
    return (
        <section className="px-6 py-12">
            <h2 className="text-2xl font-semibold text-gray-300 mb-6">UI Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {uiImages.map((image) => (
                    <UiItem key={image} image={image} />
                ))}
            </div>
        </section>
    );
}

function UiItem({ image }: { image: string }) {
    return (
        <div className="rounded-xl min-w-[150px] w-fit shadow-md hover:scale-105 transition-transform duration-300">
            <img src={image} className="w-full h-48 object-cover rounded-xl" />
        </div>
    );
}

