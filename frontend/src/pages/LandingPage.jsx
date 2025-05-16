import { Link } from "react-router-dom";
import Header from "./Component/Header";

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
        <Header />

        <main className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Discover Heartfelt Words That Speak to the Soul
          </h2>
          <p className="text-lg mb-8 text-pink-100">
            Dive into a world of beautifully written love letters, romantic good
            morning notes, and sweet goodnight messages. Let your heart be
            touched, one word at a time.
          </p>
          <Link
            to="letters"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg"
          >
            Check out Letters
          </Link>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
