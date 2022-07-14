require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");



// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// eslint-disable-next-line no-undef
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.12",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/1331c59dd4a547b3a80c9c282063bed4" ,
      accounts:["a40289fe12e7209a24790db12ea43fa0bd58a0c5c0741e98fc7b271df7afd148"],
    },
  },
  etherscan: {
    apiKey: "GQYCRX15FKGSIP49BBDMDY7BFE443D5IB3",
  }
};
