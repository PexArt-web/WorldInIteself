import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import SuspenseFallback from "../Component/SuspenseFallback";

const GoodMorning = () => {
  const morningData = useLoaderData();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center bg-white/0 backdrop-blur-sm px-6 py-12">
        <h1 className="text-5xl font-bold text-yellow-600 text-center drop-shadow mb-8">
          ☀️ Good Morning!
        </h1>

        <Suspense fallback={<SuspenseFallback />}>
          <Await resolve={morningData.goodMorning}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-yellow-50/90 border border-yellow-200 shadow-md rounded-xl p-6 m-4 w-full max-w-md text-center">
                    <h2 className="text-xl font-semibold text-yellow-700">
                      No messages this morning 🌼
                    </h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => (
                <div
                  key={data._id}
                  className="bg-white/80 shadow-md rounded-xl p-6 m-4 w-full max-w-md border border-yellow-100 transition hover:shadow-lg hover:scale-[1.02]"
                >
                  <h2 className="text-xl font-semibold text-sky-800 mb-2 text-center">
                    {data.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
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

export default GoodMorning;
