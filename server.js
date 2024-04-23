const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const apiRouter = require(`./api`);
app.use(`/api`, apiRouter);

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.listen(3000, () => {
  console.log("Server in 3000")
})