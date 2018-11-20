#!/usr/bin/env bash

# COPY ratings (id, name, accuracy, communication, cleanliness, location, check_in, value, reviews) FROM 'ratings/*.csv' WITH HEADER=false AND DELIMITER=',';
# COPY reviews (id, author, image, date, body, flagged, room_id) FROM 'reviews/*.csv' WITH HEADER=false AND DELIMITER=',';

REVIEWS=(/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/*.csv)
RATINGS=(/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings/*.csv)

# import the files
for i in ${REVIEWS[@]}
    do
    cqlsh -e "copy airbnb.reviews (id, author, image, date, body, flagged, room_id) from '$i' WITH DELIMITER=',' and header=false;" && gzip $i

        # cqlsh -u hanlinaung -f "copy airbnb.reviews from program 'zcat $i' with DELIMITER ',' and header=false"
        # move the imported file
        # mv $i ${IMPFILES}
    done
for j in ${RATINGS[@]}
    do
    cqlsh -e "copy airbnb.ratings (id, name, accuracy, communication, cleanliness, location, check_in, value) from '$j' WITH DELIMITER=',' and header=false;" && gzip $j

        # cqlsh -u hanlinaung -f "copy airbnb.reviews from program 'zcat $i' with DELIMITER ',' and header=false"
        # move the imported file
        # mv $i ${IMPFILES}
    done
