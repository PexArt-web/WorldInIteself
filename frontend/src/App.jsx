import NotFound from "./pages/404";
import About from "./pages/About";
import Inkspace from "./pages/Author-Panel/Author";
import LandingPage from "./pages/LandingPage"
import Letters from "./pages/Letters/Letters"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route index element={<LandingPage />} />
        <Route path="letters" element={<Letters />} />
        <Route path="about" element={<About />} />
        <Route path="author-panel/inkspace" element={<Inkspace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
