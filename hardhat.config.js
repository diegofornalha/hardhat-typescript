require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-goerli.alchemyapi.io/v2/_bEj1iL2DfptrO0R2jsDrHAhZPKRP5eU",
      accounts: ["ead8546c078edc2522d3130f231e74bf521e29cc2e76d005ce82f93c798873ef"],
    },
  },
};