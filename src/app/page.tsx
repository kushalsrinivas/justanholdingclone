"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WhoWe from "@/components/sections/Whowe";
import Intermediation from "@/components/sections/Intermediation";

export default function Component() {
  return (
    <>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <header className="fixed top-0 w-full z-50 px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              JUST AN <span className="text-[#96D800]">XOLDING</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="/ventures"
                className="hover:text-[#96D800] transition-colors"
              >
                <span className="text-gray-400 mr-1">01</span> Ventures
              </Link>
              <Link
                href="/forma-mentis"
                className="hover:text-[#96D800] transition-colors"
              >
                <span className="text-gray-400 mr-1">02</span> Forma mentis
              </Link>
              <Link
                href="/careers"
                className="hover:text-[#96D800] transition-colors"
              >
                <span className="text-gray-400 mr-1">03</span> Careers
              </Link>
              <Link
                href="/linkedin"
                className="hover:text-[#96D800] transition-colors"
              >
                <span className="text-gray-400 mr-1">04</span> LinkedIn
              </Link>
              <Button
                variant="secondary"
                className="bg-[#1C2128] text-white hover:bg-[#2D333B]"
              >
                CONTACT US
              </Button>
            </div>
          </nav>
        </header>

        <main className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="London cityscape"
              width={1920}
              height={1080}
              className="object-cover w-full h-full grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#96D800]/50" />
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#0D1117]" />
          </div>

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl ml-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
                  Passion and competence merged together in a dynamic
                  entrepreneurial ecosystem.
                </h1>
              </div>
            </div>
          </div>
        </main>
      </div>
      <WhoWe></WhoWe>
      <Intermediation></Intermediation>
    </>
  );
}
