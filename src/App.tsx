import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App