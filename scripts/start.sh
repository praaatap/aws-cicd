#!/bin/bash
cd /home/ubuntu/app
npm install
pm2 restart app || pm2 start index.js --name app