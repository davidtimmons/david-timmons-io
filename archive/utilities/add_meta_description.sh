#!/bin/bash

##
# Transfer meta description keys from the old site to the new site.
##

# Set defaults.
THIS_DIRECTORY="$(cd `dirname $0` && pwd)"
FILE='tmp.dat'
SITEMAP="$1"

T='|' # Character used to tokenize the output string.
ARGS="--file \1 --anchor draft --key metaDescription --value \2"
TOKENIZED="${ARGS//' '/$T}"

# Scrape content.
$THIS_DIRECTORY/scrape_meta_description.sh -d "$T" -f "$FILE" -s "$1"
sed -i -e "s/\(.*\)${T}\(.*\)/$TOKENIZED/" "$THIS_DIRECTORY/$FILE"

# Add meta description key-values by using the tokenized string as function arguments.
while IFS="$T" read -ra ADDR; do
    $THIS_DIRECTORY/add_key.sh -s "${ADDR[@]}" # Get all array elements as separate values.
done < $FILE

rm "$THIS_DIRECTORY/$FILE"
