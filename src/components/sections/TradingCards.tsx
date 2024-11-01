import Image from "next/image";

export default function TradingCards() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Ultrafine Copper Powder Card */}
          <div className="bg-black/40 rounded-sm overflow-hidden">
            <div className="relative group h-64">
              <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10 transition-transform duration-300 group-hover:scale-110" />
              <Image
                src="/copper.jpg"
                alt="Ultrafine copper powder"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 z-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                ULTRAFINE COPPER POWDER
              </h3>
              <p className="text-gray-400 mb-6">
                Ultrafine Nano Copper Powder is rare and precious. Thanks to
                trusted global suppliers we can offer the best and purest
                product available.
              </p>
              <button className="bg-zinc-800 text-white px-6 py-3 hover:bg-zinc-700 transition-colors w-full mb-4">
                REQUEST QUOTATION
              </button>
              <button className="bg-black text-sm text-white px-6 py-2 hover:bg-black/20 transition-colors w-full">
                FILL THE FORM FOR MORE INFORMATION
              </button>
            </div>
          </div>
          {/* Ultrafine Copper Powder Card */}
          <div className="bg-black/40 rounded-sm overflow-hidden">
            <div className="relative group h-64">
              <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10 transition-transform duration-300 group-hover:scale-110" />
              <Image
                src="/ironore.jpg"
                alt="Ultrafine copper powder"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 z-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">IRON ORE</h3>
              <p className="text-gray-400 mb-6">
                Ultrafine Nano Copper Powder is rare and precious. Thanks to
                trusted global suppliers we can offer the best and purest
                product available.
              </p>
              <button className="bg-zinc-800 text-white px-6 py-3 hover:bg-zinc-700 transition-colors w-full mb-4">
                REQUEST QUOTATION
              </button>
              <button className="bg-black text-sm text-white px-6 py-2 hover:bg-black/50 transition-colors w-full">
                FILL THE FORM FOR MORE INFORMATION
              </button>
            </div>
          </div>
          {/* Ultrafine Copper Powder Card */}
          <div className="bg-black/40 rounded-sm overflow-hidden">
            <div className="relative group h-64">
              <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10 transition-transform duration-300 group-hover:scale-110" />
              <Image
                src="/coal.jpg"
                alt="Ultrafine copper powder"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 z-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">COAL</h3>
              <p className="text-gray-400 mb-6">
                Ultrafine Nano Copper Powder is rare and precious. Thanks to
                trusted global suppliers we can offer the best and purest
                product available.
              </p>
              <button className="bg-zinc-800 text-white px-6 py-3 hover:bg-zinc-700 transition-colors w-full mb-4">
                REQUEST QUOTATION
              </button>
              <button className="bg-black text-sm text-white px-6 py-2 hover:bg-gray-900 transition-colors w-full">
                FILL THE FORM FOR MORE INFORMATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
