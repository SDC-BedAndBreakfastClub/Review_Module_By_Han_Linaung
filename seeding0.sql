

USE airbnb;



FLUSH TABLES;
ALTER TABLE `reviews` DISABLE KEYS;
ALTER TABLE `ratings` DISABLE KEYS;
LOAD DATA INFILE '/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/reviews5.csv'
IGNORE INTO TABLE reviews
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n';

LOAD DATA INFILE '/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings/ratings5.csv'
IGNORE INTO TABLE ratings
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n';
ALTER TABLE `reviews` ENABLE KEYS;
ALTER TABLE `ratings` ENABLE KEYS;