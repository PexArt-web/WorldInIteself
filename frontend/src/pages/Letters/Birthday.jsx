import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import SuspenseFallback from "../Component/SuspenseFallback";
import { motion } from "framer-motion";

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
      type: "spring",
      stiffness: 70,
      damping: 20,
      duration: 2.4,
      ease: "easeOut",
    },
  },
};

const Birthday = () => {
  const birthdayData = useLoaderData();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-rose-100 flex items-center justify-center py-16 px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        variants={containerVariants}
        className="bg-white/70 backdrop-blur-xl border border-pink-200 rounded-3xl shadow-2xl px-8 py-10 max-w-3xl w-full"
      >
        <h1 className="text-5xl font-extrabold text-pink-700 mb-10 text-center tracking-tight drop-shadow-lg">
          <span className="animate-bounce text-6xl inline-block">🎂</span>
          <br />
          <span className="mt-2 inline-block">Birthday Wishes & Messages</span>
        </h1>

        <Suspense fallback={<SuspenseFallback />}>
          <Await resolve={birthdayData.birthday}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-pink-100/60 border border-pink-200 shadow-inner rounded-xl p-6 text-center">
                    <h2 className="text-2xl font-semibold text-pink-600">
                      No birthday messages yet 🎈
                    </h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => (
                <motion.div
                  variants={childVariants}
                  key={data._id}
                  className="bg-white/90 hover:bg-white transition-colors duration-200 shadow-md rounded-2xl p-6 mb-6 border border-pink-300"
                >
                  <h2 className="text-2xl font-bold text-pink-700 mb-3 text-center font-title">
                    {data.title}
                  </h2>
                  <p className="text-pink-900 leading-relaxed text-lg whitespace-pre-wrap mb-4">
                    {data.content}
                  </p>
                  <p className="text-right text-pink-600 font-script">
                    — {data.author}
                  </p>
                </motion.div>
              ));
            }}
          </Await>
        </Suspense>
      </motion.div>
    </motion.div>
  );
};

export default Birthday;
