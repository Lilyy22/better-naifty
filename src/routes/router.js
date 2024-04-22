import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/landing/Home";
import { NotFound } from "../pages/NotFound";
import { Profile } from "../components/Profile";
import { EpisodeDetail } from "../pages/dashboard/episode/EpisodeDetail";
import { DefaultLayout } from "../layouts/dashboard/DefaultLayout";
import { Course } from "../pages/landing/Course";
import { About } from "../pages/landing/About";
import Blog from "../pages/landing/Blog";
import { BlogDetail } from "../pages/landing/BlogDetail";
import Layout from "../pages/dashboard/auth/components/Layout";
import Verify from "../pages/dashboard/auth/Verify";
import Reset from "../pages/dashboard/auth/Reset";
import { SignUp } from "../pages/dashboard/auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "course",
    element: <Course />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "blog-read",
    element: <BlogDetail />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "blog-read",
        element: <BlogDetail />,
      },
      {
        path: "signup/:role?",
        element: <SignUp />,
      },
      {
        path: "verify",
        element: <Verify />,
      },
      {
        path: "reset",
        element: <Reset />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DefaultLayout />,
    children: [
      // {
      //   path: "/",
      //   element: <Dashboard />,
      // },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "courses/section/episode/:episode_id",
        element: <EpisodeDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
