// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Chats from "./Components/Chats/Chats";
import Home from "./Components/Home.js/Home";
import Questions from "./Components/Questions/Questions";
import Main from "./layout/Main";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "/:id",
          loader: async ({ params }) => {
            return fetch(
              ` https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Questions></Questions>,
        },
        {
          path: "/chats",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Chats></Chats>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
