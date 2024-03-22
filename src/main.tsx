import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Projects from "./projects.tsx";
import Portfolio from "./portfolio.tsx";
import About from "./about.tsx";

import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

export const trpc = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ url: "http://localhost:3000" })],
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="md:pt-8">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
);
