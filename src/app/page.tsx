"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import WhoWe from "@/components/sections/Whowe";
import Intermediation from "@/components/sections/Intermediation";
import Capabilites from "@/components/sections/Capabilites";
// import Statistics from "@/components/sections/Stats";
import ContactSection from "@/components/sections/FormaMentis";
import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";

import Globe from "@/components/ui/globe";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

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
              <div className="text-3xl sm:text-2xl font-serif logo ">
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
                <a href="mailto:info@veridianapex.com">CONTACT US</a>
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
              <a href="mailto:info@veridianapex.com">CONTACT US</a>
            </Button>
          </div>
        </div>

        {/* <main className="relative min-h-screen overflow-hidden bg-black pt-16 mt-10">
          <div className="absolute inset-0">
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-black">
              <div className="relative h-full">
                <div className="absolute inset-0 top-0 right-0 h-full w-full z-10 bg-black opacity-35"></div>

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
        </main> */}
        <main className="relative z-10 container mx-auto px-6 pt-20 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-serif leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                Empowering business with integrity, ensuring trust and
                satisfaction.
              </h1>
              <p className="text-lg text-muted-foreground">
                Transform your business with our innovative solutions and expert
                guidance. We&apos;re committed to your success through
                transparency and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  <a href="mailto:info@veridianapex.com">CONTACT US</a>

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" className="text-black" variant="outline">
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square hidden md:block max-w-xl md:mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-teal-500/20 blur-2xl animate-spin-slow" />
                <div className="relative h-full w-full rounded-full bg-black/50 backdrop-blur-sm border border-white/10 p-8">
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10" />
                  <Globe></Globe>

                  <div className="h-full w-full rounded-full bg-black/50 animate-pulse" />
                </div>
              </div>
            </motion.div>
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
