CREATE TABLE quote (
	id INT NOT NULL AUTO_INCREMENT,
	quote VARCHAR(255) DEFAULT NULL,
	detail TEXT,
	ranking INT DEFAULT NULL,
	author_id INT DEFAULT NULL,
	PRIMARY KEY (id),
	CONSTRAINT FK_284329 FOREIGN KEY (author_id) REFERENCES author(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE author (
	id INT NOT NULL AUTO_INCREMENT,
	fname VARCHAR(255) NOT NULL,
	lname VARCHAR(255) DEFAULT NULL,
	PRIMARY KEY (id)
);