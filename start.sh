pwd>/home/ubuntu/location

cd /home/ubuntu/build

cd server
cp ../../.env .env
sudo rm -rf node_modules
sudo yarn

iptables -I INPUT 1 -p tcp --dport 3000 -j ACCEPT
sudo yarn start