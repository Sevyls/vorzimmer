cd dist
git rm *
git commit -m "Remove old files"
cd ..
ng b --prod
cd dist
git add -A
git commit -m "Deploy new files"
git push pi master
