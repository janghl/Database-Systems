import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import Button from "../components/LoginButton";
import SearchBar from "../components/SearchBar";

function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);

  // Function to fetch posts data from backend
  const fetchPostsData = async () => {
    console.log("trying to get post data");
    try {
      const response = await fetch("http://localhost:8080/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts data");
      }
      const data = await response.json();
      setPosts(data); // Update state with fetched artists data
    } catch (error) {
      console.error("Error fetching posts data:", error);
    }
  };

  // Function to fetch posts data from backend
  const filterPostsByArtist = async (artistName: string) => {
    console.log("trying to filter post data by artist");
    try {
      const response = await fetch(
        `http://localhost:8080/artistsearch?artistName=${encodeURIComponent(
          artistName
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to filter posts data by artist");
      }
      const data = await response.json();
      setPosts(data); // Update state with fetched artists data
    } catch (error) {
      console.error("Error filtering posts data by artist:", error);
    }
  };

  // Function to handle search based on artist name
  const handleSearch = (artistName: string) => {
    if (artistName.trim() === "") {
      // If search query is empty, fetch all posts
      fetchPostsData();
    } else {
      // Otherwise, fetch posts by artist
      filterPostsByArtist(artistName);
    }
  };

  useEffect(() => {
    // Fetch all posts data when component mounts
    fetchPostsData();
  }, []);

  console.log(posts);
  return (
    <div className="screen">
      <NavBar />
      <div className="buttoncontainer">
        <SearchBar onSearch={handleSearch} placeholder="By Artist" />
        <div style={{ marginRight: "10px" }} />
        <SearchBar onSearch={handleSearch} placeholder="By Rating" />
        <div style={{ marginRight: "10px" }} />
        <SearchBar onSearch={handleSearch} placeholder="By Song" />
      </div>
      <div className="postContainer">
        {posts.map((post, index) => (
          <Post
            key={index}
            SongName={post.songname}
            UserName={post.username}
            Artist={post.artistname}
            TimeOfPost={post.timeofpost}
            Rating={post.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;

// function Posts() {
//   return (
//     <div className="screen">
//       <NavBar />
//       <div className="buttoncontainer">
//         <Button onClick={() => console.log('Username clicked')} label="Sort by Username" />
//         <Button onClick={() => console.log('Song clicked')} label="Sort by Song Name" />
//         <Button onClick={() => console.log('Artist clicked')} label="Sort by Artist" />
//         <Button onClick={() => console.log('Create clicked')} label="Create Post" />
//       </div>
//       <div className="postContainer">
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {5}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {3}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {2}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {4}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {1}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {5}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {3}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {2}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {4}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {1}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {5}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {3}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {2}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {4}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {1}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {5}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {3}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {2}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {4}/>
//         <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {1}/>
//       </div>
//     </div>
//   );
// }

// export default Posts;
