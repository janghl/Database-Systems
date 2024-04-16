import Title from "../components/Title";
import NavBar from "../components/NavBar";
import "../App.css";
import BgImage from "../components/BgImage";
import Post from "../components/Post";

function Home() {
  return (
    <div className="screen">
      <NavBar />
      <Title />
      <div className="bodyContainer">
        <BgImage />
        <Post SongName = "Song name" UserName = "User name" Artist = "Artist" TimeOfPost = "Time" Rating = {5} />
      </div>
    </div>
  );
}

export default Home;
