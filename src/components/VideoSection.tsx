export default function VideoSection() {
    return (
    <section className="py-12 sm:py-32 px-6 text-center bg-white">
        <h2 className="text-6xl sm:text-9xl font-bold mb-7 text-black">African Designed</h2>
        <div className="flex justify-center">
        <video
            className="w-full max-w-[90%] sm:max-w-8xl aspect-video rounded-lg"
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
