
ALTER TABLE Posts ADD CONSTRAINT FK_userid_P FOREIGN KEY (userid) REFERENCES UserAccounts(userid) ON DELETE CASCADE;
ALTER TABLE Posts ADD CONSTRAINT FK_songid_P FOREIGN KEY (songid) REFERENCES Songs(songid) ON DELETE CASCADE;

ALTER TABLE Creates ADD CONSTRAINT FK_postid_C FOREIGN KEY (postid) REFERENCES Posts(postid) ON DELETE CASCADE;
ALTER TABLE Creates ADD CONSTRAINT FK_tagid_C FOREIGN KEY (tagid) REFERENCES Tags(tagid) ON DELETE CASCADE;

ALTER TABLE ListeningHistories ADD CONSTRAINT FK_userid_LH FOREIGN KEY (userid) REFERENCES UserAccounts(userid) ON DELETE CASCADE;
ALTER TABLE ListeningHistories ADD CONSTRAINT FK_songid_LH FOREIGN KEY (songid) REFERENCES Songs(songid) ON DELETE CASCADE;

ALTER TABLE Friends ADD CONSTRAINT FK_userid1_F FOREIGN KEY (userid1) REFERENCES UserAccounts(userid) ON DELETE CASCADE;
ALTER TABLE Friends ADD CONSTRAINT FK_userid2_F FOREIGN KEY (userid2) REFERENCES UserAccounts(userid) ON DELETE CASCADE;

ALTER TABLE HasSongs ADD CONSTRAINT FK_artistid_HS FOREIGN KEY (artistid) REFERENCES Artists(artistid) ON DELETE CASCADE;
ALTER TABLE HasSongs ADD CONSTRAINT FK_songid_HS FOREIGN KEY (songid) REFERENCES Songs(songid) ON DELETE CASCADE;

delete from Creates where postid=0;
delete from Posts where postid=0;
delete from HasSongs where postid=0;