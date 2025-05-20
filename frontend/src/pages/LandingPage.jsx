import { Link } from "react-router-dom";
import Header from "./Component/Header";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      scale: {
        stiffness: 28,
        type: "spring",
        bounce: 0.5,
      },
    },
  },
  whileHover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const LandingPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 bg-opacity-60 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-6 py-10">
        <Header />

        <main className="text-center max-w-3xl bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-extrabold text-pink-100 mb-6 leading-tight drop-shadow-md">
            Discover Heartfelt Words That Speak to the Soul
          </h2>
          <p className="text-lg md:text-xl text-pink-200 mb-10 tracking-wide">
            Dive into a world of beautifully written love letters, romantic
            notes, and sweet messages. Let your heart be touched, one word at a
            time.
          </p>

          <Link
            to="/letters"
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Read Letters
          </Link>
        </main>

        <div className="mt-20 text-sm text-pink-200 opacity-60">
          © {new Date().getFullYear()} World In ItSelf. All rights reserved.
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
