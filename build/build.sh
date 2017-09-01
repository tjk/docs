#!/bin/bash

set -e
# Set archive version for current docs
echo "Enter archive version: "
read RELEASE

# Set release version for new docs
echo "Enter release version: "
read NEXT

# Remove any local bindings
yarn unlink vuetify

# Refresh package installation
git checkout master
git pull
rm -rf node_modules
yarn

# Run archive
RELEASE=$RELEASE npm run archive

# Move to master
git add .
git stash
git co dev
git stash pop
git merge master

# Reset packages
rm -rf node_modules
yarn
NEXT=$NEXT npm run build