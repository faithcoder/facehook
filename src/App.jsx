import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<ProfilePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
