#!/usr/bin/env bash

# cd /Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings

# get filenames
REVIEWS=(/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/mock1/*.csv)
RATINGS=(/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/mock/*.csv)

# import the files
for i in ${REVIEWS[@]}
    do
        psql -U hanlinaung -d airbnb2 -c "\copy reviews from '$i' DELIMITER ','"
        # move the imported file
        # mv $i ${IMPFILES}
    done
for j in ${RATINGS[@]}
    do
        psql -U hanlinaung -d airbnb2 -c "\copy ratings from '$j' DELIMITER ','"
        # move the imported file
        # mv $i ${IMPFILES}
    done
# for f in /Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/*.csv
# do
#     mysql -e "USE airbnb; LOAD DATA INFILE '"$f"' IGNORE INTO TABLE reviews
#       FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';" 
# done
