const LandingPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <header className="w-full max-w-4xl mx-auto flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold tracking-wide">SoulTyped</h1>
          <nav className="space-x-6 text-lg">
            <a href="#" className="hover:text-pink-300 transition">
              Letters
            </a>
            <a href="#" className="hover:text-pink-300 transition">
              About
            </a>
            <a href="#" className="hover:text-pink-300 transition">
              Write
            </a>
          </nav>
        </header>

        <main className="text-center max-w-2xl">
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Write What Your Heart Can't Say Out Loud
          </h2>
          <p className="text-lg mb-8 text-pink-100">
            A safe, beautiful space to share your thoughts, your emotions, and
            your love — one message at a time.
          </p>
          <a
            href="#"
            className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full text-lg font-medium shadow-lg transition"
          >
            Start Writing
          </a>
        </main>

        <footer className="mt-20 text-sm text-pink-100">
          &copy; {new Date().getFullYear()} SoulTyped. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
