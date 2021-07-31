const { User } = require("../models");

const userData = [
  {
    username: "Bill",
    password: "billd",
  },
  {
    username: "Karan",
    password: "karanp",
  },
  {
    username: "James",
    password: "jamess",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
