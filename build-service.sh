#!/usr/bin/bash

docker build -t my-node-service ./service 

docker save --output=./out/server-image.tar my-node-service:latest

tar tf ./out/server-image
