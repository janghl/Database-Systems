import NavBar from "../components/NavBar";
import "../App.css";
import Post from "../components/Post";

function Posts() {
  return (
    <div className="screen">
      <NavBar />
      <div className="postContainer">
        <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {5}/>
        <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {3}/>
        <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {2}/>
        <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {4}/>
        <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {1}/>
      </div>
    </div>
  );
}

export default Posts;
