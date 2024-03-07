import { Route, Routes } from "react-router-dom";
import { AuthForm } from "./pages/dashboard/auth/components/AuthForm";

function App() {
  return (
    <Routes>
      <Route path="/signup/:role?" element={<AuthForm />} />
    </Routes>
  );
}

export default App;
