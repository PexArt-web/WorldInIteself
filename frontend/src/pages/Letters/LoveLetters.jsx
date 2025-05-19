import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const LoveLetters = () => {
  const loveData = useLoaderData();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start py-12 px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517867065801-e20f409696b0')",
      }}n
    >
      <div className="bg-white/0 backdrop-blur-md rounded-2xl shadow-2xl px-10 py-12 max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-rose-700 mb-10 text-center flex items-center justify-center gap-3 drop-shadow-lg">
          <span className="animate-pulse text-5xl">💖</span> Love Letters
        </h1>

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
                  <div className="bg-rose-100/80 shadow-lg rounded-2xl p-8 m-4 w-full text-center">
                    <h2 className="text-2xl font-semibold text-rose-700">
                      No letters yet 💖
                    </h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => (
                <div
                  key={data._id}
                  className="bg-white/10 shadow-md rounded-xl p-6 mb-6 w-full border border-rose-300 hover:shadow-rose-400 transition-shadow cursor-default"
                >
                  <h2 className="text-2xl font-semibold text-rose-600 mb-2 text-center">
                    {data.title}
                  </h2>
                  <p className="text-rose-800 leading-relaxed text-lg whitespace-pre-wrap">
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
