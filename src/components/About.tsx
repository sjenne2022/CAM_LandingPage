import Image from "next/image";

export default function About() {
return (
    <section id="about" className="py-20 px-6 bg-white text-left text-black">
    {/* Heading Section */}
    <div>
        <h2 className="text-9xl font-bold ml-32">What</h2>
        <h2 className="text-9xl font-bold mb-4 mt-[-40px] ml-64">we do</h2>
    </div>

    {/* Image & Text Container */}
    <div className="flex items-start gap-8 ml-32 mt-28">
        {/* Left Side - Image */}
        <div className="w-1/3">
        <Image
            src="/Whatwedo.jpg" // Update with the correct path
            alt="Authentic African Craftsmanship"
            width={450} // Adjust as needed
            height={400} // Adjust as needed
            className="mt-28"
        />
        </div>

        {/* Right Side - Text */}
        <div className="w-2/3">
        <p className="text-3xl font-semibold max-w-4xl mb-10">
        Welcome to CAM, your gateway to discovering exceptional products made in Africa. Imagine browsing a collection where every item, from stylish wearables and contemporary fashion to practical tools and unique home accents, is crafted with care by skilled African artisans.
        </p>
        <p className="text-3xl font-semibold max-w-4xl text-green-800">
        With each purchase, you’re not only enjoying high-quality craftsmanship but also supporting fair trade practices that empower local communities. Explore our curated selection and experience the authentic creativity and passion that goes into every piece.
        </p>
        </div>
    </div>
    </section>
);
}
