import Image from "next/image";

export default function FairTrade() {
return (
    <section id="fairtrade" className="py-20 px-6 bg-white text-left text-black">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        {/* Left Side - Text Content */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
        <h2 className="text-7xl sm:text-9xl font-bold sm:ml-14">FAIR</h2>
        <h2 className="text-7xl sm:text-9xl font-bold mb-10 sm:ml-40 sm:mb-20">TRADE</h2>

        <p className="font-semibold sm:ml-14 text-left text-xl sm:text-3xl max-w-2xl mx-auto sm:mx-0 mb-8">
            How is CAM fair trade? Well, at CAM we work directly with African artisans, ensuring they&apos;re paid fairly and work in safe, supportive environments.
        </p>
        <p className="font-semibold sm:ml-14 text-left text-xl sm:text-3xl max-w-3xl mx-auto sm:mx-0 text-red-700">
            When you choose CAM, you&apos;re supporting African artisans and strengthening their communities.
        </p>
        <button className="bg-green-800 sm:ml-14 text-white py-3 sm:py-4 sm:px-7 sm:rounded-full px-6 rounded-3xl text-lg sm:text-xl hover:bg-green-600 active:bg-green-950 mt-8 sm:mt-16">
            Get the latest updates now
        </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-10 sm:mt-8">
        <Image
            src="/FairTrade.jpg" // Replace with actual image path
            alt="Fair Trade Artisans"
            width={600} // Adjust as needed
            height={600} // Adjust as needed
            className="w-3/4 sm:w-auto max-w-xs sm:max-w-xl sm:mr-20 rounded-xl sm:rounded-none"
        />
        </div>
    </div>
    </section>
);
}
