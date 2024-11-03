import { Target, ShoppingBag, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurFade from "../ui/blur-fade";
export default function Component() {
  return (
    <section className="w-full bg-black text-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Text */}
        <div className="space-y-6 max-w-[800px] mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
            From trusted partnerships,
            <br />
            to global excellence.
            <br />
            We create valuable trades.
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Our Mission */}
          <BlurFade delay={0.25} inView>
            <div className="space-y-4">
              <Target className="h-10 w-10 text-gray-200" />
              <h3 className="text-lg font-semibold">Our Mission</h3>
              <p className="text-gray-400">
                We are dedicated to facilitating seamless buying and selling of
                valuable commodities, guided by strong ethics and shared values.
              </p>
              <Button variant="link" className="text-gray-200 p-0">
                DISCOVER MORE
              </Button>
            </div>
          </BlurFade>

          {/* Expert Solutions */}
          <BlurFade delay={0.3} inView>
            <div className="space-y-4">
              <ShoppingBag className="h-10 w-10 text-gray-200" />
              <h3 className="text-lg font-semibold">Expert Solutions</h3>
              <p className="text-gray-400">
                Our expertise lies in identifying the right partners to ensure
                reliable and efficient collaborations.
              </p>
              <Button variant="link" className="text-gray-200 p-0">
                DISCOVER MORE
              </Button>
            </div>
          </BlurFade>

          {/* Customer Focus */}
          <BlurFade delay={0.35} inView>
            <div className="space-y-4">
              <Handshake className="h-10 w-10 text-gray-200" />
              <h3 className="text-lg font-semibold">Customer Focus</h3>
              <p className="text-gray-400">
                Our top priority is always customer satisfaction and ensuring
                peace of mind in every trade and transaction.
              </p>
              <Button variant="link" className="text-gray-200 p-0">
                CONTACT US
              </Button>
            </div>
          </BlurFade>

          {/* Our Values */}
       
        </div>
      </div>
    </section>
  );
}
