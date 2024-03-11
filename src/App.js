import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { DefaultLayout } from "./layouts/dashboard/DefaultLayout";
import { CreateCourse } from "./pages/dashboard/course/CreateCourse";
import { UpdateCourse } from "./pages/dashboard/course/UpdateCourse";
import { CourseGrid } from "./pages/dashboard/course/CourseGrid";
import { CourseTable } from "./pages/dashboard/course/CourseTable";
import { Profile } from "./pages/dashboard/profile/Profile";
import { SectionTable } from "./pages/dashboard/section/SectionTable";
import { CreateSection } from "./pages/dashboard/section/CreateSection";
import { CourseDetail } from "./pages/dashboard/course/CourseDetail";
import { EpisodeDetail } from "./pages/dashboard/episode/EpisodeDetail";
import { SignUp } from "./pages/dashboard/auth/SignUp";
import { LogIn } from "./pages/dashboard/auth/LogIn";
import { SectionDetail } from "./pages/dashboard/section/SectionDetail";
import { ScrollTop } from "./utils/scrollTop";
import Home from "./pages/landing/Home";
import Verify from "./pages/dashboard/auth/Verify";
import PrivateRoute from "./routes/PrivateRoute";
import { UpdateSection } from "./pages/dashboard/section/UpdateSection";
import { Course } from "./pages/landing/Course";
import { About } from "./pages/landing/About";
import Blog from "./pages/landing/Blog";

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        {/* landing */}
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Course />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />

        {/* auth */}
        <Route path="signup/:role?" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="verify" element={<Verify />} />

        {/* Dashboard */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DefaultLayout />}>
            {/* course */}
            <Route path="course-list" element={<CourseTable />} />
            <Route path="courses" element={<CourseGrid />} />
            <Route path="create-course" element={<CreateCourse />} />
            <Route path="update-course/:course_id" element={<UpdateCourse />} />
            <Route path="courses-detail" element={<CourseDetail />} />

            {/* section */}
            <Route path="section-list" element={<SectionTable />} />
            <Route path="create-section" element={<CreateSection />} />
            <Route
              path="update-section/:section_id"
              element={<UpdateSection />}
            />
            <Route
              path="section-list/:section_url"
              element={<SectionDetail />}
            />
            <Route
              path="courses/section/episode"
              element={<EpisodeDetail />}
              preventScrollReset={false}
            />

            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/dashboard/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
