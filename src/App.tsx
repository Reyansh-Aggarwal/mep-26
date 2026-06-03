import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Home } from "./pages/Home";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
