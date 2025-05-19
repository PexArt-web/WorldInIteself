import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const LoveLetters = () => {
  const loveData = useLoaderData();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-12 px-6 bg-gradient-to-br from-pink-200 via-red-200 to-rose-300"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1661596800000-flowers-in-envelope-and-red-confetti-on-pink-background.jpg')"
      }}
    >
      <h1 className="text-4xl font-extrabold text-rose-700 mb-10 flex items-center gap-3 drop-shadow-lg">
        <span className="animate-pulse text-5xl">❤️</span> Love Letters
      </h1>

      <div className="flex flex-col items-center justify-center w-full max-w-xl">
        <Suspense
          fallback={
            <p className="text-rose-600 text-center text-lg font-semibold">
              Loading your love letters...
            </p>
          }
        >
          <Await resolve={loveData.loveLetters}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-rose-100 shadow-lg rounded-2xl p-8 m-4 w-full text-center">
                    <h2 className="text-2xl font-semibold text-rose-700">
                      No love letters yet 💌
                    </h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => (
                <div
                  key={data._id}
                  className="bg-white shadow-lg rounded-2xl p-6 mb-6 w-full border border-rose-300 hover:shadow-rose-400 transition-shadow cursor-default"
                >
                  <h2 className="text-2xl font-semibold text-rose-600 mb-3">
                    {data.title}
                  </h2>
                  <p className="text-rose-700 leading-relaxed text-lg whitespace-pre-wrap">
                    {data.content}
                  </p>
                </div>
              ));
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default LoveLetters;
