"use client";

import TradingCards from "./TradingCards";

export default function Capabilites() {
  return (
    <section className="bg-black text-white  md:py-24">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="gap-12 mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-wider mb-6 text-gray-400">
              CAPABILITIES
            </h2>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              Putting our focus to satisfy both parts necessities with concrete
              solutions.
            </h1>
          </div>

          {/* <div className="self-center">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-white/20">
                <AccordionTrigger className="text-xl hover:text-white/80">
                  Qualified partner research
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We conduct thorough research to find the most qualified
                  partners for your business needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-white/20">
                <AccordionTrigger className="text-xl hover:text-white/80">
                  Due diligence process
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our comprehensive due diligence process ensures all aspects of
                  the partnership are thoroughly vetted.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-white/20">
                <AccordionTrigger className="text-xl hover:text-white/80">
                  Legal and diplomatic assistance
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We provide expert legal and diplomatic support throughout the
                  entire process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-white/20">
                <AccordionTrigger className="text-xl hover:text-white/80">
                  Payment management
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Secure and efficient payment management solutions for all
                  transactions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div> */}
        </div>
      </div>
      <TradingCards></TradingCards>
    </section>
  );
}
