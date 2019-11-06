DROP DATABASE IF EXISTS web601project;
CREATE DATABASE web601project;
use web601project;

DROP TABLE IF EXISTS tblTrails;
CREATE TABLE tblTrails (
	ID int(4) auto_increment PRIMARY KEY,
    Name varchar(30),
    
    Location varchar(20),
    Description varchar(255),
    Difficulty varchar(20),
    Length int(4)    
);

DROP TABLE IF EXISTS tblTips;
CREATE TABLE tblTips (
	ID int(4) auto_increment PRIMARY KEY,
    Description varchar(255)        
);

DROP TABLE IF EXISTS tblEvents;
CREATE TABLE tblEvents (
	EventID int(4) auto_increment PRIMARY KEY,
    Location varchar(20),
    Description varchar(255),
    Length int(4),
    Date date,
    TrackID int,
    foreign key(TrackID) references tblTrails(ID)    
);

INSERT INTO tblTrails (Name, Location, Description, Difficulty, Length) 
VALUES ('TrailName','Test Location','A test description of a trail','Very Easy','1000'),
('TrailName1','Test Location2','A test description of a trail2','Very Hard','100');


select * from tblTrails
