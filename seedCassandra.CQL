DROP KEYSPACE IF EXISTS airbnb;
CREATE KEYSPACE IF NOT EXISTS airbnb;
USE airbnb;
DROP TABLE ratings;
DROP TABLE reviews;
CREATE TABLE ratings (
	id int,
	name text,
	accuracy int,
	communication int,
	cleanliness int,
	location int,
	check_in int,
	value int
);
CREATE TABLE reviews (
    id int,
    author text,
    image text,  
    date text,  
    body text,  
    flagged text,  
    room_id text
)