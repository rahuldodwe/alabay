import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLaypot from "./layouts/app-layout";
import Home from "./pages/home/Home";
import Discover from "./pages/discover/Discover";

const router = createBrowserRouter([
  {
    element: <AppLaypot />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
