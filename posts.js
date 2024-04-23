const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createPost = async({userId, title, content}) => {
  try {
    const newPost = await prisma.post.create({
      data: {
        userId,
        title,
        content
      }
    })
    return newPost
  } catch (error) {
    console.log(error);
  }
}

const getAllPosts = async() => {
  const allPosts = await prisma.post.findMany({
  })
  console.dir(allPosts, { depth: null })
}

module.exports = {
  createPost,
  getAllPosts
}