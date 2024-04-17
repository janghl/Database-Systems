import NavBar from "../components/NavBar";
import "../App.css";
import Button from "../components/Button";

function Artists() {
  return (
    <div className="screen">
      <NavBar />
      <div className="bodyContainer">
        Hello there! Currently working on Artists page, try again later!
        <Button clickFunction={HandleClick} text={"Generate Artists"}></Button>
      </div>
    </div>
  );
}

function HandleClick() {
  return console.log("button clicked");
}

export default Artists;
