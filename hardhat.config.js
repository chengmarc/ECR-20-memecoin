require("dotenv").config();

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.28",
    networks: {
        mainnet: {
            url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,  // Infura Mainnet URL with Project ID
            accounts: [`0x${process.env.PRIVATE_KEY}`],  // Private key from .env
            gasPrice: 10 * 10**9,  // Set a gas price (e.g., 10 gwei)
        },
    },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: `${process.env.ETHERSCAN_API_KEY}`
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};

