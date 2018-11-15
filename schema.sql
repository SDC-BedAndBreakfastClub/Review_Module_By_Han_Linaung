DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

USE airbnb;

DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS reviews;

CREATE TABLE IF NOT EXISTS ratings (
  `id` INT,
  `name` VARCHAR(20) UNIQUE NOT NULL UNIQUE,
  `accuracy` TINYINT(1) NOT NULL,
  `communication` TINYINT(1) NOT NULL,
  `cleanliness` TINYINT(1) NOT NULL,
  `location` TINYINT(1) NOT NULL,
  `check_in` TINYINT(1) NOT NULL,
  `value` TINYINT(1) NOT NULL
) Engine=MyISAM;

CREATE TABLE IF NOT EXISTS reviews (
  `id` INT,
  `author` VARCHAR(15),
  `image` VARCHAR(200),
  `date` VARCHAR(50),
  `body` TEXT,
  `flagged` VARCHAR(5),
  `room_id` VARCHAR(5),
  --  FOREIGN KEY room_id(room_id)
  --  REFERENCES ratings(id)
  --  ON UPDATE CASCADE
  --  ON DELETE RESTRICT,
  UNIQUE KEY `id_author` (`room_id`,`author`)
) ENGINE=MyISAM;

-- FLUSH TABLES;

-- ALTER TABLE `reviews` DISABLE KEYS;
-- ALTER TABLE `ratings` DISABLE KEYS;
-- LOAD DATA LOCAL INFILE '/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/'
-- IGNORE INTO TABLE reviews
-- FIELDS TERMINATED BY ',' 
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n';

-- LOAD DATA LOCAL INFILE '/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings/'
-- IGNORE INTO TABLE ratings
-- FIELDS TERMINATED BY ',' 
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n';
-- ALTER TABLE `reviews` ENABLE KEYS;
-- ALTER TABLE `ratings` ENABLE KEYS;

-- LOAD DATA INFILE '/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/reviews.csv'
-- IGNORE INTO TABLE reviews
-- FIELDS TERMINATED BY ',' 
-- LINES TERMINATED BY '\n';

-- LOAD DATA INFILE '/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings/ratings.csv'
-- IGNORE INTO TABLE ratings
-- FIELDS TERMINATED BY ',' 
-- LINES TERMINATED BY '\n';
-- ALTER TABLE `reviews` ENABLE KEYS;
-- ALTER TABLE `ratings` ENABLE KEYS;