#!/usr/bin/env bash

# cd /Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings

# get filenames
REVIEWS=(/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/*.gz)
RATINGS=(/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings/*.gz)

# import the files
for i in ${REVIEWS[@]}
    do
        psql -U hanlinaung -d airbnb -c "\copy reviews from program 'zcat $i' DELIMITER ','"
        # move the imported file
        # mv $i ${IMPFILES}
    done
for j in ${RATINGS[@]}
    do
        psql -U hanlinaung -d airbnb -c "\copy ratings from program 'zcat $j' DELIMITER ','"
        # move the imported file
        # mv $i ${IMPFILES}
    done
# for f in /Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/*.csv
# do
#     mysql -e "USE airbnb; LOAD DATA INFILE '"$f"' IGNORE INTO TABLE reviews
#       FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';" 
# done
