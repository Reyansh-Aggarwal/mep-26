import { Navigate, Route, Routes, useLocation } from "react-router";
import { useEffect, lazy, Suspense } from "react";
import { Preloader } from "./components/Preloader";
import { ExternalRedirect } from "./utils.tsx";
import { Results } from "./pages/Results.tsx";

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const Brochure = lazy(() => import("./pages/Brochure").then((m) => ({ default: m.Brochure })));
const MembersPage = lazy(() => import("./pages/MembersPage").then((m) => ({ default: m.MembersPage })));
const Alumni = lazy(() => import("./pages/Alumni").then((m) => ({ default: m.Alumni })));

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Preloader />
      <Suspense fallback={null}>
        <div key={pathname} className="animate-fade-in">
          <Routes>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="brochure" element={<Brochure />} />
            <Route path="members" element={<MembersPage />} />
            <Route path="alumni" element={<Alumni />} />
            <Route path="results" element={<Results />} />
            <Route path="register" element={<ExternalRedirect url="https://prettyform.addxt.com/a/form/vf/1FAIpQLScY9AS4102YUC6AMyXR7HiuaxUSHpXgSTHP8Pi-gQb42RBOFw" />} />
          </Routes>
        </div>
      </Suspense>
    </>
  )
}
