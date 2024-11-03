import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Intermediation() {
  return (
    <div className="bg-black pb-10">
      {/* Logo Bar */}

      {/* Split Screen Section */}
      <div className="grid md:grid-cols-2 sm:mt-0 mt-28">
        {/* Left Panel */}
        <div className="relative">
          {/* <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/placeholder.svg"
            alt="Business meeting"
            width={800}
            height={600}
            className="w-full h-[500px] object-cover"
          /> */}
          <div className="absolute  bg-black inset-0 z-20 p-12 flex flex-col justify-center">
            <div className="text-gray-400 mb-4 tracking-wider">
              INTERMEDIATION
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Connect with us to discuss business opportunities.
            </h2>
            <button className="flex items-center gap-2 text-white border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors w-fit">
              <a href="mailto:info@justanholding.co.uk">CONTACT US</a>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative ">
          <div className="absolute  inset-0 bg-black opacity-50 mix-blend-multiply z-10" />
          <Image
            src="/handshake.jpg"
            alt="London cityscape"
            width={800}
            height={600}
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
