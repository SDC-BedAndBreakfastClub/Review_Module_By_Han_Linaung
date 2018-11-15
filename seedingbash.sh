#!/usr/bin/env bash

# cd /Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings

for f in /Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings/*.csv
do
    mysql -e "USE airbnb; LOAD DATA INFILE '"$f"' IGNORE INTO TABLE ratings 
      FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';" 
done
for f in /Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/*.csv
do
    mysql -e "USE airbnb; LOAD DATA INFILE '"$f"' IGNORE INTO TABLE reviews
      FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';" 
done