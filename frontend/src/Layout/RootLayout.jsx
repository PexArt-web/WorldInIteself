import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <main key={location.pathname}>
        <Outlet />
      </main>
    </AnimatePresence>
  );
};

export default RootLayout;
