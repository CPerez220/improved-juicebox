const express = require(`express`);
const postsRouter = express.Router();

const { createPost, getAllPosts} = require(`../posts`);

postsRouter.get("/", async(req, res, next) => {
  try {
    const allPosts = await getAllPosts();
  } catch (error) {
    console.log(error);
  }
})

postsRouter.post("/", async(req, res, next) => {
  const { title, content = "" } = req.body;

  const postData = {};
  try {
    postData.userId = req.user.id;
    postData.title = title;
    postData.content = content;

    const post = await createPost(postData);
    if(post) {
      res.send(post);
    } else {
      next({
        //I Don't Know.
      })
    }
  } catch (error) {
    console.log(error);
  }
})