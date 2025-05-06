import { useState } from "react";

const Inkspace = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
  });

  const handleChange = (e) => {
    alert("e.target.name: " + e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Saved:", data);
      alert("Post submitted successfully!");
      setFormData({ title: "", category: "", content: "" });
    } catch (err) {
      console.error("Error posting:", err);
      alert("Failed to post.");
    }
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
        <h2 className="text-3xl font-bold mb-6 text-center">🖋️ Inkspace</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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


          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition p-3 rounded font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inkspace;
