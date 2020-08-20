pwd>/home/ubuntu/location

cd /home/ubuntu/build
cd server
cp ../../.env .env
sudo rm -rf node_modules
sudo yarn

# sudo fuser -k -n tcp 3000
# sudo yarn start
pm2 reload app-server 