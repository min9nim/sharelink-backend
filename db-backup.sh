#!/bin/sh
echo "Download http://sharelink-jsonserver.appspot.com/db as db.json"
echo ""
curl -O http://sharelink-jsonserver.appspot.com/db
mv db db.json