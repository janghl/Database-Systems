import "../App.css"; // Import the CSS file for styling

interface PostProps {
    SongName: string;
    UserName: string;
    Artist: string;
    TimeOfPost: string;
    Rating: number;
    AlbumImageURL: string;
  }

function Post({SongName, UserName, Artist, TimeOfPost, Rating, AlbumImageURL}: PostProps) {
  return (
    <div className="post">
      <h2>{UserName}</h2>
      <h1>{SongName}</h1>
      <p>{Artist}</p>
      <p>{TimeOfPost}</p>
      <div className="post-album-img">
        <img src = {AlbumImageURL} alt = "Couldn't Retrieve Image" />
      </div>
    </div>
  );
}

export default Post;