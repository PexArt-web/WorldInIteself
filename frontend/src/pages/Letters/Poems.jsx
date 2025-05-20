import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import SuspenseFallback from "../Component/SuspenseFallback";

const Poems = () => {
  const poemsData = useLoaderData();

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9lbXxlbnwwfHwwfHx8MA%3D%3D"; 

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-12 px-4">
        <h1 className="text-5xl font-serif text-white font-extrabold text-center mb-10 drop-shadow-lg tracking-wide">
          Poems
        </h1>

        <Suspense
          fallback={
            <SuspenseFallback/>
          }
        >
          <Await resolve={poemsData.poems}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-xl p-6 m-4 max-w-md">
                    <h2 className="text-xl font-semibold text-center text-gray-800">
                      No poems found
                    </h2>
                  </div>
                );
              }

              return (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                  {resolvedData.data.map((data) => (
                    <div
                      key={data._id}
                      className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 max-w-sm mx-auto hover:scale-105 transition-transform duration-300"
                    >
                      <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
                        {data.title}
                      </h2>
                      <p className="text-gray-700 whitespace-pre-line leading-relaxed">
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

export default Poems;
