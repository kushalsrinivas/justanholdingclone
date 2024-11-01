"use client"

import { Download } from "lucide-react"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Component() {
  return (
    <section className="bg-[#0a1520] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-wider mb-6 text-gray-400">CAPABILITIES</h2>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              Putting our focus to satisfy both parts necessities with concrete solutions.
            </h1>
          </div>
          
          <div className="self-center">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-white/20">
                <AccordionTrigger className="text-xl hover:text-white/80">
                  Qualified partner research
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We conduct thorough research to find the most qualified partners for your business needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-white/20">
                <AccordionTrigger className="text-xl hover:text-white/80">
                  Due diligence process
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our comprehensive due diligence process ensures all aspects of the partnership are thoroughly vetted.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-white/20">
                <AccordionTrigger className="text-xl hover:text-white/80">
                  Legal and diplomatic assistance
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We provide expert legal and diplomatic support throughout the entire process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-white/20">
                <AccordionTrigger className="text-xl hover:text-white/80">
                  Payment management
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Secure and efficient payment management solutions for all transactions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-[#7AB80E]/60 mix-blend-multiply z-10" />
            <Image
              src="/placeholder.svg"
              alt="Oil rig and silver bars"
              width={400}
              height={300}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-[#7AB80E]/60 mix-blend-multiply z-10" />
            <Image
              src="/placeholder.svg"
              alt="Cryptocurrency coins"
              width={400}
              height={300}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-[#7AB80E]/60 mix-blend-multiply z-10" />
            <Image
              src="/placeholder.svg"
              alt="Glass containers with green powder"
              width={400}
              height={300}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors">
                <Download className="w-4 h-4" />
                DOWNLOAD THE SHEET
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}