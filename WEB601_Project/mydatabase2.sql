DROP DATABASE IF EXISTS web601project;
CREATE DATABASE web601project;
use web601project;

DROP TABLE IF EXISTS tblTrails;
CREATE TABLE tblTrails (
	ID int(4) auto_increment PRIMARY KEY,
    Name varchar(60),    
    Location varchar(60),
    Description varchar(255),
    Difficulty varchar(20),
    Length int(4),
    ImgLoc varchar(255)
);

DROP TABLE IF EXISTS tblTips;
CREATE TABLE tblTips (
	ID int(4) auto_increment PRIMARY KEY,
    Description varchar(255)        
);

DROP TABLE IF EXISTS tblEvents;
CREATE TABLE tblEvents (
	ID int(4) auto_increment PRIMARY KEY,
    Name varchar(40),
    Location varchar(20),
    Description varchar(255),
    Length int(4),
    Date date,
    TrackID int,
    ImgLoc varchar(255),
    foreign key(TrackID) references tblTrails(ID)    
);

INSERT INTO tblEvents (Name, Location,Description,Length,Date)
VALUES ('Nydia Time Trial','Nydia Saddle','A time trial to see who can complete the Nydia Saddle trail the fastest','6',18/11/2019),
('Super D - Round 3','Richmond','Round 3 of the Super D downhill mountain bike racing','3',14/11/2019);

INSERT INTO tblTips (Description)
VALUES ('Always check the weather before you start the trail'),('Wear appropiate footwear'),('Tell someone where you are going'),
('Bring enough food and water');



