import React from "react";

const Letters = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black/50 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <header className="w-full max-w-4xl mx-auto flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold tracking-wide">SoulTyped</h1>
          <nav className="space-x-6 text-lg">
            {/* <a href="#" className="hover:text-pink-300 transition">
              Letters
            </a> */}
            <a href="#" className="hover:text-pink-300 transition">
              About
            </a>
          </nav>
        </header>

        <main className="text-center max-w-2xl mb-16">
          <h2 className="text-4xl font-bold mb-6">Messages From the Heart</h2>
          <p className="text-lg mb-8">
            Explore heartwarming love letters, uplifting good morning wishes, and
            soothing goodnight notes — all crafted to inspire and connect.
          </p>
          {/* <a
            href="#"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg"
          >
            Read a Message
          </a> */}
        </main>

        <section className="w-full max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">🌅 Good Morning Messages</h3>
            <p className="text-sm text-white/80">
              Start your day with warmth and positivity — browse sweet good morning
              wishes perfect for sending to someone special.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">🌙 Goodnight Notes</h3>
            <p className="text-sm text-white/80">
              End the night with love — thoughtful messages to bring peace, comfort,
              and connection before bed.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">💌 Love Letters</h3>
            <p className="text-sm text-white/80">
              Deep, meaningful letters to express emotions, appreciation, and affection.
              Send one or simply read for inspiration.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Letters;
