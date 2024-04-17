import NavBar from "../components/NavBar";
import "../App.css";
import Post from "../components/Post";

function Reviews() {
  return (
    <div className="screen">
      <NavBar />
      <div className="postContainer">
        <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {5} AlbumImageURL = "https://pbs.twimg.com/media/EW41YTBWoAIcjOk.jpg:large"/>
      </div>
    </div>
  );
}

export default Reviews;
