import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import SharedAppLayout from "./components/SharedAppLayout";
import { Toaster } from "react-hot-toast";

// pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    element: <SharedAppLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/category/:category",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} gutter={8} />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
