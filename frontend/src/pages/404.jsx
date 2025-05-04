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
      <div className="bg-black/60 min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Sorry, the page you were looking for was not found
        </h1>
        <p className="text-lg text-white/80 mb-8">
          Oops, it seems like the page doesn't exist anymore or was moved to a
          new location.
        </p>
        <Link
          to="/"
          className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full text-lg font-medium shadow-lg transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
