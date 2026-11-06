import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { CartPage } from "../../pages/CartPage";
import { DetailsPage } from "../../pages/DetailsPage";
import { Layout } from "../Layout";
import { CategoryPage } from "../../pages/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/products/:id",
        element: <DetailsPage />,
      },
      {
        path: "/category/:slug",
        element: <CategoryPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
