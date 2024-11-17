"use client";

import { motion } from "framer-motion";
import { Target, ClipboardCheck, HandshakeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Component() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "We are dedicated to facilitating seamless buying and selling of valuable commodities, guided by strong ethics and shared values.",
      action: "DISCOVER MORE",
    },
    {
      icon: ClipboardCheck,
      title: "Expert Solutions",
      description:
        "Our expertise lies in identifying the right partners to ensure reliable and efficient collaborations.",
      action: "DISCOVER MORE",
    },
    {
      icon: HandshakeIcon,
      title: "Customer Focus",
      description:
        "Our top priority is always customer satisfaction and ensuring peace of mind in every trade and transaction.",
      action: "CONTACT US",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-left font-serif mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl   leading-tight tracking-tight">
            <span className="block mb-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              From trusted partnerships,
            </span>
            <span className="block mb-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              to global excellence.
            </span>
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              We create valuable trades.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full hover:bg-gray-900/70 transition-colors">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-gray-800 w-12 h-12 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="hover:bg-white/10 text-white hover:text-white transition-colors"
                  >
                    {feature.action}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background gradient effects */}
    </div>
  );
}
