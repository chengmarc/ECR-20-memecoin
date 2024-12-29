module.exports = {
    solidity: "0.8.28",
    networks: {
        mainnet: {
            url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,  // Infura Mainnet URL with Project ID
            accounts: [`0x${process.env.PRIVATE_KEY}`],  // Private key from .env
            gasPrice: 20000000000,  // Set a gas price (e.g., 20 gwei)
        },
    },
};

