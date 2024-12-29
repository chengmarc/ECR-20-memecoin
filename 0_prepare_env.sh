##### Use NVM to install Node.js 

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.nvm/nvm.sh
nvm --version
nvm install node 
nvm use node 
node -v

##### Use NPM to install dependencies

npm init -y
npm install dotenv
npm install ethers
npm install @openzeppelin/contracts
npm audit fix --force
