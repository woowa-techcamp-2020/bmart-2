pwd>/home/ubuntu/location

cd /home/ubuntu/build
cd server
sudo cp ../../.env .env

# sudo fuser -k -n tcp 3000
# sudo yarn start
pm2 reload app-server 