DROP KEYSPACE IF EXISTS airbnb;
CREATE KEYSPACE IF NOT EXISTS airbnb
WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor':1};

USE airbnb;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
	id int,
	author text,
	image text,
	date text,
	body text,
	flagged text,
	room_id int,
	PRIMARY KEY (id)
);
CREATE TABLE ratings (
	id int,
	name text,
	accuracy int,
	communication int,
	cleanliness int,
	location int,
	check_in int,
	value int,
	PRIMARY KEY (id)
);

