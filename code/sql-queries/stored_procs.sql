DELIMITER //
CREATE PROCEDURE CheckLogins( IN u_username VARCHAR(255), IN u_password VARCHAR(255))
BEGIN
    DECLARE cur_id INT DEFAULT NULL;
    DECLARE found_password VARCHAR(255);

    DECLARE next_userid INT DEFAULT NULL;

    START TRANSACTION;
    SET TRANSACTION READ WRITE;
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

    -- Get the userid based on the username
    SET cur_id = (SELECT userid FROM UserAccounts WHERE UserAccounts.username = u_username);

    -- Get their passwd based on userid
    SET found_password = (SELECT passwd FROM UserAccounts WHERE UserAccounts.userid = cur_id);

    -- Check if cur_id is not null
    IF cur_id IS NOT NULL THEN
        -- Check if password is correct
        IF found_password = u_password THEN
            -- Check if the userid exists in Logins
            IF NOT EXISTS (SELECT * FROM Logins WHERE userid = cur_id) THEN
                -- Insert a new record into Logins
                INSERT INTO Logins (userid, logintimes) VALUES (cur_id, 1);
                INSERT INTO ActiveUser (userid) VALUES (cur_id);
            ELSE
                -- Update the logintimes for the existing record
                UPDATE Logins SET logintimes = logintimes + 1 WHERE userid = cur_id;
            END IF;
        END IF; -- Wrong password

    END IF;
    ELSE 
        next_userid = SELECT Count(*) FROM UserAccounts;
        INSERT INTO UserAccounts (userid, username, passwd) VALUES (next_userid + 1, u_username, u_password);
    END IF;

    -- Commit the transaction
    COMMIT;
END;
//
DELIMITER ;


-- Need to make one to update useraccounts table and to add a new username, userid, and passwd (use table len to determine new userid)

DELIMITER //
CREATE PROCEDURE Logout( IN username VARCHAR(255) )
BEGIN
    DECLARE cur_id INT DEFAULT NULL;

    START TRANSACTION;
    SET TRANSACTION READ WRITE;
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

    SET cur_id = (SELECT userid FROM UserAccounts WHERE UserAccounts.username = username);
    IF cur_id IN (SELECT * FROM ActiveUser) THEN
        DELETE FROM ActiveUser WHERE cur_id = ActiveUser.userid;
    END IF;

    COMMIT;   

END;
//
DELIMITER ;

