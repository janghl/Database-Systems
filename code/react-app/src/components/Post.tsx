import "../App.css"; // Import the CSS file for styling

interface PostProps {
    SongName: string;
    UserName: string;
    Artist: string;
    TimeOfPost: string;
    Rating: number;
  }

function Post({SongName, UserName, Artist, TimeOfPost, Rating}: PostProps) {
  return (
    <div className="post">
      <h2>{SongName}</h2>
      <p>{UserName}</p>
      <p>{Artist}</p>
      <p>{TimeOfPost}</p>
      <p>{Rating}</p>
    </div>
  );
}

export default Post;