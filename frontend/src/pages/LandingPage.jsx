const LandingPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black/0 bg-opacity-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <header className="w-full max-w-4xl mx-auto flex justify-between items-center mb-12">
          {/* <h1 className="text-3xl font-bold tracking-wide">SoulTyped</h1> */}
          <h1 className="text-3xl font-bold tracking-wide mb-10">World In ItSelf</h1>
          <nav className="space-x-6 text-lg">
            <a href="letters" className="hover:text-pink-300 transition">
              Letters
            </a>
            <a href="about" className="hover:text-pink-300 transition">
              About
            </a>
          </nav>
        </header>

        <main className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Discover Heartfelt Words That Speak to the Soul
          </h2>
          <p className="text-lg mb-8 text-pink-100">
            Dive into a world of beautifully written love letters, romantic good
            morning notes, and sweet goodnight messages. Let your heart be
            touched, one word at a time.
          </p>
          <a
            href="/letters"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg"
          >
            Check out Letters
          </a>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
