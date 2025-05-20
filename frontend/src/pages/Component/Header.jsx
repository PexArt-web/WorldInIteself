import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLettersPage = location.pathname === "/letters";
  const isAboutPage = location.pathname === "/about";
  return (
    <header className="w-full max-w-6xl mx-auto flex justify-between items-center mb-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-pink-200">
        World In ItSelf
      </h1>
      <nav className="space-x-6 text-lg font-medium">
        {isHomePage && (
          <>
            <Link
              to="/letters"
              className="hover:text-pink-400 transition duration-200"
            >
              Letters
            </Link>

            <Link
              to="/about"
              className="hover:text-pink-400 transition duration-200"
            >
              About
            </Link>
          </>
        )}

        {isLettersPage && (
          <>
            <Link
              to="/"
              className="hover:text-pink-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-pink-400 transition duration-200"
            >
              About
            </Link>
          </>
        )}

        {isAboutPage && (
          <>
            <Link
              to="/"
              className="hover:text-pink-400 transition duration-200"
            >
              Home
            </Link>

            <Link
              to="/letters"
              className="hover:text-pink-400 transition duration-200"
            >
              Letters
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
