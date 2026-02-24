import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound.tsx'
import { Matrix } from './pages/Matrix.tsx'
import { Ecomm } from './pages/Ecomm.tsx'
import { Psynapse } from './pages/Psynapse.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path = "matrix" element = {<Matrix />} />
          <Route path = "ecommbuzz" element = {<Ecomm />} />
          <Route path = "psynapse" element = {<Psynapse />} />
          <Route path = "*" element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
