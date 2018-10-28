#!/bin/sh
echo "Download http://sharelink-backend.appspot.com/db as db.json"
echo ""
curl -O http://sharelink-backend.appspot.com/db
mv db db.json