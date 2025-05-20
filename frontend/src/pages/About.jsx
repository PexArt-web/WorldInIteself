import Header from "./Component/Header";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white px-6 py-16 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/40  bg-opacity-70 z-0 backdrop-blur-md" />
      <div className="relative z-10 max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl px-8 md:px-16 py-14 text-center shadow-2xl border border-white/10 space-y-8 animate-fadeIn">
        <Header />
        <h1 className="text-5xl font-extrabold tracking-tight text-pink-100 drop-shadow">
          🌍 World in Itself
        </h1>

        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          <strong className="text-pink-200">World in Itself</strong> isn’t just
          a collection of letters — it’s a sanctuary for emotions, a space where
          the unspoken is said, and the heart has its own language. Here, every
          word is chosen with care, every sentence a reflection of love, loss,
          healing, and hope.
        </p>

        <p className="text-lg md:text-xl text-white/85 leading-relaxed">
          Created to rekindle the soul-touching charm of written words — from{" "}
          <em>romantic whispers</em> to <em>birthday warmth</em>,{" "}
          <em>midday encouragements</em>, and <em>poetic stargazing</em>. It’s a
          place where letters aren’t just read — they’re felt.
        </p>

        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
          For lovers, feelers, and dreamers — this is for you. Whether it's a{" "}
          <em>gentle good morning</em>, a <em>midnight poem</em>, or a{" "}
          <em>message that knows exactly how you feel</em>... this space was
          born for connection.
        </p>

        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
          Every piece you find here is a mini-universe of emotion. Because
          sometimes, the right words are more than just words — they’re a whole
          world in themselves.
        </p>

        <div className="border-t border-white/20 pt-8 text-white/80 space-y-6 text-sm md:text-base font-light">
          <p>
            ✍🏽{" "}
            <span className="font-semibold text-pink-200">
              Words by Toqieso
            </span>
            <br />
            Lover of love. Storyteller by nature. Toqieso writes from the soul
            for those who still believe in handwritten magic.
          </p>

          <p>
            💻{" "}
            <span className="font-semibold text-pink-200">Crafted by Pex</span>
            <br />
            Designed and developed with heart by digital artisan Pex — the hands
            behind the code, and the mind that turned this dream into digital
            reality.
          </p>
        </div>

        <p className="text-lg md:text-xl text-white/85 italic mt-6">
          Thank you for being part of this journey. We hope you find the words
          that speak to your soul.
        </p>

        <h2 className="text-2xl font-semibold italic text-pink-300 mt-4">
          “Where every word is a universe.”
        </h2>
      </div>
    </div>
  );
};

export default About;
