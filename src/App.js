import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { DefaultLayout } from "./layouts/dashboard/DefaultLayout";
import { CourseForm } from "./pages/dashboard/course/CourseForm";
import { CourseGrid } from "./pages/dashboard/course/CourseGrid";
import { CourseTable } from "./pages/dashboard/course/CourseTable";
import { Profile } from "./pages/dashboard/profile/Profile";
import { SectionTable } from "./pages/dashboard/section/SectionTable";
import { SectionForm } from "./pages/dashboard/section/SectionForm";
import { CourseDetail } from "./pages/dashboard/course/CourseDetail";
import { EpisodeDetail } from "./pages/dashboard/episode/EpisodeDetail";
import { SignUp } from "./pages/dashboard/auth/SignUp";
import { LogIn } from "./pages/dashboard/auth/LogIn";
import { SectionDetail } from "./pages/dashboard/section/SectionDetail";
import { ScrollTop } from "./utils/scrollTop";
import Home from "./pages/landing/Home";
import Verify from "./pages/dashboard/auth/Verify";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dashboard */}
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="verify" element={<Verify />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DefaultLayout />}>
            <Route path="course-list" element={<CourseTable />} />
            <Route path="courses" element={<CourseGrid />} />
            <Route path="create-course" element={<CourseForm />} />
            <Route path="courses-detail" element={<CourseDetail />} />

            <Route path="section-list" element={<SectionTable />} />
            <Route path="create-section" element={<SectionForm />} />
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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
