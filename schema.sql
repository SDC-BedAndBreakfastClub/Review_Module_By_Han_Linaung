DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS reviews;
VACUUM  FULL;
CREATE TABLE ratings
(
  id INT,
  name VARCHAR(50) NOT NULL,
  accuracy INT NOT NULL,
  communication INT NOT NULL,
  cleanliness INT NOT NULL,
  location INT NOT NULL,
  check_in INT NOT NULL,
  value INT NOT NULL
);

CREATE TABLE reviews
(
  id INT,
  author VARCHAR(50),
  image VARCHAR(150),
  date VARCHAR(50),
  body TEXT,
  flagged VARCHAR(5),
  room_id INT
  -- UNIQUE (room_id, author)
);
