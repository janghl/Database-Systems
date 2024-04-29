import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../App.css";

interface FriendData {
  username: string;
}

interface FriendsProps {
  friends: FriendData[];
}

function Friends({ friends }: FriendsProps) {
  const [searchInput, setSearchInput] = useState(""); // State to hold the search input value
  const [operationResult, setOperationResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value); // Update the search input value as the user types
  };

  const handleAddFriend = async (friendUsername: string) => {
    try {
      console.log(friendUsername);
      const response = await fetch(`http://localhost:8080/addfriend?tmp_username=${friendUsername}`);
      if (!response.ok) {
        throw new Error("Failed to add friend");
      }
      setOperationResult({ success: true, message: "Friend added successfully" });
    } catch (error) {
      console.error("Error adding friend:", error);
      setOperationResult({ success: false, message: "Failed to add friend" });
    }
  };

  const handleRemoveFriend = async (friendUsername: string) => {
    try {
      const response = await fetch(`http://localhost:8080/removefriend?username=${friendUsername}`);
      if (!response.ok) {
        throw new Error("Failed to remove friend");
      }
      
      setOperationResult({ success: true, message: "Friend removed successfully" });
    } catch (error) {
      console.error("Error removing friend:", error);
      setOperationResult({ success: false, message: "Failed to remove friend" });
    }
  };

  return (
    <div className="screen">
      <NavBar />
      <div className="bodyContainer">
        <div className="friendControls">
          {/* Search bar */}
          <div>
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder="Search friends"
              style={{ marginRight: '10px' }}
            />
            {/* Operation result message */}
            {operationResult && (
              <p style={{ color: operationResult.success ? 'green' : 'red', marginTop: '5px' }}>
                {operationResult.message}
              </p>
            )}
          </div>
          {/* Add Friend button */}
          <button onClick={() => handleAddFriend(searchInput)}>Add Friend</button>
          {/* Remove Friend button */}
          <button onClick={() => handleRemoveFriend(searchInput)}>Remove Friend</button>
        </div>
        <div className="friendList">
          {/* Display list of friends */}
          <ul style={{ listStyle: 'none', padding: '0', textAlign: 'center' }}>
            {friends.map((friend, index) => (
              <li key={index} style={{ fontSize: '30px', margin: '10px 0' }}>
                {friend.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Friends;
