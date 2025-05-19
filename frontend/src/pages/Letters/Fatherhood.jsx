import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const Fatherhood = () => {
  const fatherHoodData = useLoaderData();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start py-12 px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl px-10 py-12 max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-10 text-center drop-shadow-lg flex items-center justify-center gap-3">
          <span className="text-5xl animate-bounce">👨‍👧‍👦</span> Fatherhood
        </h1>

        <Suspense
          fallback={
            <p className="text-blue-700 text-center text-lg font-semibold">
              Loading wisdom and dad jokes...
            </p>
          }
        >
          <Await resolve={fatherHoodData.fatherHood}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-blue-100/80 shadow-lg rounded-xl p-8 m-4 w-full text-center">
                    <h2 className="text-2xl font-semibold text-blue-700">
                      No reflections yet 👔
                    </h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => (
                <div
                  key={data._id}
                  className="bg-white/85 backdrop-blur-sm border border-blue-200 rounded-xl shadow-md p-6 mb-6 w-full hover:shadow-blue-400 transition-shadow"
                >
                  <h2 className="text-2xl font-bold text-blue-800 mb-2">
                    {data.title}
                  </h2>
                  <p className="text-blue-900 leading-relaxed text-lg whitespace-pre-wrap">
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

export default Fatherhood;
