import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const Motivation = () => {
  const motivationData = useLoaderData();
  console.log(motivationData, "motivationData");
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">Motivation</h1>
      <div className="flex flex-col items-center justify-center">
        <Suspense fallback={<p className="">Loading...</p>}>
          <Await resolve={motivationData.motivational}>
            {(resolvedData) => {
              if (resolvedData.data.length === 0) {
                return (
                  <div className="bg-white shadow-md rounded-lg p-4 m-4 w-80">
                    <h2 className="text-xl font-semibold">No data found</h2>
                  </div>
                );
              }
              return resolvedData.data.map((data) => {
                return (
                  <div
                    key={data._id}
                    className="bg-white shadow-md rounded-lg p-4 m-4 w-80"
                  >
                    <h2 className="text-xl font-semibold">{data.title}</h2>
                    <p className="text-gray-700">{data.content}</p>
                  </div>
                );
              });
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Motivation;
