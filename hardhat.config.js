require("@nomicfoundation/hardhat-toolbox");


// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "67d9ec71f3cf4f62a46313302ee22d66";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const Sepolia_PRIVATE_KEY = "8b0c046656b00a5075c0fdb964bdfe8dd2ec9052eb632d9114b5554365d279e0";
const Etherscan_API_KEY = "QC3QD7I1GA76W7Z3AKVGHS7EBPZ11VZXPP";

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [Sepolia_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: Etherscan_API_KEY,
  }
};