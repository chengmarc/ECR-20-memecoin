

# ECR20 Meme Coin

[![node.js - v23](https://img.shields.io/static/v1?label=node.js&message=v23&color=green&logo=node.js&logoColor=white)](https://)
[![solidity - v0.8.29](https://img.shields.io/static/v1?label=solidity&message=v0.8.29&color=purple&logo=solidity&logoColor=white)](https://)
[![openzepplin-contracts - v5.1.0](https://img.shields.io/static/v1?label=openzepplin-contracts&message=v5.1.0&color=blue)](https://)


This repository contains a basic implementation of an ECR20 meme coin, with a custom supply and symbol. It features the following components:

## 1. **ECR20 Token Contract**
- A modified copy of the essential ECR20 standard, with customized supply and symbol for the meme coin.

## 2. **Hardhat Configuration & Deployment**
- Configurations for Hardhat, including network settings and deployment parameters.
- A deployment script written in JavaScript that compiles and deploys the ECR20 token to the selected network.

## 3. **Bash Setup Script**
- A bash script that automates the setup process:
  - Uses NVM (Node Version Manager) to install the required version of Node.js.
  - Installs the necessary dependencies with `npm`, including the `ethers` library.
  - Uses Hardhat to compile the contract code.
  - Deploys the contract and verifies it on Etherscan.

## 4. **Environment Variables**
- Users must create a `.env` file containing the following sensitive information:
  - `ADDRESS`: Address from which the contract will be deployed.
  - `PRIVATE_KEY`: Private key of the deployer’s wallet.
  - `INFURA_PROJECT_ID`: Infura project API key for connecting to the Ethereum network.
  - `ETHERSCAN_API_KEY`: API key for verifying the contract on Etherscan.
