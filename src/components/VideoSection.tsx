export default function VideoSection() {
    return (
    <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">African Inspired Interiors</h2>
        <div className="max-w-3xl mx-auto">
        <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="African Interiors"
            allowFullScreen
        ></iframe>
        </div>
    </section>
    );
}
