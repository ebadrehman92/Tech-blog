const { Post } = require("../models");

const postData = [
  {
    title: "Big Brains 1",
    content: "Just adding some content for 1.",
    user_id: 1,
  },
  {
    title: "Big Brains 2",
    content: "Just adding some content for 2.",
    user_id: 2,
  },
  {
    title: "Big Brains 3",
    content: "Just adding some content for 3.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
