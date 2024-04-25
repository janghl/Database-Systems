import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Artists from "./pages/Artists";
import Music from "./pages/Music";
import Friends from "./pages/Friends";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/music" element={<Music />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
