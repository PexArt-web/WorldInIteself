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
const GoodMorning = () => {
  const morningData = useLoaderData();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center bg-white/0 backdrop-blur-sm px-6 py-12"
        variants={containerVariants}
        
      >
        <h1 className="text-5xl font-bold text-yellow-600 text-center drop-shadow mb-8 font-title">
          ☀️ Good Morning!
        </h1>

        <Suspense fallback={<SuspenseFallback />}>
          <Await resolve={morningData.goodMorning}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-yellow-50/90 border border-yellow-200 shadow-md rounded-xl p-6 m-4 w-full max-w-md text-center">
                    <h2 className="text-xl font-semibold text-yellow-700 font-body">
                      No messages this morning 🌼
                    </h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => (
                <motion.div
                  variants={childVariants}
                  key={data._id}
                  className="bg-white/80 shadow-md rounded-xl p-6 m-4 w-full max-w-md border border-yellow-100 transition hover:shadow-lg hover:scale-[1.02]"
                >
                  <h2 className="text-xl font-semibold text-sky-800 mb-2 text-center font-title" >
                    {data.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-body">
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

export default GoodMorning;
