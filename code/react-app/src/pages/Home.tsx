import Title from "../components/Title";
import NavBar from "../components/NavBar";
import "../App.css";
import BgImage from "../components/BgImage";

function Home() {
  return (
    <div className="screen">
      <NavBar />
      <Title />
      <div className="bodyContainer">
        <BgImage />
      </div>
    </div>
  );
}

export default Home;
