CREATE DATABASE IF NOT EXISTS airbnb;

USE airbnb;

DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS listings;

CREATE TABLE IF NOT EXISTS listings (
  id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS ratings (
  id VARCHAR(60) NOT NULL,
  review_id VARCHAR(60) NOT NULL,
  accuracy TINYINT(1) NOT NULL,
  communication TINYINT(1) NOT NULL,
  cleanliness TINYINT(1) NOT NULL,
  location TINYINT(1) NOT NULL,
  check_in TINYINT(1) NOT NULL,
  value TINYINT(1) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id VARCHAR(60) NOT NULL,
  listing_id INT NOT NULL,
  rating_id VARCHAR(60) NOT NULL,
  author VARCHAR(60) NOT NULL,
  user_id VARCHAR(60) NOT NULL,
  avatar_url VARCHAR(255),
  date DATE,
  body TEXT NOT NULL,
  flagged BOOLEAN,
  PRIMARY KEY (id)
  -- FOREIGN KEY (listing_id)
  --   REFERENCES listings(id)
) ENGINE=InnoDB  DEFAULT CHARSET=UTF8MB4;