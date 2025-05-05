#!/bin/bash

npm run build
aws s3 rm s3://td-demo-cf --recursive
aws s3 cp ./out s3://td-demo-cf/ --recursive