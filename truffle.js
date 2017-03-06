// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  rpc: {
   host: "localhost",
   port: 8545
 },
 networks: {
   development: {
     host: "localhost",
     port: 8545,
     network_id: "*"
   },
   staging: {
     host: "localhost",
     port: 8546,
     network_id: 1337
   },
   ropsten: {
     host: "158.253.8.12",
     port: 8545,
     network_id: 3
   }
}