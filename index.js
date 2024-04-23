const { PrismaClient } = require('@prisma/client')
const { createUsers, getAllUsers } = require(`./users`);
const { createPost, getAllPosts } = require(`./posts`);

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
createUsers("user9", "contrasena8");
console.log("USER CREATED");

createPost(2, "hola", "text");
console.log("POST CREATED");

getAllPosts();
console.log("ALL POSTS");

getAllUsers();
console.log("ALL USERS");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })