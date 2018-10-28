#!/bin/sh
echo "Download http://sharelink-backend.appspot.com/db as db.json"
curl -O http://sharelink-backend.appspot.com/db
mv db db.json
gcloud config set project sharelink-backend
gcloud app deploy --quiet