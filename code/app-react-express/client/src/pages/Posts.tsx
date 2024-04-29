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

  // Function to fetch posts data from backend
  const filterPostsBySong = async (songName: string) => {
    console.log("trying to filter post data by song");
    try {
      const response = await fetch(
        `http://localhost:8080/songsearch?songName=${encodeURIComponent(
          songName
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to filter posts data by song");
      }
      const data = await response.json();
      setPosts(data); // Update state with fetched artists data
    } catch (error) {
      console.error("Error filtering posts data by song:", error);
    }
  };

  // Function to fetch posts data from backend
  const filterPostsByRating = async (rating: string) => {
    console.log("trying to filter post data by rating");
    try {
      const response = await fetch(
        `http://localhost:8080/ratingsearch?rating=${encodeURIComponent(
          rating
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to filter posts data by rating");
      }
      const data = await response.json();
      setPosts(data); // Update state with fetched artists data
    } catch (error) {
      console.error("Error filtering posts data by rating:", error);
    }
  };

  // Function to handle search based on artist name
  function handleSearchByArtist(artistName: string) {
    if (artistName.trim() === "") {
      // If search query is empty, fetch all posts
      fetchPostsData();
    } else {
      // Otherwise, fetch posts by artist
      filterPostsByArtist(artistName);
    }
  }

  // Function to handle search based on artist name
  function handleSearchBySong(songName: string) {
    if (songName.trim() === "") {
      // If search query is empty, fetch all posts
      fetchPostsData();
    } else {
      // Otherwise, fetch posts by artist
      filterPostsBySong(songName);
    }
  }

  // Function to handle search based on artist name
  function handleSearchByRating(rating: string) {
    if (rating.trim() === "") {
      // If search query is empty, fetch all posts
      fetchPostsData();
    } else {
      // Otherwise, fetch posts by artist
      filterPostsByRating(rating);
    }
  }

  useEffect(() => {
    // Fetch all posts data when component mounts
    fetchPostsData();
  }, []);

  console.log(posts);
  return (
    <div className="screen">
      <NavBar />
      <div className="buttoncontainer">
        <SearchBar
          onSearch={handleSearchByArtist}
          placeholder="Filter By Artist"
        />
        <div style={{ marginRight: "10px" }} />
        <SearchBar
          onSearch={handleSearchByRating}
          placeholder="Filter By Rating"
        />
        <div style={{ marginRight: "10px" }} />
        <SearchBar onSearch={handleSearchBySong} placeholder="Filter By Song" />
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
