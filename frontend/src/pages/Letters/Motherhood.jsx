import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import SuspenseFallback from "../Component/SuspenseFallback";

const Motherhood = () => {
  const motherHoodData = useLoaderData();

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80";

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0" />

      <div className="relative z-10 px-6 py-12 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg mb-10">
          Motherhood
        </h1>

        <Suspense fallback={<SuspenseFallback />}>
          <Await resolve={motherHoodData.motherHood}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 max-w-md mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center">
                      No data found
                    </h2>
                  </div>
                );
              }

              return (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                  {resolvedData.data.map((data) => (
                    <div
                      key={data._id}
                      className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 max-w-sm mx-auto hover:scale-105 transition-transform duration-300"
                    >
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {data.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {data.content}
                      </p>
                    </div>
                  ))}
                </div>
              );
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Motherhood;
