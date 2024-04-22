import React from "react";
import { useRole } from "./useRole";
import { DefaultLayout } from "../layouts/dashboard/DefaultLayout";
import { CourseTable } from "../pages/dashboard/course/CourseTable";
import EnrolledCourses from "../pages/dashboard/enroll/EnrolledCourses";
import { CreateCourse } from "../pages/dashboard/course/CreateCourse";
import { UpdateCourse } from "../pages/dashboard/course/UpdateCourse";
import ForumDescription from "../pages/dashboard/forum/ForumDescription";
import { CourseDetail } from "../pages/dashboard/course/CourseDetail";
import EnrolledDescription from "../pages/dashboard/enroll/EnrolledDescription";
import { SectionDetail } from "../pages/dashboard/section/SectionDetail";
import Home from "../pages/landing/Home";
import { Course } from "../pages/landing/Course";
import { About } from "../pages/landing/About";
import Blog from "../pages/landing/Blog";
import { BlogDetail } from "../pages/landing/BlogDetail";
import Layout from "../pages/dashboard/auth/components/Layout";
import { SignUp } from "../pages/dashboard/auth/SignUp";
import Verify from "../pages/dashboard/auth/Verify";
import Reset from "../pages/dashboard/auth/Reset";
import { Profile } from "../components/Profile";
import { EpisodeDetail } from "../pages/dashboard/episode/EpisodeDetail";
import { NotFound } from "../pages/NotFound";

export const useRoute = () => {
  let route = [
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
    // {
    //   path: "blog-read",
    //   element: <BlogDetail />,
    // },
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
  ];

  const { isAInstructor, isAStudent, isAdmin } = useRole();

  const instRoutes = [
    {
      path: "/dashboard",
      element: <DefaultLayout />,
      children: [
        {
          path: "courses-detail/:course_id",
          element: <CourseDetail />,
        },
        {
          path: "course-list/courses-description/:course_url/section/:section_url",
          element: <SectionDetail />,
        },
        {
          path: "course/:course_id/forum/:forum_id",
          element: <ForumDescription />,
        },
        {
          path: "course-list",
          element: <CourseTable />,
        },
        {
          path: "create-course",
          element: <CreateCourse />,
        },
        {
          path: "update-course/:course_id",
          element: <UpdateCourse />,
        },
      ],
    },
  ];

  const stuRoutes = [
    {
      path: "dashboard",
      element: <DefaultLayout />,
      children: [
        {
          path: "enrolled-courses",
          element: <EnrolledCourses />,
        },
        {
          path: "enrolled-courses/course/:course_id",
          element: <EnrolledDescription />,
        },
        {
          path: "enrolled-courses/course/:course_id/forum/:forum_id",
          element: <ForumDescription />,
        },
      ],
    },
  ];

  if (isAInstructor) {
    route = [...route, ...instRoutes];
  } else if (isAStudent) {
    route = [...route, ...stuRoutes];
  }

  return route;
};
