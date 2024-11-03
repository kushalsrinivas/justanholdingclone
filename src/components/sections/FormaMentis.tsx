import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <div className="bg-black text-white p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 p-8 lg:p-12">
        <div className="bg-black h-64">
          <h2 className="text-sm uppercase tracking-wider mb-6 text-gray-400">
            CONTACT
          </h2>
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingTop: "56.25%" }}
          >
            {/* Responsive Map Container */}
            <iframe
              title="Google Map"
              className="absolute top-0 left-0 w-full h-full"
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
              frameBorder={0}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=30%20N%20Gould%20St%20%2346510%20Sheridan%2C%20WY%2C%2082801%2C%20USA&zoom=10&maptype=roadmap"
            ></iframe>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
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
                  href="mailto:info@veridianapex.com"
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
          <Card className="bg-black p-8 text-white border-l border-gray-200 flex-1 flex flex-col items-start justify-center mb-4 border-none rounded-none lg:mb-0">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MapPin className="text-white" size={28} />
                <p className="text-lg font-semibold"> Address</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-">
              <p className="text-sm">
                <h4 className="text-lg font-semibold text-white">Wyoming</h4>
                <p className="mt-2">VERDIAN APEX GROUP</p>
                <p>30 N Gould St #46510 Sheridan, WY, 82801, USA</p>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section with Placeholder */}
    </div>
  );
}
