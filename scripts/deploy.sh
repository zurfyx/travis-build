#!/bin/bash
# http://www.steveklabnik.com/automatically_update_github_pages_with_travis_example/

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd dist

git init
git config user.name "Travis CI"
git config user.email "tra@vi.s"

git remote add upstream "https://$GH_TOKEN@github.com/zurfyx/travis-build.git"
git fetch upstream
git reset upstream/gh-pages

echo "zurfyx.com" > CNAME

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
