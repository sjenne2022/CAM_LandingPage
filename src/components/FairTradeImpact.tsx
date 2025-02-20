export default function FairTradeImpact() {
    return (
    <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        
        {/* Pillar 1 - Fair Wages & Ethical Sourcing */}
        <div className="flex flex-col items-center px-4">
            <h3 className="text-6xl sm:text-7xl font-bold">💰</h3>
            <h4 className="text-2xl font-semibold mt-4">Fair Wages & Ethical Sourcing</h4>
            <p className="text-lg mt-2 max-w-xs">
            Committed to fair trade partnerships that uplift communities.
            </p>
        </div>

        {/* Pillar 2 - Sustainable & Eco-Friendly */}
        <div className="flex flex-col items-center px-4">
            <h3 className="text-6xl sm:text-7xl font-bold">🌍</h3>
            <h4 className="text-2xl font-semibold mt-4">Sustainable & Eco-Friendly</h4>
            <p className="text-lg mt-2 max-w-xs">
            Prioritizing sustainable materials and reducing waste.
            </p>
        </div>

        {/* Pillar 3 - Transparency & Community Impact */}
        <div className="flex flex-col items-center px-4">
            <h3 className="text-6xl sm:text-7xl font-bold">🤝</h3>
            <h4 className="text-2xl font-semibold mt-4">Transparency & Community Impact</h4>
            <p className="text-lg mt-2 max-w-xs">
            Bringing openness to every purchase to empower artisans.
            </p>
        </div>

        </div>
    </section>
    );
}
