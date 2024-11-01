import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="bg-black text-white">
      {/* Main Content Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 p-8 lg:p-12">
        {/* Left Side: Text Content */}
        <div className="bg-black p-12 flex items-center justify-center">
          <div>
            <p className="text-xs uppercase text-gray-400 mb-2">
              Our Forma Mentis
            </p>
            <h2 className="text-4xl font-serif text-gray-500 leading-snug">
              <span className="text-white">
                Innovative Leadership, Strategic Vision:
              </span>
              Driving growth through expertise, integrity, and collaboration.
            </h2>
          </div>
        </div>

        {/* Right Side: Placeholder for Building Image */}
        <div className="relative">
          <Image
            src="/tellus.jpg"
            alt="London cityscape"
            width={800}
            height={600}
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Contact and Address Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 p-8 lg:p-12">
        <div className="bg-gray-700 h-64 ">
          <p className="text-white text-lg">Map Placeholder</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 ">
          {/* Contact Information Card */}
          <Card className="bg-black p-8 border-r border-gray-200 text-white flex-1 flex flex-col items-start justify-center mb-4 border-none rounded-none lg:mb-0">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MessageCircle className="text-white" size={28} />
                <p className="text-lg font-semibold">Get in touch!</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-">
              <p className="text-sm">
                Business and General inquiries:{" "}
                <a
                  href="mailto:info@justanholding.co.uk"
                  className="text-gray-500 underline"
                >
                  info@verdianapex.com
                </a>
              </p>
              <Button className="mt-4 bg-white text-black px-6 py-2 rounded hover:bg-green-600">
                WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Legal Address Card */}
          <Card className="bg-black  p-8 text-white border-l border-gray-200 flex-1 flex flex-col items-start justify-center mb-4 border-none rounded-none lg:mb-0">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MapPin className="text-white" size={28} />
                <p className="text-lg font-semibold">Legal address</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-">
              <p className="text-sm">
                71-75 Shelton Street, WC2H 9JQ
                <br />
                London, United Kingdom
              </p>
              <div className="mt-4 px-6 py-2"></div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section with Placeholder */}
    </div>
  );
}
