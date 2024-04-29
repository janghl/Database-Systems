DELIMITER //
CREATE PROCEDURE CheckLogins(
    IN u_username VARCHAR(255),
    IN u_password VARCHAR(255),
    OUT success INT
)
BEGIN
    DECLARE cur_id INT DEFAULT NULL;
    DECLARE found_password VARCHAR(255);

    SET TRANSACTION READ WRITE;
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
    START TRANSACTION;

    -- INSERT INTO Logins (userid, logintimes) VALUES (1, 500);

    -- Get the userid based on the username
    SET cur_id = (SELECT userid FROM UserAccounts WHERE UserAccounts.username = u_username);

    -- Get their password based on userid
    SET found_password = (SELECT passwd FROM UserAccounts WHERE UserAccounts.userid = cur_id);

    -- Check if cur_id is not null
    IF cur_id IS NOT NULL THEN
        -- Check if password is correct
        IF found_password LIKE CONCAT('%', u_password, '%') THEN
            -- Check if the userid exists in Logins
            IF NOT EXISTS (SELECT * FROM Logins WHERE userid = cur_id) THEN
                -- Insert a new record into Logins
                INSERT INTO Logins (userid, logintimes) VALUES (cur_id, 1);
                INSERT INTO ActiveUser (userid) VALUES (cur_id);
            ELSE
                -- Update the logintimes for the existing record
                UPDATE Logins SET logintimes = logintimes + 1 WHERE userid = cur_id;
            END IF;
            -- Account found
            SET success = 1;
        ELSE
            -- Wrong password
            SET success = 0;
        END IF;
    ELSE
        -- Account not found
        SET success = -1;
    END IF;

    -- Commit the transaction
    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE CheckSignups(
    IN u_username VARCHAR(255),
    IN u_password VARCHAR(255),
    OUT success INT
)
BEGIN
    DECLARE next_userid INT DEFAULT NULL;

    SET TRANSACTION READ WRITE;
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
    START TRANSACTION;
    SELECT COUNT(*) INTO next_userid FROM UserAccounts;
    SET next_userid = next_userid + 1;

    INSERT INTO UserAccounts (userid, username, passwd) VALUES (next_userid, u_username, u_password);
    INSERT INTO Logins (userid, logintimes) VALUES (next_userid, 1);
    INSERT INTO ActiveUser (userid) VALUES (next_userid);

    SET success = 1;

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

