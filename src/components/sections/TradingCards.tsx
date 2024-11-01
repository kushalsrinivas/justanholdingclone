import { Download } from "lucide-react";
import Image from "next/image";

export default function TradingCards() {
  return (
    <section className="bg-[#0a1520] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Commodities Card */}
          <div className="bg-black/40 rounded-sm overflow-hidden">
            <div className="relative group h-64">
              <div className="absolute inset-0 bg-[#7AB80E]/60 mix-blend-multiply z-10" />
              <Image
                src="/placeholder.svg"
                alt="Commodities trading"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">COMMODITIES</h3>
              <p className="text-gray-400 mb-6">
                We provide brokerage services for trading commodities globally,
                including energy, metals, and agricultural products.
              </p>
              <button className="bg-zinc-800 text-white px-6 py-3 hover:bg-zinc-700 transition-colors w-full mb-4">
                EXPLORE OPPORTUNITIES
              </button>
              <div className="flex items-center text-sm border-t border-white/10 pt-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  COPPER
                </span>
                <span className="ml-2">4.39677</span>
                <span className="ml-2 text-green-500">+0.00 (+0.03%)</span>
              </div>
            </div>
          </div>

          {/* Crypto Transactions Card */}
          <div className="bg-black/40 rounded-sm overflow-hidden">
            <div className="relative group h-64">
              <div className="absolute inset-0 bg-[#7AB80E]/60 mix-blend-multiply z-10" />
              <Image
                src="/placeholder.svg"
                alt="Cryptocurrency transactions"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">CRYPTO TRANSACTIONS</h3>
              <p className="text-gray-400 mb-6">
                Our services in the cryptocurrency sector facilitate secure
                transactions, assisting in the buying and selling of
                cryptocurrencies.
              </p>
              <button className="bg-zinc-800 text-white px-6 py-3 hover:bg-zinc-700 transition-colors w-full mb-4">
                EXPLORE OPPORTUNITIES
              </button>
              <div className="flex items-center text-sm border-t border-white/10 pt-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  ETH
                </span>
                <span className="ml-2">2,507.24</span>
                <span className="ml-2 text-red-500">-7.60 (-0.30%)</span>
              </div>
            </div>
          </div>

          {/* Ultrafine Copper Powder Card */}
          <div className="bg-black/40 rounded-sm overflow-hidden">
            <div className="relative group h-64">
              <div className="absolute inset-0 bg-[#7AB80E]/60 mix-blend-multiply z-10" />
              <Image
                src="/placeholder.svg"
                alt="Ultrafine copper powder"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 z-20">
                <button className="flex items-center gap-2 bg-[#7AB80E] text-white px-4 py-2 text-sm hover:bg-[#699A0D] transition-colors">
                  <Download className="w-4 h-4" />
                  DOWNLOAD THE SHEET
                </button>
              </div>
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
              <button className="bg-[#7AB80E] text-white px-6 py-3 hover:bg-[#699A0D] transition-colors w-full">
                FILL THE FORM FOR MORE INFORMATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
