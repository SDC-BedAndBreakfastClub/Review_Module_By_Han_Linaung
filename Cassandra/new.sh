#!/usr/bin/env bash
REVIEWS=(/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/*.gz)
RATINGS=(/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings/*.gz)
for j in ${RATINGS[@]}
    do
    zcat $j && cqlsh -e "copy airbnb.ratings (id, name, accuracy, communication, cleanliness, location, check_in, value) from ('$j' | stdin) WITH DELIMITER=',' and header=false;" && gzip $i
        # cqlsh -u hanlinaung -f "copy airbnb.ratings from program 'zcat $j' with DELIMITER ',' and header=false"
        # move the imported file
        # mv $i ${IMPFILES}
    done