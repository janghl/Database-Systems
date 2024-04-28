import NavBar from "../components/NavBar";
import "../App.css";
import Artist from "../components/ArtistEntry";
// import Button from "../components/LoginButton";
// import { useState } from "react";

// function Artists() {
//   return (
//     <div className="screen">
//       <NavBar />
//       <div className="postContainer" style={{height: 'calc(100% - 10%)'}}>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//         <Artist ArtistName = "Artist Name Here" Genre = "Genre"/>
//       </div>
//     </div>

//   )

interface ArtistData {
  artistname: string;
  genre: string;
}

interface ArtistsProps {
  artists: ArtistData[];
}

function Artists({ artists }: ArtistsProps) {
  return (
    <div className="screen">
      <NavBar />
      <div className="postContainer" style={{ height: 'calc(100% - 10%)' }}>
        {artists.map((artist, index) => (
          <Artist
            key={index}
            ArtistName={artist.artistname}
            Genre={artist.genre}
          />
        ))}
      </div>
    </div>
  );
}

export default Artists;


//   const [stringdata, setStringdata] = useState("");
//   // Function to handle button click
//   const handleClick = () => {
//     // Make an HTTP GET request to the backend endpoint
//     fetch('http://localhost:8080/generate-artists') 
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Handle the data received from the backend
//         console.log(data);
//         setStringdata(JSON.stringify(data));
//         //alert(stringdata);
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   };

//   return (
//     <div className="screen">
//       <NavBar />
//       <div className="bodyContainer">
//         Hello there! Currently working on Artists page, try again later!
//         <Button clickFunction={handleClick} text={"Generate Artists"}/>
//         {stringdata && 
//           <p>
//             ${stringdata}
//           </p>}
//       </div>
//     </div>
//   );
//  }

// export default Artists;
