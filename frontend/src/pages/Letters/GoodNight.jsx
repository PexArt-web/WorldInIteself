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

const GoodNight = () => {
  const nightData = useLoaderData();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80&sat=-100')",
      }}
    >
      <motion.div
        variants={containerVariants}
        className="bg-black/70 rounded-2xl p-10 max-w-md w-full shadow-lg"
      >
        <h1 className="text-5xl font-extrabold text-indigo-300 text-center mb-10 drop-shadow-lg">
          🌕Good Night
        </h1>

        <p className="text-center italic mb-8 text-indigo-200 drop-shadow">
          "The darker the night, the brighter the stars." ✨
        </p>

        <Suspense fallback={<SuspenseFallback />}>
          <Await resolve={nightData.goodNight}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-indigo-900/60 rounded-lg p-6 mb-4 text-center">
                    <h2 className="text-xl font-semibold text-indigo-300">
                      No messages tonight 🌙
                    </h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => (
                <motion.div
                  variants={childVariants}
                  key={data._id}
                  className="bg-indigo-900/70 rounded-lg p-6 mb-6 shadow-md hover:shadow-indigo-500 transition-shadow cursor-default hover:scale-[1.02]"
                >
                  <h2 className="text-2xl font-semibold text-indigo-200 mb-2 font-title">
                    {data.title}
                  </h2>
                  <p className="text-indigo-100 leading-relaxed">
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

export default GoodNight;
