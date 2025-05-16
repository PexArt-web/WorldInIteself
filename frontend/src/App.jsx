import { AuthorAction } from "./handler/AuthorAction";
import RootLayout from "./Layout/RootLayout";
import NotFound from "./pages/404";
import About from "./pages/About";
import Inkspace from "./pages/Author-Panel/Author";
import LandingPage from "./pages/LandingPage";
import Birthday from "./pages/Letters/Birthday";
import GoodMorning from "./pages/Letters/GoodMorning";
import GoodNight from "./pages/Letters/GoodNight";
import Letters from "./pages/Letters/Letters";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Poems from "./pages/Letters/Poems";
import Motivation from "./pages/Letters/Motivation";
import Motherhood from "./pages/Letters/Motherhood";
import Fatherhood from "./pages/Letters/Fatherhood";
import LoveLetters from "./pages/Letters/LoveLetters";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="letters/">
          <Route index element={<Letters />} />
          <Route path="goodmorning" element={<GoodMorning />} />
          <Route path="goodnight" element={<GoodNight />} />
          <Route path="birthday" element={<Birthday />} />
          <Route path="poems" element={<Poems />} />
          <Route path="motivation" element={<Motivation />} />
          <Route path="motherhood" element={<Motherhood />} />
          <Route path="fatherhood" element={<Fatherhood />} />
          <Route path="love-letters" element={<LoveLetters />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route
          path="author-panel/inkspace"
          action={AuthorAction}
          element={<Inkspace />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
