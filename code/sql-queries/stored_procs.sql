DELIMITER //
CREATE PROCEDURE CheckLogins( IN username VARCHAR(255) )
BEGIN
    DECLARE cur_id INT DEFAULT NULL;

    START TRANSACTION;
    SET TRANSACTION READ WRITE;
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

    -- Get the userid based on the username
    SET cur_id = (SELECT userid FROM UserAccounts WHERE UserAccounts.username = username);

    -- Check if cur_id is not null
    IF cur_id IS NOT NULL THEN
        -- Check if the userid exists in Logins
        IF NOT EXISTS (SELECT * FROM Logins WHERE userid = cur_id) THEN
            -- Insert a new record into Logins
            INSERT INTO Logins (userid, logintimes) VALUES (cur_id, 1);
            INSERT INTO ActiveUser (userid) VALUES (cur_id);
        ELSE
            -- Update the logintimes for the existing record
            UPDATE Logins SET logintimes = logintimes + 1 WHERE userid = cur_id;
        END IF;
    END IF;

    -- Commit the transaction
    COMMIT;
END;
//
DELIMITER ;


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