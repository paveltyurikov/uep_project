#!/usr/bin/env bash
npm run build --prefix frontend &&
rm static/js/*.js
rm static/css/*.css
cp frontend/build/static/js/*.js static/js/
cp frontend/build/static/css/*.css static/css/
cp frontend/build/index.html apps/templates/index.html