import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from "./pages/Home/Home.jsx"
import Apod from "./pages/Apod/Apod.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apod" element={<Apod />} />
      </Routes>
    </Router>
  )
}

export default App
