#!/usr/bin/bash

docker build -t my-node-service ./service 
rm ~/Documents/images/server-image.tar || true
mkdir -pv ~/Documents/images/
docker save -o ~/Documents/images/server-image.tar my-node-service:latest
ls -lh ~/Documents/images/server-image.tar
tar tf ~/Documents/images/server-image.tar
    