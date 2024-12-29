async function main() {
    // Specify the address to deploy from
    const deployerAddress = "dummy_address";

    // Get the wallet for the deployer
    const deployer = await ethers.getSigner(deployerAddress);
    console.log("Deploying contract with the account:", deployer.address);

    // Get the contract factory for MemeCoin
    const MemeCoin = await ethers.getContractFactory("MemeCoin");

    // Deploy the contract (this will mint the initial supply to the deployer's address)
    console.log("Deploying MemeCoin...");
    const memeCoin = await MemeCoin.deploy(); // Deploy the contract, which mints 7.8 billion tokens
    console.log("MemeCoin deployed to:", memeCoin.address);

    // Check the total supply after deployment
    const totalSupply = await memeCoin.totalSupply();
    console.log("Total Supply:", ethers.utils.formatUnits(totalSupply, 18)); // Format the supply to 18 decimals

    // Check the deployer's balance after minting
    const deployerBalance = await memeCoin.balanceOf(deployer.address);
    console.log("Deployer's balance:", ethers.utils.formatUnits(deployerBalance, 18));

    // Optionally, you can log other details or interactions here
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
