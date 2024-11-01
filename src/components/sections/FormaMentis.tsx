import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <h2 className="text-4xl font-bold leading-snug">
              <span className="text-green-500">
                Innovative Leadership, Strategic Vision:
              </span>{" "}
              Driving growth through expertise, integrity, and collaboration.
            </h2>
          </div>
        </div>

        {/* Right Side: Placeholder for Building Image */}
        <div className="bg-gray-700 p-8 flex items-center justify-center">
          <div className="h-64 w-full bg-gray-500 flex items-center justify-center">
            <p className="text-white text-lg">Image Placeholder</p>
          </div>
        </div>
      </div>

      {/* Contact and Address Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 p-8 lg:p-12">
        {/* Contact Information Card */}
        <Card className="bg-gray-800 p-8 flex-1 flex flex-col items-start justify-center mb-4 lg:mb-0">
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MessageCircle className="text-white" size={28} />
              <p className="text-lg font-semibold">Get in touch!</p>
            </div>
            <p className="text-sm">
              Business and General inquiries:{" "}
              <a
                href="mailto:info@justanholding.co.uk"
                className="text-green-500 underline"
              >
                info@justanholding.co.uk
              </a>
            </p>
            <Button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              WhatsApp
            </Button>
          </CardContent>
        </Card>

        {/* Legal Address Card */}
        <Card className="bg-gray-800 p-8 flex-1 flex flex-col items-start justify-center">
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="text-white" size={28} />
              <p className="text-lg font-semibold">Legal address</p>
            </div>
            <p className="text-sm">
              71-75 Shelton Street, WC2H 9JQ
              <br />
              London, United Kingdom
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Map Section with Placeholder */}
      <div className="bg-gray-700 h-64 flex items-center justify-center">
        <p className="text-white text-lg">Map Placeholder</p>
      </div>
    </div>
  );
}
