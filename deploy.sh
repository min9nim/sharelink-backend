#!/bin/sh
./db-backup.sh
gcloud config set project sharelink-backend
gcloud app deploy --quiet