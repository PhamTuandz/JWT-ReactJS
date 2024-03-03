import "./App.scss";
import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <h3>Home</h3>
          </>
        ),
      },
      { path: "/news", element: <></> },
      { path: "/about", element: <></> },
      { path: "/contact", element: <></> },
    ],
  },
  { path: "/login", element: <Login /> }
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
