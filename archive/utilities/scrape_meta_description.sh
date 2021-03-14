#!/bin/bash

##
# Scrape the <meta name="description"> key from URLs found in a sitemap.
# "sed" scripts are designed for http://david.timmons.io.
##

read -d '' HELP <<- END_OF_DOCS
Usage: scrape_meta_description.sh [--sitemap|-s] <SITEMAP> [--file|-f] <FILE>
                                  [--delimeter|-d] <DELIMETER>

Scrape the meta description content from links contained in an XML sitemap.
Write a delimited list containing the expected Markdown file name and the
meta description scraped from the URL to a file or the console.
    
    --sitemap, -s     Sitemap containing the website links to scrape, e.g.
                      "../metalsmith/build/sitemap.xml".
    --file, -f        Export data to this file. Prints to the console when no option given.
    --delimeter, -d   Character used to separate the Markdown file name and meta description.
                      Defaults to "|".

Example:
    scrape_meta_description.sh --sitemap "path/to/sitemap" --file "path/to/file" --delimeter "|"
END_OF_DOCS

if [ ${#} -eq 0 -o "[${@:1:1}]" = "[--help]" ]; then
    echo "$HELP"
    exit 1
fi

# Set defaults.
THIS_DIRECTORY="$(cd `dirname $0` && pwd)"
SITEMAP=
FILE=
DELIMETER='|'

# Get input.
i=1
for var in ${*}; do
    if [ "$var" == "--sitemap" -o "$var" == "-s" ]; then
        SITEMAP="${@:$((i + 1)):1}" # Get the next single value in the arguments array.
    elif [ "$var" == "--file" -o "$var" == "-f" ]; then
        FILE="${@:$((i + 1)):1}"
    elif [ "$var" == "--delimeter" -o "$var" == "-d" ]; then
        DELIMETER="${@:$((i + 1)):1}"
    fi
    let i++
done

if [ -z "$SITEMAP" ]; then
    printf 'SITEMAP is a required value!\n\n' "$1"
    echo "$HELP"
    exit 1
fi

# Strip all URLs out of the sitemap (which should match the live site.)
LINKS=$(                                          \
    sed -e 's/\(.*<loc>\)\(.*\)\(<\/loc>.*\)/\2/' \
        -e 's/<.*>//'                             \
        "$SITEMAP"                                \
)

# Clear the file if it exists.
if [ -f "$FILE" ]; then
    : > "$FILE"
fi

# Get all metadata.
for link in $LINKS
do
    # Parse the local sitemap to derive the corresponding markdown file names.
    MD_FILE=$(                                  \
        echo "$link"                            \
        | sed -e "s/http.*io\/\(.*\)\//\1\.md/" \
              -e "s/.*404.*//"                  \
              -e "s/demos.*//"                  \
              -e "s/http.*/index.md/"           \
    )

    # Scrape the website.
    if [ "$MD_FILE" != "" ]; then
        VALUE=$(                                                                 \
            curl --silent --show-error --location "$link"                        \
            | grep '<meta name="description"'                                    \
            | sed -e 's/\(<meta name="description" content="\)\(.*\)\(".*\)/\2/' \
        )

        if [ -z "$FILE" ]; then
            echo "$MD_FILE$DELIMETER$VALUE"
        else
            echo "$MD_FILE$DELIMETER$VALUE" >> "$FILE"
        fi
    fi
done
