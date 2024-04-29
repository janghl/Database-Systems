import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import Button from "../components/LoginButton";
import SearchBar from "../components/SearchBar";

interface PostsProps {
  posts: PostData[];
}

export interface PostData {
  songname: string;
  username: string;
  artistname: string;
  timeofpost: string; // Assuming it's a string, adjust the type if it's different
  rating: number; // Assuming it's a number, adjust the type if it's different
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]); // Initialize state for search results

function handleSearch(squery: string) {
  fetch(`/artistsearch?artistName=${encodeURIComponent(squery)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Set search results state with the retrieved data
      setSearchResults(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function Posts({ posts }: PostData) {
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
