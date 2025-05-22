import SharedButton from "@/Shared/SharedButton";
import SharedInput from "@/Shared/SharedInput";
import { useEffect, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const formVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const messageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const InkSpace = () => {
  const actionData = useActionData();
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    if (actionData?.data?.message) {
      setFormData({
        title: "",
        category: "",
        content: "",
        author: "",
      });
    }
  }, [actionData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-10 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80')",
      }}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="max-w-2xl mx-auto bg-black/60 p-8 rounded-xl backdrop-blur-md shadow-2xl"
        variants={formVariants}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">🖋️ InkSpace</h2>
        <Form method="post" className="space-y-4">
          <p className="text-center text-lg font-semibold">
            Write your letter and share it with the world!
          </p>
          <SharedInput
            type={"text"}
            name={"title"}
            placeholder={"Please Enter Your Title"}
            className={"w-full p-3 rounded bg-white/10 placeholder-white/70"}
            value={formData.title}
            onChange={handleChange}
            required={true}
          />

          <p className="text-center text-sm font-semibold">
            Select a category for your letter
          </p>

          <select
            name="category"
            className="w-full p-3 rounded bg-white/10 text-black"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Good Morning">🌅 Good Morning</option>
            <option value="Good Night">🌙 Good Night</option>
            <option value="Love Letters">💌 Love Letters</option>
            <option value="Motivation">🔥 Daily Motivation</option>
            <option value="Poems">📝 Poems</option>
            <option value="Birthday">🎂 Birthday Wishes</option>
            <option value="Fatherhood">👨‍👧‍👦 Fatherhood</option>
            <option value="Motherhood">👩‍👧‍👦 Motherhood</option>
          </select>
          <textarea
            name="content"
            placeholder="Start writing your letter..."
            className="w-full p-4 rounded h-40 resize-none bg-white/10 placeholder-white/70"
            value={formData.content}
            onChange={handleChange}
            required
          />
          <p className="text-center text-sm font-semibold">
            Add your name to the letter
          </p>
          <SharedInput
            type={"text"}
            name={"author"}
            placeholder={"Please Enter Your Name or Author Name"}
            className={"w-full p-3 rounded bg-white/10 placeholder-white/70"}
            value={formData.author}
            onChange={handleChange}
            required={true}
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SharedButton
              type={"submit"}
              className={
                "w-full bg-pink-500 hover:bg-pink-600 transition p-3 rounded font-semibold"
              }
              disabled={navigation.state === "submitting"}
              label={
                navigation.state === "submitting" ? "Submitting..." : "Submit"
              }
            />
          </motion.div>

          {actionData?.error && (
            <motion.p
              style={{ color: "red" }}
              className="text-center mt-2"
              variants={messageVariants}
              initial="hidden"
              animate="visible"
            >
              {actionData.error === "Error: read ECONNRESET"
                ? "Please check your network connection and try again"
                : actionData.error}
            </motion.p>
          )}
          {actionData?.data?.message && (
            <motion.p
              style={{ color: "green" }}
              className="text-center mt-2"
              variants={messageVariants}
              initial="hidden"
              animate="visible"
            >
              {actionData.data.message}
            </motion.p>
          )}
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default InkSpace;
