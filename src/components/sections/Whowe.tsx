"use client";
import { Target, ShoppingBag, Handshake, Heart } from "lucide-react";

export default function WhoWe() {
  return (
    <section className="bg-black text-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-sm uppercase tracking-wider mb-6 text-gray-400">
              WHO WE ARE
            </h2>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              From the city we love, to all over the world. We create impactful
              ventures.
            </h1>
          </div>

          <div className="space-y-12">
            <div>
              <p className="text-xl mb-4">
                <span className="font-semibold">Business is about people.</span>{" "}
                We aim to connect the right people for the right purposes, all
                sharing values like{" "}
                <span className="font-semibold">
                  integrity, social impact, and leadership.
                </span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <Target className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Business Development
                </h3>
                <p className="text-gray-400 mb-3">
                  DUBLECLICK™ is a 360° marketing agency that helps MNEs & SMEs
                  to achieve their goals online and offline.
                </p>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-400 transition-colors"
                >
                  DISCOVER MORE
                </a>
              </div>

              <div>
                <div className="flex gap-1 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Not Just a Brand</h3>
                <p className="text-gray-400 mb-3">
                  ONEAM™ is more than a brand; it&apos;s a lifestyle. A creative
                  studio and retail brand that delivers impactful branding and
                  lifestyle goods.
                </p>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-400 transition-colors"
                >
                  DISCOVER MORE
                </a>
              </div>

              <div>
                <Handshake className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Intermediation Dept.
                </h3>
                <p className="text-gray-400 mb-3">
                  Just an Holding is also a London-based trading company that
                  operate mainly across the European Economic Area (EEA) in
                  partnership with worldwide companies and realities.
                </p>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-400 transition-colors"
                >
                  CONTACT US
                </a>
              </div>

              <div>
                <Heart className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Philanthropy and Charity
                </h3>
                <p className="text-gray-400 mb-3">
                  THE ONEAM FOUNDATION The ONEAM Foundation will play a crucial
                  role to support and finance socially-active initiatives that
                  lit the spark for a positive change.
                </p>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-400 transition-colors"
                >
                  DISCOVER MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
