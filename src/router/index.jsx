import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layouts";
import { AboutUs } from "../pages/about-us";
import { Character } from "../pages/character/single";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { NotFound } from "../pages/not-found";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          children: [
            { index: true, element: <Contact /> },
            { path: "us", element: <h1>Contact us</h1> },
          ],
        },
        {
          path: "/characters/:id",
          element: <Character />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
