USE ihd;

-- Create baseline tables --
CREATE TABLE Artists (
  artistid VARCHAR(50),
  artistname VARCHAR(255),
  genre VARCHAR(20),
  PRIMARY KEY (artistid)
);

CREATE TABLE Songs (
  songid VARCHAR(50),
  songname VARCHAR(255),
  len INT,
  popularity INT,
  PRIMARY KEY (songid)
);

CREATE TABLE Posts (
  postid VARCHAR(20),
  rating INT,
  timeofpost VARCHAR(20),
  likes INT,
  userid VARCHAR(20),
  songid VARCHAR(50),
  FOREIGN KEY (userid) REFERENCES UserAccounts.userid ON DELETE CASCADE,
  FOREIGN KEY (songid) REFERENCES UserAccounts.songid ON DELETE CASCADE,
  PRIMARY KEY (postid)
);

CREATE TABLE UserAccounts (
  userid VARCHAR(20),
  username VARCHAR(255),
  passwd VARCHAR(255),
  PRIMARY KEY (userid)
);

CREATE TABLE Tags (
  tagid VARCHAR(20),
  tagname VARCHAR(20),
  PRIMARY KEY (tagid)
);

CREATE TABLE Creates (
  postid VARCHAR(20),
  tagid VARCHAR(20),
  FOREIGN KEY (postid) REFERENCES Posts.postid ON DELETE CASCADE,
  FOREIGN KEY (tagid) REFERENCES Tags.tagid ON DELETE CASCADE,
  PRIMARY KEY (postid, tagid)
);

CREATE TABLE ListeningHistories (
  userid VARCHAR(20),
  songid VARCHAR(50),
  FOREIGN KEY (userid) REFERENCES UserAccounts.userid ON DELETE CASCADE,
  FOREIGN KEY (songid) REFERENCES Songs.songid ON DELETE CASCADE,
  PRIMARY KEY (userid, songid)
);

CREATE TABLE Friends (
  userid1 VARCHAR(20),
  userid2 VARCHAR(20),
  FOREIGN KEY (userid1) REFERENCES UserAccounts.userid ON DELETE CASCADE,
  FOREIGN KEY (userid2) REFERENCES UserAccounts.userid ON DELETE CASCADE,
  PRIMARY KEY (userid1, userid2)
);

CREATE TABLE HasSongs (
  artistid VARCHAR(50),
  songid VARCHAR(50),
  FOREIGN KEY (artistid) REFERENCES Artists.artistid ON DELETE CASCADE,
  FOREIGN KEY (songid) REFERENCES Songs.songid ON DELETE CASCADE,
  PRIMARY KEY (artistid, songid)
);
