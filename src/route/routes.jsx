import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../comonents/About";
import ContactUs from "../comonents/ContactUs.jsx";
import Error from "../comonents/Error.jsx";
import Body from "../comonents/Body.jsx";
import Cart from "../comonents/Cart.jsx";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
