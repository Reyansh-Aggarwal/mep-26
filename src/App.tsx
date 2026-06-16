import { Navigate, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Brochure } from "./pages/Brochure";

export default function App() {

  return (
    <Routes>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="home" element={<Home />} />
      <Route path="brochure" element={<Brochure />} />

    </Routes>
  )
}
