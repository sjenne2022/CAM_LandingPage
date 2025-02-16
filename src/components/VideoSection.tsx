export default function VideoSection() {
    return (
    <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-9xl font-bold mb-4 text-black">African Designed</h2>
        <div className="max-w-8xl mx-auto">
        <video
            className="w-full aspect-video rounded-lg"
            src="/AfricanVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
        />
        </div>
    </section>
    );
}
