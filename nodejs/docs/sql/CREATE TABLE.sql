USE ra_nodejs;
CREATE TABLE users (
	id INT AUTO_INCREMENT,
	`name` VARCHAR ( 45 ) NOT NULL,
	age INT NOT NULL,
	gender BOOLEAN NOT NULL,
PRIMARY KEY ( id ) 
);