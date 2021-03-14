#!/bin/bash

##
# Add a new Metalsmith frontmatter key to a project Markdown file.
##

read -d '' HELP <<- END_OF_DOCS
Usage: add_key.sh [--file|-f] <FILE_PATH> [--anchor|-a] <ANCHOR_KEY>
                  [--key|-k] <NEW_KEY> [--value|-v] <NEW_KEY_VALUE>
                  [--silent|-s]

Add a new Metalsmith frontmatter key to a project Markdown file.
    
    --file, -f      File in which to append the new key and value.
    --anchor, -a    Frontmatter key below which to append the new key-value pair.
                    "---" inserts the new key-value pair as the final entry.
    --key, -k       New frontmatter key.
    --value, -v     Value associated with the new frontmatter key.
    --silent, -s    Whether to run without printing success messages to the console.

Example:
    add_key.sh --file index.md --anchor draft --key metaDescription --value "Some description."
END_OF_DOCS

if [ ${#} -lt 8 -o ${#} -gt 9 -o "[${@:1:1}]" == "[--help]" ]; then
    echo "Invalid number of arguments! [${#}]"
    echo "$HELP"
    exit 1
fi

# Set defaults.
THIS_DIRECTORY="$(cd `dirname $0` && pwd)"
SRC_DIRECTORY="${THIS_DIRECTORY%`basename $THIS_DIRECTORY`}app/src"
ARTICLES="$SRC_DIRECTORY/articles/*/*.md"
PAGES="$SRC_DIRECTORY/pages/*.md $SRC_DIRECTORY/*.md"
FILES="$(ls -d -1 $ARTICLES $PAGES)"
FILE=
ANCHOR_KEY=
NEW_KEY=
NEW_KEY_VALUE=
SILENT=0

# Get input.
i=1
for var in ${*}; do
    if [ "$var" == "--file" -o "$var" == "-f" ]; then
        FILE="${@:$((i + 1)):1}" # Get the next single value in the arguments array.
    elif [ "$var" == "--anchor" -o "$var" == "-a" ]; then
        ANCHOR_KEY="${@:$((i + 1)):1}"
    elif [ "$var" == "--key" -o "$var" == "-k" ]; then
        NEW_KEY="${@:$((i + 1)):1}"
    elif [ "$var" == "--value" -o "$var" == "-v" ]; then
        NEW_KEY_VALUE="${@:$((i + 1)):1}"
    elif [ "$var" == "--silent" -o "$var" == "-s" ]; then
        SILENT=1
    fi
    let i++
done

# Exit if all values are not set.
check_empty () {
    if [ -z "${!1}" ]; then
        printf '%s is a required value!\n\n' "$1"
        echo "$HELP"
        exit 1
    fi
}

check_empty FILE
check_empty ANCHOR_KEY
check_empty NEW_KEY
check_empty NEW_KEY_VALUE

# Change file contents.
finished=0
for file in $FILES; do
    if [ "$FILE" == "$(basename $file)" ]; then
        if [ "$ANCHOR_KEY" == "---" ]; then
            # Insert before the closing dashes as the final key.
            sed -i -e "0,/---/! {0,/---/ s/\($ANCHOR_KEY.*\)/$NEW_KEY: $NEW_KEY_VALUE\n\1/}" "$file"
        else
            # Insert below the matched key.
            sed -i -e "s/\($ANCHOR_KEY:.*\)/\1\n$NEW_KEY: $NEW_KEY_VALUE/" "$file"
        fi
        finished=1
        break
    fi
done

# Report results.
[ $finished -eq 0 ] && echo "File \"$FILE\" not found!" && exit 1
if [ $SILENT -eq 0 ]; then
    echo "Added <$NEW_KEY: $NEW_KEY_VALUE> to file \"$FILE\"."
fi
exit 0
