import { Link, useLocation, useRouteError } from "react-router-dom";

const PageLoadError = () => {
  const error = useRouteError();
  const errorMessage = "TypeError: Failed to fetch";
  const location = useLocation()
  const currentLocation = location.pathname
  return (
    <div className="text-center flex flex-col items-center justify-center h-screen">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">

      <h1 className="">Oops! Something went wrong.</h1>

      {errorMessage ? (
        <p>
          Network error: Unable to connect. Please check your internet
          connection and try again.
        </p>
      ) : (
        <p>
          An unexpected error occurred: { error.message}
        </p>
      )}
      <Link to={`${currentLocation}`} className="text-blue-500 hover:underline">
        Retry
      </Link>
      </div>
    </div>
  );
};

export default PageLoadError;
