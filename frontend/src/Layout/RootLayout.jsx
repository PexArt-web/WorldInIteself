import { Outlet, useLoaderData } from "react-router-dom";

const RootLayout = () => {
  const letterData = useLoaderData();
  return (
    <div>
      <main>
        <Outlet context={{ letterData }} />
      </main>
    </div>
  );
};

export default RootLayout;
