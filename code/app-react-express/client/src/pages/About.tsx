import NavBar from "../components/NavBar";
import "../App.css";
import SidePanel from "../components/SidePanel";
import MichaelText from "../components/MichaelText";

function About() {
  return (
    <div className="aboutsize">
      <NavBar />
      <SidePanel />
      <div className="about-container">
        <MichaelText />
      </div>
    </div>
  );
}

export default About;
