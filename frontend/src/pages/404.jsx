import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1067394416/photo/http-404-error-not-found-page.jpg?b=1&s=612x612&w=0&k=20&c=J-pg2AF8Ke1UhDDu97xeV8GaB6s594yCeF1yI36qMug=')",
      }}
    >
      <div className="bg-black/70 backdrop-blur-sm min-h-screen flex flex-col items-center justify-center px-8 py-16 max-w-lg text-center rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          404 — Page Not Found
        </h1>
        <p className="text-xl text-white/80 mb-10 leading-relaxed">
          Oops! The page you're looking for doesn’t exist or has been moved.
          But don't worry, you can always go back home.
        </p>
        <Link
          to="/"
          className="inline-block bg-pink-600 hover:bg-pink-700 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
