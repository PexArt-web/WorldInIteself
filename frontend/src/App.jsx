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
