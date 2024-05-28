"use client";

import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { DefaultLayout } from "./layouts/dashboard/DefaultLayout";
import { CreateCourse } from "./pages/dashboard/course/CreateCourse";
import { UpdateCourse } from "./pages/dashboard/course/UpdateCourse";
import { CourseGrid } from "./pages/dashboard/course/CourseGrid";
import { CourseTable } from "./pages/dashboard/course/CourseTable";
import { Profile } from "./pages/dashboard/profile/Profile";
import { CourseDetail } from "./pages/dashboard/course/CourseDetail";
import { EpisodeDetail } from "./pages/dashboard/episode/EpisodeDetail";
import { SignUp } from "./pages/dashboard/auth/SignUp";
import { LogIn } from "./pages/dashboard/auth/LogIn";
import { SectionDetail } from "./pages/dashboard/section/SectionDetail";
import { ScrollTop } from "./utils/scrollTop";
import Home from "./pages/landing/Home";
import Verify from "./pages/dashboard/auth/Verify";
import PrivateRoute from "./routes/PrivateRoute";
import { Course } from "./pages/landing/Course";
import { About } from "./pages/landing/About";
import { BlogDetail } from "./pages/landing/BlogDetail";
import Blog from "./pages/landing/Blog";
import EnrolledCourses from "./pages/dashboard/enroll/EnrolledCourses";
import CourseCategoryList from "./pages/dashboard/courseCategory/CourseCategoryList";
import Dashboard from "./pages/dashboard/dashboard/Dashboard";
import CreateCategory from "./pages/dashboard/courseCategory/CreateCategory";
import CategoryTable from "./pages/dashboard/courseCategory/CategoryTable";
import UpdateCategory from "./pages/dashboard/courseCategory/UpdateCategory";
import CourseList from "./pages/dashboard/admin/CourseList";
import AlreadyLogged from "./routes/AlreadyLogged";
import { CourseDescription } from "./pages/dashboard/course/CourseDescription";
import Layout from "./pages/dashboard/auth/components/Layout";
import Reset from "./pages/dashboard/auth/Reset";
import EnrolledDescription from "./pages/dashboard/enroll/EnrolledDescription";
import ForumDescription from "./pages/dashboard/forum/ForumDescription";
import { useRole } from "./hooks/useRole";
import { useCheckOnlineStatus } from "./hooks/useCheckOnlineStatus";
import StudentAssessment from "./pages/dashboard/assessment/StudentAssessment";
import EnrolledMiddleware from "./routes/EnrolledMiddleware";
import VerifyResetOtp from "./pages/dashboard/auth/VerifyResetOtp";
import { ResetPassword } from "./pages/dashboard/auth/ResetPassword";
import AdminList from "./pages/dashboard/admin/AdminList";
import StudentList from "./pages/dashboard/admin/StudentList";
import InstructorList from "./pages/dashboard/admin/InstructorList";

function App() {
  const { isAInstructor, isAStudent, isAdmin } = useRole();
  const isOnline = useCheckOnlineStatus();
  return (
    <>
      <ScrollTop />
      {isOnline ? (
        <Routes>
          {/* landing */}
          <Route path="/" element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-read" element={<BlogDetail />} />

          {/* auth */}
          <Route path="/" element={<Layout />}>
            <Route path="signup/:role?" element={<SignUp />} />
            <Route element={<AlreadyLogged />}>
              <Route path="/login" element={<LogIn />} />
            </Route>
            <Route path="verify" element={<Verify />} />
            <Route path="reset" element={<Reset />} />
            <Route path="verify-reset" element={<VerifyResetOtp />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>

          {/* Dashboard */}
          <Route element={<PrivateRoute />}>
            {isAStudent && (
              <Route element={<EnrolledMiddleware />}>
                <Route
                  path="/assessment/:course_id"
                  element={<StudentAssessment />}
                />
              </Route>
            )}
            <Route path="/dashboard" element={<DefaultLayout />}>
              {/* course */}
              <Route exact path="/dashboard/" element={<Dashboard />} />
              <Route path="courses" element={<CourseGrid />} />
              <Route
                path="courses-detail/:course_id"
                element={<CourseDetail />}
              />
              <Route
                path="courses/:category_id"
                element={<CourseCategoryList />}
              />
              <Route path="profile" element={<Profile />} />

              {(isAInstructor || isAdmin) && (
                <>
                  <Route path="course-list" element={<CourseTable />} />
                  <Route path="create-course" element={<CreateCourse />} />
                  <Route
                    path="update-course/:course_id"
                    element={<UpdateCourse />}
                  />
                  <Route
                    path="course/:course_id/forum/:forum_id"
                    element={<ForumDescription />}
                  />
                  <Route
                    path="course-list/courses-description/:course_id"
                    element={<CourseDescription />}
                  />
                  <Route
                    path="course-list/courses-description/:course_url/section/:section_url"
                    element={<SectionDetail />}
                  />
                </>
              )}

              {isAStudent && (
                <>
                  <Route element={<EnrolledMiddleware />}>
                    <Route
                      path="courses/:course_id/section/episode/:episode_id"
                      element={<EpisodeDetail />}
                      preventScrollReset={false}
                    />
                  </Route>
                  <Route
                    path="enrolled-courses/course/:course_id"
                    element={<EnrolledDescription />}
                  />
                  <Route
                    path="enrolled-courses"
                    element={<EnrolledCourses />}
                  />
                  <Route
                    path="enrolled-courses/course/:course_id/forum/:forum_id"
                    element={<ForumDescription />}
                  />
                </>
              )}
              {isAdmin && (
                <>
                  <Route
                    path="courses/:course_id/section/episode/:episode_id"
                    element={<EpisodeDetail />}
                    preventScrollReset={false}
                  />
                  <Route
                    path="enrolled-courses/course/:course_id"
                    element={<EnrolledDescription />}
                  />
                  <Route
                    path="enrolled-courses"
                    element={<EnrolledCourses />}
                  />
                  <Route
                    path="enrolled-courses/course/:course_id/forum/:forum_id"
                    element={<ForumDescription />}
                  />
                </>
              )}

              {isAdmin && (
                <>
                  <Route path="all-courses" element={<CourseList />} />
                  <Route
                    path="approved-courses"
                    element={<CourseList approved={true} />}
                  />

                  {/* users */}
                  <Route path="administrators" element={<AdminList />} />
                  <Route path="student-users" element={<StudentList />} />
                  <Route path="instructor-users" element={<InstructorList />} />

                  {/* category */}
                  <Route path="create-category" element={<CreateCategory />} />
                  <Route
                    path="update-category/:category_id"
                    element={<UpdateCategory />}
                  />
                  <Route path="categories" element={<CategoryTable />} />
                </>
              )}
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <div className="w-full flex items-center justify-center h-[60vh]">
          <div className="max-w-lg mx-auto">
            <div className="flex gap-4 justify-center">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material/24/wifi-off.png"
                alt="wifi-off"
              />
              <p className="text-center text-xl font-bold text-gray-500">
                You're offline.
              </p>
            </div>
            <p className="text-center text-sm text-gray-500">
              Please check your internet connection.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
