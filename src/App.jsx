import { createBrowserRouter, RouterProvider } from "react-router";
import Layouts from "./components/Layouts";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",

      Component: Layouts,
      children: [
        {
          path: "/",
          Component: HomePage,
        },
        {
          path: "/about",
          Component: AboutPage,
        },
      ],
    },
    {
      path: "/login",
      Component: LoginPage,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
