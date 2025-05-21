import React from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import { motion } from "framer-motion";
import { lettersList } from "../Component/LettersList";

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: 80,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      when: "beforeChildren",
      delayChildren: 0.1,
      staggerChildren: 0.15,
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

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
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
          {lettersList.map((item, index) => (
            <motion.div
              variants={childVariants}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
              key={index}
            >
              <Link to={item.path}>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </Link>
            </motion.div>
          ))}
        </section>
      </div>
    </motion.div>
  );
};

export default Letters;
