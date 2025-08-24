import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Template from './Template';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Comments from './pages/Comments';
import Profile from './pages/Profile';
import Likes from './pages/Likes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/comments/:id",
        element: <Comments />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/likes/:id",
        element: <Likes />,
      },
    ]
  }
])

export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}
