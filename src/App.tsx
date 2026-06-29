import { Navigate, Route, Routes, useLocation } from "react-router";
import { Home } from "./pages/Home";
import { Brochure } from "./pages/Brochure";
import { MembersPage } from "./pages/MembersPage";
import { Alumni } from "./pages/Alumni";
import { useEffect } from "react";
import { Preloader } from "./components/Preloader";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Preloader />
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="brochure" element={<Brochure />} />
        <Route path="members" element={<MembersPage />} />
        <Route path="alumni" element={<Alumni />} />
      </Routes>
    </>
  )
}
