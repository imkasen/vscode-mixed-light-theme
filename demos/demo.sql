-- Create a table
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    CreationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data into the table
INSERT INTO Users (UserID, Username, Email) VALUES
(1, 'JohnDoe', 'john.doe@example.com'),
(2, 'JaneDoe', 'jane.doe@example.com'),
(3, 'PeterPan', 'peter.pan@example.com');

-- Select data from the table
SELECT * FROM Users;
SELECT UserID, Username FROM Users WHERE Email LIKE '%@example.com';

-- Update data in the table
UPDATE Users SET Email = 'john.updated@example.com' WHERE UserID = 1;

-- Delete data from the table
DELETE FROM Users WHERE UserID = 3;

-- Create a view
CREATE VIEW ActiveUsers AS
SELECT UserID, Username
FROM Users
WHERE CreationDate > DATE('now', '-30 days');

-- Create an index
CREATE INDEX idx_username ON Users (Username);

-- Use a transaction
BEGIN TRANSACTION;
    INSERT INTO Users (UserID, Username, Email) VALUES (4, 'New User', 'new.user@example.com');
    UPDATE Users SET Email = 'updated.email@example.com' WHERE UserID = 2;
COMMIT;


-- Stored procedure (example for MySQL)
DELIMITER //

CREATE PROCEDURE GetUsersWithEmail(IN email_pattern VARCHAR(100))
BEGIN
    SELECT * FROM Users WHERE Email LIKE email_pattern;
END //

DELIMITER ;

CALL GetUsersWithEmail('%@example.com');




-- Demonstrating different data types
CREATE TABLE Data_Types (
    int_col INT,
    float_col FLOAT,
    double_col DOUBLE,
    char_col CHAR(10),
    varchar_col VARCHAR(50),
    text_col TEXT,
    date_col DATE,
    time_col TIME,
    timestamp_col TIMESTAMP,
    boolean_col BOOLEAN, -- MySQL uses TINYINT(1)
    blob_col BLOB
);


-- Demonstrating JOIN operations
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    UserID INT,
    OrderDate DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

INSERT INTO Orders (OrderID, UserID, OrderDate) VALUES
(1, 1, '2024-01-15'),
(2, 2, '2024-02-20');


SELECT Users.Username, Orders.OrderID
FROM Users
INNER JOIN Orders ON Users.UserID = Orders.UserID;


-- Demonstrating CASE statement
SELECT UserID, Username,
  CASE
    WHEN UserID = 1 THEN 'Admin'
    WHEN UserID = 2 THEN 'Editor'
    ELSE 'User'
  END AS UserRole
FROM Users;

-- Common Table Expression (CTE)
WITH RecentUsers AS (
    SELECT UserID, Username
    FROM Users
    WHERE CreationDate > DATE('now', '-7 days')
)
SELECT * FROM RecentUsers;


-- Demonstrating subquery
SELECT *
FROM Users
WHERE UserID IN (SELECT UserID FROM Orders);
