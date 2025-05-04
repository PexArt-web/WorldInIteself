const Letters = () => {
  return (
    <div>
      <section className="w-full max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">
            🌅 Good Morning Messages
          </h3>
          <p className="text-sm text-white/80">
            Start your day with warmth and positivity — browse sweet good
            morning wishes perfect for sending to someone special.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">🌙 Goodnight Notes</h3>
          <p className="text-sm text-white/80">
            End the night with love — thoughtful messages to bring peace,
            comfort, and connection before bed.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">💌 Love Letters</h3>
          <p className="text-sm text-white/80">
            Deep, meaningful letters to express emotions, appreciation, and
            affection. Send one or simply read for inspiration.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Letters;
