import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Posts";
import Artists from "./pages/Artists";
import Music from "./pages/Music";
import Friends from "./pages/Friends";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/music" element={<Music />} />
    </Routes>
  );
}

export default App;
