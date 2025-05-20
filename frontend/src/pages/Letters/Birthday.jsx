import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import SuspenseFallback from "../Component/SuspenseFallback";

const Birthday = () => {
  const birthdayData = useLoaderData();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start py-12 px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl px-10 py-12 max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-10 text-center drop-shadow-lg flex items-center justify-center gap-3">
          <span className="text-5xl animate-bounce">🎂</span> Birthday Wishes &
          Messages
        </h1>

        <Suspense fallback={<SuspenseFallback />}>
          <Await resolve={birthdayData.birthday}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-pink-100/80 shadow-lg rounded-xl p-8 m-4 w-full text-center">
                    <h2 className="text-2xl font-semibold text-pink-700">
                      No birthday messages yet 🥺🎈
                    </h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => (
                <div
                  key={data._id}
                  className="bg-white/80 backdrop-blur-md border border-pink-300 rounded-xl shadow-md p-6 mb-6 w-full hover:shadow-pink-400 transition-shadow"
                >
                  <h2 className="text-2xl font-bold text-pink-600 mb-2">
                    {data.title}
                  </h2>
                  <p className="text-pink-800 leading-relaxed text-lg whitespace-pre-wrap">
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

export default Birthday;
