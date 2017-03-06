var student = artifacts.require("./contracts/student.sol");

module.exports = function(deployer) {
  deployer.deploy(student);
};
