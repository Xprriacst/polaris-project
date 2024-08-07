"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { AuroraBackground } from "@/components/ui/aurora-background";

const DummyContent: React.FC = () => (
  <div className="glassmorphism p-8 rounded-3xl">
    <p className="text-gray-800 text-base md:text-lg mb-6">
      <span className="font-bold">The first rule of Apple club:</span> Always talk about Apple club. Keep a journal, jot down grocery lists, and take amazing class notes. Want to convert those notes to text? No problem. Our AI is ready to capture every thought.
    </p>
    <Image
      src="/macbook.png"
      alt="Macbook mockup"
      width={400}
      height={240}
      className="mx-auto object-contain"
    />
  </div>
);

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/imtest1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your workflow.",
    src: "/imtest2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Innovation",
    title: "Discover the future.",
    src: "/imtest3.jpg",
    content: <DummyContent />,
  },
];

export const AppleCardsCarouselDemo: React.FC = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <AuroraBackground>
      <div className="aurora-content w-full px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4 text-shadow">
            Background lights are
            <span className="text-gradient"> cool </span>
            you know.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            And this, is chemical burn.
          </p>
          <button className="glassmorphism px-8 py-3 rounded-full text-lg font-medium text-gray-800 hover:bg-white/40 transition-colors">
            Debug now
          </button>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-12 text-shadow">
            Get to know your <span className="text-gradient">iSad</span>.
          </h2>
          <Carousel items={cards} />
        </div>
      </div>
    </AuroraBackground>
  );
};