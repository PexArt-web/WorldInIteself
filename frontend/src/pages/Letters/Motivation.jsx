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
const Motivation = () => {
  const motivationData = useLoaderData();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-16 px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1950&q=80')", // epic mountain sunrise
      }}
    >
      <motion.div
        variants={containerVariants}
        className="bg-black/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-12 max-w-3xl w-full border border-white/20"
      >
        <h1 className="text-5xl font-extrabold text-center text-white mb-10 flex items-center justify-center gap-3 tracking-wide drop-shadow-md">
          💪 Motivation
        </h1>

        <Suspense fallback={<SuspenseFallback />}>
          <Await resolve={motivationData.motivational}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl text-center p-6 border border-white/10">
                    <h2 className="text-2xl font-semibold text-white drop-shadow">
                      No motivational quotes found 🔍
                    </h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => (
                <motion.div
                  variants={childVariants}
                  key={data._id}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-6 border border-gray-200 shadow-md transition hover:shadow-yellow-300"
                >
                  <h2 className="text-2xl font-semibold text-yellow-700 mb-2 text-center font-title">
                    {data.title}
                  </h2>
                  <p className="text-gray-800 leading-relaxed text-lg whitespace-pre-wrap">
                    {data.content}
                  </p>
                  <p className="font-script text-right">-{data.author}</p>
                </motion.div>
              ));
            }}
          </Await>
        </Suspense>
      </motion.div>
    </motion.div>
  );
};

export default Motivation;
