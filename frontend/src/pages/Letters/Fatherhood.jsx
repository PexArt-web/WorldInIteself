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
const Fatherhood = () => {
  const fatherHoodData = useLoaderData();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start py-12 px-6"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1468298490/photo/happy-father-son-and-daughter-walking-in-a-field-towards-nature-sunset.jpg?s=612x612&w=0&k=20&c=_AJgfF1NuMc1PYanU-iiWe4AlE0NJwvoBz5urcY8QQY=')",
      }}
    >
      <motion.div
        variants={containerVariants}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl px-10 py-12 max-w-2xl w-full"
      >
        <h1 className="text-4xl font-extrabold text-blue-800 mb-10 text-center drop-shadow-lg flex items-center justify-center gap-3">
          <span className="text-5xl animate-bounce">👨‍👧‍👦</span> Fatherhood
        </h1>

        <Suspense fallback={<SuspenseFallback />}>
          <Await resolve={fatherHoodData.fatherHood}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-blue-100/80 shadow-lg rounded-xl p-8 m-4 w-full text-center">
                    <h2 className="text-2xl font-semibold text-blue-700">
                      No reflections yet 👔
                    </h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => (
                <motion.div
                  variants={childVariants}
                  key={data._id}
                  className="bg-white/85 backdrop-blur-sm border border-blue-200 rounded-xl shadow-md p-6 mb-6 w-full hover:shadow-blue-400 transition-shadow"
                >
                  <h2 className="text-2xl font-bold text-blue-800 mb-2 font-title">
                    {data.title}
                  </h2>
                  <p className="text-blue-900 leading-relaxed text-lg whitespace-pre-wrap">
                    {data.content}
                  </p>
                  <p className="font-script text-right">- {data.author}</p>
                </motion.div>
              ));
            }}
          </Await>
        </Suspense>
      </motion.div>
    </motion.div>
  );
};

export default Fatherhood;
