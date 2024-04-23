const express = require(`express`);
const usersRouter = express.Router();

const { createUsers, getAllUsers } = require(`../users`);

usersRouter.get("/", async(req, res, next) => {
  try {
    const users = await getAllUsers();

    res.send({
      users
    })
  } catch(error) {
    console.log(error);
  }
})

//I Don't Got Time To Make The Login And Register Part.