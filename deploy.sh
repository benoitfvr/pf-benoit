#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.bfavrie.fr' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://Mowdyy.github.io
# git push -f git@github.com:Mowdyy/Mowdyy.github.io.git main

# if you are deploying to https://Mowdyy.github.io/pf-benoit
# git push -f git@github.com:Mowdyy/pf-benoit.git main:gh-pages

cd -