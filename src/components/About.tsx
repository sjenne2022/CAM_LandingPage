import Image from "next/image";

export default function About() {
return (
    <section id="about" className="py-20 px-6 bg-white text-left text-black">
    {/* Heading Section */}
    <div className="text-center sm:text-left">
        <h2 className="text-7xl sm:text-9xl font-bold sm:ml-14 ml-[-50px]">What</h2>
        <h2 className="text-7xl ml-24 sm:text-9xl sm:ml-40 font-bold mb-4 mt-[-10px] sm:mt-[-40px]">we do</h2>
    </div>

    {/* Image & Text Container */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mt-10 sm:mt-28">
        {/* Left Side - Image */}
        <div className="w-full sm:w-1/3 flex justify-center">
        <Image
            src="/Whatwedo.jpg" // Update with the correct path
            alt="Authentic African Craftsmanship"
            width={450} // Adjust as needed
            height={400} // Adjust as needed
            className="mt-10 sm:mt-28 w-3/4 sm:w-auto rounded-xl sm:rounded-none"
        />
        </div>

        {/* Right Side - Text */}
        <div className="w-full sm:w-2/3 text-left sm:text-left">
        <p className="text-xl sm:text-4xl sm:mt-64 sm:ml-32 font-semibold max-w-4xl mb-10">
            Welcome to CAM—the first-of-its-kind marketplace bringing the soul of Africa to the world. Discover a curated collection where every piece, from stylish wearables and contemporary fashion to artisanal tools and unique home accents, is a testament to Africa’s rich heritage and masterful craftsmanship.
        </p>
        <p className="text-xl sm:text-4xl font-semibold sm:ml-32 max-w-4xl text-green-800">
            With each purchase, you’re not only enjoying high-quality craftsmanship but also supporting fair trade practices that empower local communities. Explore our curated selection and experience the authentic creativity and passion that goes into every piece.
        </p>
        </div>
    </div>
    </section>
);
}
