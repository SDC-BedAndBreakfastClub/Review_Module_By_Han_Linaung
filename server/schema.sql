CREATE DATABASE IF NOT EXISTS airbnb;

USE airbnb;

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS listings;

CREATE TABLE IF NOT EXISTS listings (
  id VARCHAR(60) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id VARCHAR(60) NOT NULL,
  listing_id VARCHAR(60),
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



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
