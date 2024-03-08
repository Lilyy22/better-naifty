import { Route, Routes } from "react-router-dom";
import { AuthForm } from "./pages/dashboard/auth/components/AuthForm";
import { NotFound } from "./pages/NotFound";
import { DefaultLayout } from "./layouts/dashboard/DefaultLayout";
import { CourseForm } from "./pages/dashboard/course/CourseForm";
import { CourseGrid } from "./pages/dashboard/course/CourseGrid";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DefaultLayout />}>
        <Route path="course" element={<CourseForm />} />
        <Route path="courses" element={<CourseGrid />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
