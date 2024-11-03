"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import WhoWe from "@/components/sections/Whowe";
import Intermediation from "@/components/sections/Intermediation";
import Capabilites from "@/components/sections/Capabilites";
// import Statistics from "@/components/sections/Stats";
import ContactSection from "@/components/sections/FormaMentis";

import Footer from "@/components/sections/Footer";

import Globe from "@/components/ui/globe";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <header className="fixed top-0 w-full z-50 px-4 sm:px-6 py-4 bg-[#0D1117]">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex flex-col items-center">
              <div className="text-3xl sm:text-2xl font-serif ">
                VERIDIAN APEX
              </div>
              <div className="text-sm">GROUP</div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-[#96D800] transition-colors">
                LinkedIn
              </Link>
              <Button
                variant="secondary"
                className="bg-[#1C2128] text-white hover:bg-[#2D333B]"
              >
                <a href="mailto:info@justanholding.co.uk">CONTACT US</a>
              </Button>
            </div>
            <button className="md:hidden z-50" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 z-50" />
              ) : (
                <Menu className="h-6 w-6 z-50" />
              )}
            </button>
          </nav>
        </header>

        {/* Mobile menu */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-64 bg-[#0D1117] transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button
            className="md:hidden z-50 absolute top-10 right-10"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 z-50" />
            ) : (
              <Menu className="h-6 w-6 z-50" />
            )}
          </button>
          <div className="flex flex-col h-full justify-center items-center space-y-8">
            <Link
              href="/linkedin"
              className="hover:text-[#96D800] transition-colors"
            >
              LinkedIn
            </Link>
            <Button
              variant="secondary"
              className="bg-[#1C2128] text-white hover:bg-[#2D333B]"
            >
              <a href="mailto:info@justanholding.co.uk">CONTACT US</a>
            </Button>
          </div>
        </div>

        <main className="relative min-h-screen overflow-hidden bg-black pt-16 mt-10">
          <div className="absolute inset-0">
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-black">
              <div className="relative h-full">
                <div className="absolute inset-0 top-0 right-0 h-full w-full z-10 bg-black opacity-35"></div>
                {/* Placeholder for Globe component */}
                <div className="absolute  sm:flex  inset-0 hidden items-center justify-center text-white opacity-50">
                  <Globe></Globe>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full flex items-center z-20">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl">
                <h1 className="mt-24 text-5xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight">
                  <BlurFade delay={0.2} inView>
                    <p>
                      Empowering business with integrity, ensuring trust and
                      satisfaction.
                    </p>
                  </BlurFade>
                </h1>
              </div>
            </div>
          </div>
        </main>
      </div>
      <section id="about">
        <WhoWe></WhoWe>
      </section>
      <Intermediation></Intermediation>
      <Capabilites></Capabilites>
      {/* <Statistics></Statistics> */}
      <section id="forma-mentis ">
        <ContactSection></ContactSection>
      </section>
      {/* <TellusAboutYou></TellusAboutYou> */}
      <div className="h-[20vh] bg-black"></div>
      <Footer></Footer>
    </>
  );
}
