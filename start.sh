pwd>/home/ubuntu/location

cd /home/ubuntu/build

cd server/src

pm2 stop app.ts
pm2 start app.ts
