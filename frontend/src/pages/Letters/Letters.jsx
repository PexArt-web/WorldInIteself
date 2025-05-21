import React from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const Letters = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black/50 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <Header />

        <main className="text-center max-w-2xl mb-16">
          <h2 className="text-4xl font-bold mb-6">Messages From the Heart</h2>
          <p className="text-lg mb-8">
            Explore heartwarming love letters, uplifting good morning wishes,
            and soothing goodnight notes , all crafted to inspire and connect.
          </p>
        </main>

        <section className="w-full max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          <Link
            to="goodmorning"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">
              🌅 Good Morning Messages
            </h3>
            <p className="text-sm text-white/80">
              Start your day with warmth and positivity — browse sweet good
              morning wishes perfect for sending to someone special.
            </p>
          </Link>

          <Link
            to="goodnight"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">🌙 Goodnight Notes</h3>
            <p className="text-sm text-white/80">
              End the night with love — thoughtful messages to bring peace,
              comfort, and connection before bed.
            </p>
          </Link>

          <Link
            to="love-letters"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">💌 Love Letters</h3>
            <p className="text-sm text-white/80">
              Deep, meaningful letters to express emotions, appreciation, and
              affection. Send one or simply read for inspiration.
            </p>
          </Link>

          <Link
            to="motivation"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">💪 Daily Motivation</h3>
            <p className="text-sm text-white/80">
              find the drive and enthusiasm to tackle your daily tasks and
              goals. staying focused and positive, even when things get tough.
            </p>
          </Link>

          <Link
            to="birthday"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">
              🎂 Birthday Wishes and Messages
            </h3>
            <p className="text-sm text-white/80">
              send warm thoughts and good vibes to someone on their special day!
            </p>
          </Link>

          <Link
            to="fatherhood"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">👨‍👧‍👦 Fatherhood</h3>
            <p className="text-sm text-white/80">
              Sharing words of wisdom, love, and appreciation for fathers. To
              reflect joys, challenges, and importance of a father's role.
            </p>
          </Link>

          <Link
            to="motherhood"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">👩‍👧‍👦 Motherhood</h3>
            <p className="text-sm text-white/80">
              All about celebrating the love, strength, and unique experiences
              of mothers. To capture the beauty and challenges of raising
              children.
            </p>
          </Link>

          <Link
            to="poems"
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">✨📜 Poems</h3>
            <p className="text-sm text-white/80">
              Heartfelt rhymes that might suit the moment and also soothe your
              soul.
            </p>
          </Link>
        </section>
      </div>
    </motion.div>
  );
};

export default Letters;
