#!/bin/sh
./db-backup.sh
gcloud config set project sharelink-jsonserver
gcloud app deploy --quiet