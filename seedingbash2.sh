#!/usr/bin/env bash

# cd /Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews
        
for f in /Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/*.csv
do
    mysql -e "USE airbnb; LOAD DATA INFILE '"$f"' IGNORE INTO TABLE reviews 
      FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'" 
echo "Done: '"$f"' at $(date)"
done