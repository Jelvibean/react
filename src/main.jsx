import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import Posts, { loader as PostLoader } from "./routes/Posts";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
import "./index.css";

// loader below accepts a function and the element Post will wait until loader executes.
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: PostLoader, //this of this as the piece that will load your fetching data
        // and <Post /> will not render until it gets back a promise from loader.
        //action as seen in this next line is also a feature of reat-router.
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
