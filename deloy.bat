git init
git add -A
pause
git commit -m "deploy"
git push
npm run build
cd dist
pause
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/nguyenvancongdev/vuejs-demo.git master:gh-pages