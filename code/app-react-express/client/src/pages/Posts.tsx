import React from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import Button from "../components/LoginButton";

interface PostProps {
  posts: PostData[];
}

function Posts({ posts }: PostData) {
  console.log( posts );
  return (
    <div className="screen">
      <NavBar />
      <div className="buttoncontainer">
        <Button onClick={() => console.log('Username clicked')} label="Sort by Username" />
        <Button onClick={() => console.log('Song clicked')} label="Sort by Song Name" />
        <Button onClick={() => console.log('Artist clicked')} label="Sort by Artist" />
        <Button onClick={() => console.log('Create clicked')} label="Create Post" />
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
