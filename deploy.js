require("ethers");
require("dotenv").config();

require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");

async function main() {
    // Specify the address to deploy from
    const deployerAddress = `${process.env.ADDRESS}`;

    // Get the wallet for the deployer
    const deployer = await ethers.getSigner(deployerAddress);
    console.log("Deploying contract with the account:", deployer.address);

    // Get the contract factory for MemeCoin
    const MemeCoin = await ethers.getContractFactory("MemeCoin");

    // Deploy the contract (this will mint the initial supply to the deployer's address)
    console.log("Deploying MemeCoin...");
    const memeCoin = await MemeCoin.deploy(); // Deploy the contract, which mints 7.8 billion tokens
    console.log("MemeCoin deployed.");

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
