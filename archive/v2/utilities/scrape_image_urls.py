#!/usr/bin/env python3

"""scrape_image_urls.py

Scrape all WordPress image URLs found in the <../content/blog> directory then download all images
into a matching subdirectory within the <../content/static/img> directory.
"""

import os
import re
import shutil
import urllib.parse
import urllib.request


def download_images(images, image_directory):
    """Download all images and save to the local file system.

    Args:
        images: List containing image URL strings.
        image_directory: String describing the directory where images should be saved.
    """
    for image in images:
        image_location = urllib.parse.urlparse(image).path.split('/')[-3:]
        image_location = os.sep.join(image_location)
        image_path = os.path.join(image_directory, image_location)
        make_directories(image_path)
        with urllib.request.urlopen(image) as in_file, open(image_path, 'wb') as out_file:
            shutil.copyfileobj(in_file, out_file)


def find_image_urls(haystack):
    """Returns a list of all matching image URLs in a string argument.

    Args:
        haystack: String through which to search for image URLs.

    Returns:
        List of image URL strings.
    """
    needle = re.compile('(http.*wp-content.*\.)(gif|jpg|jpeg|png|svg|tif)', re.IGNORECASE)
    matches = [''.join(m) for m in needle.findall(haystack)]
    return matches


def make_directories(path):
    """Create all directories in a file path that do not exist.

    Args:
        path: String containing the file path on the local drive.
    """
    path_head = os.path.split(path)[0]
    os.makedirs(path_head, exist_ok=True)


def search_content_files(content_directory, image_directory):
    """Opens and searches all content files for image URLs.

    Args:
        content_directory: String describing where the content files are stored.
        image_directory: String describing where the image files should be saved.
    """
    for dirpath, dirnames, filenames in os.walk(content_directory):
        for filename in filenames:
            content_file = os.path.join(dirpath, filename)
            with open(content_file, 'r') as f:
                images = find_image_urls(f.read())
                download_images(images, image_directory)


def main():
    """Searches content files for image URLs then downloads them to a local directory.
    """
    path_prefix = os.path.split(os.path.dirname(os.path.abspath(__file__)))[0]
    content_directory = os.path.join(path_prefix, 'content', 'articles')
    image_directory = os.path.join(path_prefix, 'content', 'images')
    search_content_files(content_directory, image_directory)


if __name__ == '__main__':
    main()
