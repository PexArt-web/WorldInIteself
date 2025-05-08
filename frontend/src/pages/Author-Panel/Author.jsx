import SharedButton from "@/Shared/SharedButton";
import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";

const InkSpace = () => {
  const actionData = useActionData();
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    author: ""
  });

  const handleChange = (e) => {
    // alert("e.target.name: " + e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-10 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="max-w-2xl mx-auto bg-black/60 p-8 rounded-xl backdrop-blur-md shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">🖋️ InkSpace</h2>
        <Form method="post" className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full p-3 rounded bg-white/10 placeholder-white/70"
            value={formData.title}
            onChange={handleChange}
            required
          />
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

          <input
            type="text"
            name="author"
            placeholder="crafted by"
            className="w-full p-3 rounded bg-white/10 placeholder-white/70"
            value={formData.author}
            onChange={handleChange}
            required
          />

          <SharedButton
            type={"submit"}
            className={
              "w-full bg-pink-500 hover:bg-pink-600 transition p-3 rounded font-semibold"
            }
            disabled={navigation.state === "submitting"}
            label={navigation.state === "submitting" ? "Submitting..." : "Submit"}
          />

          {actionData?.error && (
            <p style={{ color: "red" }} className="text-center mt-2">
              {actionData.error === "Error: read ECONNRESET"
                ? "Please check your network connection and try again"
                : actionData.error}
            </p>
          )}
          {actionData?.data?.message && (
            <p style={{ color: "green" }} className="text-center mt-2">
              {actionData.data.message}
            </p>
          )}
        </Form>
      </div>
    </div>
  );
};

export default InkSpace;
