import Image from "next/image";

export default function FairTrade() {
return (
    <section id="fairtrade" className="py-20 px-6 bg-white text-left text-black">
    <div className="flex items-start gap-8">
        {/* Left Side - Text Content */}
        <div className="w-1/2">
        <h2 className="text-9xl font-bold ml-32">FAIR</h2>
        <h2 className="text-9xl font-bold mb-20 ml-64">TRADE</h2>

        <p className="font-semibold text-3xl max-w-2xl ml-32 mb-8">
            How is CAM fair trade? Well, at CAM we work directly with African artisans, ensuring they&apos;re paid fairly and work in safe, supportive environments.
        </p>
        <p className="font-semibold text-3xl max-w-3xl ml-32 text-red-700">
            When you choose CAM, you&apos;re supporting African artisans and strengthening their communities.        
        </p>
        <button className="bg-green-800 text-white py-3 px-6 rounded-3xl text-lg hover:bg-green-600 a mt-16  active:bg-green-950 ml-32">
        Sign Up to Support
        </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex justify-end mt-8">
        <Image
            src="/FairTrade.jpg" // Replace with actual image path
            alt="Fair Trade Artisans"
            width={550} // Adjust as needed
            height={500} // Adjust as needed
            className="mr-32"
        />
        </div>
    </div>
    </section>
);
}
