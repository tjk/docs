#!/bin/bash

set -e
# Set release version for new docs
echo "Enter release version: "
read NEXT

NEXT=$NEXT npm run build
git add -A
git commit -m "[build]"

git push