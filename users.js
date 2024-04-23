const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createUsers = async(username, password) => {
  const newUser = await prisma.user.create({
    data: {
      username,
      password
    }
  }
  )
  return newUser;
}

const getAllUsers = async() => {
  const allUsers = await prisma.user.findMany({
  })
  console.dir(allUsers, { depth: null })
}

const getUserById = async(userId) => {
  try {
    const { rows: [user]} = await prisma.user.findUnique({
      id: userId
    })

    user.post = await getPostsByUser(userId);
    return user;
  } catch (error) {
    console.log(error);
  }
}

const getPostsByUser = async(userId) => {
  try {
    const { rows: postIds } = await prisma.post.id.findMany({
      userId
    }
    ) //NO IDEA WHAT I AM DOING HERE
  } catch(error) {

  }
}

module.exports = {
  createUsers,
  getAllUsers,
  getUserById
}