DROP DATABASE IF EXISTS mysql;
CREATE DATABASE mysql;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS reviews;

CREATE TABLE
IF NOT EXISTS ratings
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR
(100) NOT NULL UNIQUE,
  `accuracy` TINYINT
(1) NOT NULL,
  `communication` TINYINT
(1) NOT NULL,
  `cleanliness` TINYINT
(1) NOT NULL,
  `location` TINYINT
(1) NOT NULL,
  `check_in` TINYINT
(1) NOT NULL,
  `value` TINYINT
(1) NOT NULL
) Engine=MyISAM;

CREATE TABLE
IF NOT EXISTS reviews
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `author` TEXT,
  `image` VARCHAR
(200),
  `date` VARCHAR
(50),
  `body` TEXT,
  `flagged` VARCHAR
(5),
  `room_id` VARCHAR
(5)
  --  FOREIGN KEY room_id(room_id)
  --  REFERENCES ratings(id)
  --  ON UPDATE CASCADE
  --  ON DELETE RESTRICT,
  --  UNIQUE KEY `id_author` (`room_id`,`author`)
) ENGINE=MyISAM;

FLUSH TABLES;
ALTER TABLE `reviews` DISABLE KEYS;
ALTER TABLE `ratings` DISABLE KEYS;
LOAD DATA INFILE '/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/reviews0.csv'
IGNORE INTO TABLE reviews
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n';

LOAD DATA INFILE '/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings/ratings0.csv'
IGNORE INTO TABLE ratings
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n';
ALTER TABLE `reviews` ENABLE KEYS;
ALTER TABLE `ratings` ENABLE KEYS;