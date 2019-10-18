DROP DATABASE IF EXISTS web601project;
CREATE DATABASE web601project;
use web601project;

DROP TABLE IF EXISTS tblTrails;
CREATE TABLE tblTrails (
	ID int(4) auto_increment PRIMARY KEY,
    Location varchar(20),
    Description varchar(255),
    Difficulty varchar(20),
    Length int(4)    
);

INSERT INTO tblTrails (Location, Description, Difficulty, Length) 
VALUES ('Test','A test description of a trail','Very Easy','1000');

SELECT * FROM tblTrails;
