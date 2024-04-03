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

CREATE TABLE UserAccounts (
  userid INT,
  username VARCHAR(255),
  passwd VARCHAR(255),
  PRIMARY KEY (userid)
);

CREATE TABLE Posts (
  postid INT,
  rating INT,
  timeofpost VARCHAR(20),
  likes INT,
  userid INT,
  songid VARCHAR(50),
  CONSTRAINT FK_userid_P FOREIGN KEY (userid) REFERENCES UserAccounts(userid) ON DELETE CASCADE,
  CONSTRAINT FK_songid_P FOREIGN KEY (songid) REFERENCES Songs(songid) ON DELETE CASCADE,
  PRIMARY KEY (postid)
);

CREATE TABLE Tags (
  tagid INT,
  tagname VARCHAR(20),
  PRIMARY KEY (tagid)
);

CREATE TABLE Creates (
  postid INT,
  tagid INT,
  CONSTRAINT FK_postid_C FOREIGN KEY (postid) REFERENCES Posts(postid) ON DELETE CASCADE,
  CONSTRAINT FK_tagid_C FOREIGN KEY (tagid) REFERENCES Tags(tagid) ON DELETE CASCADE,
  PRIMARY KEY (postid, tagid)
);

CREATE TABLE ListeningHistories (
  userid INT,
  songid VARCHAR(50),
  CONSTRAINT FK_userid_LH FOREIGN KEY (userid) REFERENCES UserAccounts(userid) ON DELETE CASCADE,
  CONSTRAINT FK_songid_LH FOREIGN KEY (songid) REFERENCES Songs(songid) ON DELETE CASCADE,
  PRIMARY KEY (userid, songid)
);

CREATE TABLE Friends (
  userid1 INT,
  userid2 INT,
  CONSTRAINT FK_userid1_F FOREIGN KEY (userid1) REFERENCES UserAccounts(userid) ON DELETE CASCADE,
  CONSTRAINT FK_userid2_F FOREIGN KEY (userid2) REFERENCES UserAccounts(userid) ON DELETE CASCADE,
  PRIMARY KEY (userid1, userid2)
);

CREATE TABLE HasSongs (
  artistid VARCHAR(50),
  songid VARCHAR(50),
  CONSTRAINT FK_artistid_HS FOREIGN KEY (artistid) REFERENCES Artists(artistid) ON DELETE CASCADE,
  CONSTRAINT FK_songid_HS FOREIGN KEY (songid) REFERENCES Songs(songid) ON DELETE CASCADE,
  PRIMARY KEY (artistid, songid)
);
