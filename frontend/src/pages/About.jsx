const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white px-6 py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black/60 backdrop-blur-sm p-10 rounded-xl max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-extrabold tracking-wide">
          🌍 World in Itself
        </h1>
        <p className="text-lg text-white/90">
          <strong>World in Itself</strong> is more than just a collection of
          letters. It's a journey through the heart, a canvas of emotions, and a
          tapestry of words that resonate with our deepest feelings. A quiet
          corner of the internet where words find their way into hearts it's a
          sanctuary for words that matter. A place where love speaks softly,
          mornings start warmly, and nights end with peace in the heart.
        </p>
        <p className="text-lg text-white/90">
          This platform was created to rekindle the charm of meaningful messages
          from <em>romantic notes</em> to <em>birthday wishes</em>,{" "}
          <em>daily motivation</em>, and poetic whispers that remind us we're
          human, and we feel.
        </p>
        <p className="text-lg text-white/90">
          Built for lovers, dreamers, and soul connectors, this space was born
          out of a desire to bring back the beauty of written affection. Whether
          it's a gentle <em>good morning</em>, a <em>warm goodnight</em>, a{" "}
          <em>heartfelt birthday wish</em>, or just a <em>poem </em> that says
          what your heart can’t. It’s not just about words it’s about
          connection.
        </p>
        <p className="text-lg text-white/90">
          Every piece you’ll find here is a small universe of emotion. Because
          sometimes, the right words <em>are a world in themselves</em>.
        </p>

        <div className="text-md max-w-2xl space-y-6 text-white/85">
          <p>
            ✍🏽 <span className="font-semibold">Words by Toqieso</span>
            <br />A lover of love, storyteller by heart, and pen behind the
            passion. Toqieso writes from the soul for anyone who still believes
            in the timeless magic of love notes.
          </p>

          <p>
            💻 <span className="font-semibold">Crafted by Pex</span>
            <br />
            Built with precision and care by Tech artisan Pex, who turned vision
            into code and made sure every pixel feels like poetry.
          </p>
        </div>

        <p className="text-lg text-white/90">
          Thank you for being a part of this journey. We hope you find the words
          that resonate with your heart.
        </p>

        <h2 className="text-xl font-semibold mt-4 italic text-pink-200">
          "Where every word is a universe."
        </h2>
      </div>
    </div>
  );
};

export default About;
