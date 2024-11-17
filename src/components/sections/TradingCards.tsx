import Image from "next/image";
import BlurFade from "../ui/blur-fade";

export default function TradingCards() {
  return (
    <section className="bg-black text-white pt-16">
      <div className=" mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Ultrafine Copper Powder Card */}
          <BlurFade delay={0.1} inView>
            <div className="bg-black/40 rounded-sm overflow-hidden">
              <div className="relative group h-64">
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10 transition-transform duration-300 group-hover:scale-110" />
                <Image
                  src="/copper.jpg"
                  alt="Ultrafine Copper Powder"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  ULTRAFINE COPPER POWDER
                </h3>
                <p className="text-gray-400 mb-6">
                  Ultrafine Nano Copper Powder is rare and precious. Thanks to
                  trusted global suppliers, we offer the best and purest
                  product.
                </p>
                <button className="bg-zinc-800 text-white px-6 py-3 hover:bg-zinc-700 transition-colors w-full mb-4">
                  <a href="mailto:info@veridianapex.com">REQUEST QUOTATION</a>
                </button>
              </div>
            </div>
          </BlurFade>

          {/* Iron Ore Card */}
          <BlurFade delay={0.2} inView>
            <div className="bg-black/40 rounded-sm overflow-hidden">
              <div className="relative group h-64">
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10 transition-transform duration-300 group-hover:scale-110" />
                <Image
                  src="/ironore.jpg"
                  alt="Iron Ore"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">IRON ORE</h3>
                <p className="text-gray-400 mb-6">
                  High-quality iron ore sourced for superior metal production
                  standards. Ensuring the best quality from reliable suppliers.
                </p>
                <button className="bg-zinc-800 text-white px-6 py-3 hover:bg-zinc-700 transition-colors w-full mb-4">
                  <a href="mailto:info@veridianapex.com">REQUEST QUOTATION</a>
                </button>
              </div>
            </div>
          </BlurFade>

          {/* Coal Card */}
          <BlurFade delay={0.3} inView>
            <div className="bg-black/40 rounded-sm overflow-hidden">
              <div className="relative group h-64">
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10 transition-transform duration-300 group-hover:scale-110" />
                <Image
                  src="/coal.jpg"
                  alt="High-Quality Coal"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">COAL</h3>
                <p className="text-gray-400 mb-6">
                  Our high-grade coal meets industry standards for energy
                  production, sourced responsibly to ensure quality and
                  sustainability.
                </p>
                <button className="bg-zinc-800 text-white px-6 py-3 hover:bg-zinc-700 transition-colors w-full mb-4">
                  <a href="mailto:info@veridianapex.com">REQUEST QUOTATION</a>
                </button>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
