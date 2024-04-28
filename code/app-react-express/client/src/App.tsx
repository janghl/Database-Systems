import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Artists from "./pages/Artists";
import Music from "./pages/Music";
import Friends from "./pages/Friends";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import React, { useState, useEffect } from "react";

function App() {
  // State to store artists data
  const [artists, setArtists] = useState([]);

  // Function to fetch artists data from backend
  const fetchArtistsData = async () => {
    try {
      const response = await fetch("/artists");
      if (!response.ok) {
        throw new Error("Failed to fetch artists data");
      }
      const data = await response.json();
      setArtists(data); // Update state with fetched artists data
    } catch (error) {
      console.error("Error fetching artists data:", error);
    }
  };

  // Fetch artists data when component mounts
  useEffect(() => {
    fetchArtistsData();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/artists" element={<Artists artists={artists} />} /> {/* Pass artists data as props to Artists component */}
        <Route path="/friends" element={<Friends />} />
        <Route path="/music" element={<Music />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/posts" element={<Posts />} />
//       <Route path="/artists" element={<Artists />} />
//       <Route path="/friends" element={<Friends />} />
//       <Route path="/music" element={<Music />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//     </Routes>
//   );
// }

// export default App;
