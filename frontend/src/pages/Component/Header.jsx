import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // const isHomePage = location.pathname === "/";
  const isLettersPage = location.pathname === "/letters";
  return (
    <header className="w-full max-w-4xl mx-auto flex justify-between items-center mb-12 ">
      <h1 className="text-3xl font-bold tracking-wide">World In ItSelf</h1>
      <nav className="space-x-6 text-lg">
        {isLettersPage ? (
          <Link to="/" className="hover:text-pink-300 transition">
            Home
          </Link>
        ) : (
          <Link to="letters"> Letters </Link>
        )}
        <Link to="/about" className="hover:text-pink-300 transition">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
