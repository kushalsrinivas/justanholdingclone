import { Diamond, Star } from "lucide-react";
import Image from "next/image";

export default function Statistics() {
  return (
    <section className="bg-[#0a1520] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="relative h-[300px] overflow-hidden group">
            <Image
              src="/placeholder.svg"
              alt="London financial district skyline"
              width={800}
              height={600}
              className="object-cover w-full h-full grayscale transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative h-[300px] overflow-hidden group">
            <Image
              src="/placeholder.svg"
              alt="Modern skyscrapers"
              width={800}
              height={600}
              className="object-cover w-full h-full grayscale transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-[#7AB80E]" />
              <span className="text-5xl font-bold">200+</span>
            </div>
            <h3 className="text-xl font-semibold">SATISFIED CUSTOMERS</h3>
            <p className="text-gray-400">
              Over 200+ clients trust our expertise and dedication to
              excellence.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Diamond className="w-6 h-6 text-[#7AB80E]" />
              <span className="text-5xl font-bold">5</span>
            </div>
            <h3 className="text-xl font-semibold">SUCCESSFUL VENTURES</h3>
            <p className="text-gray-400">
              We have successfully launched and managed 5 ventures, showcasing
              our capability and commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
