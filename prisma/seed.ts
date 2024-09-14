import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function run() {
  await prisma.user.deleteMany()


     await prisma.user.create({
        data: {
          name: faker.internet.userName(),
          pass: "123456",
        },
      })
  await prisma.$disconnect()
}

run().catch(async e => {
    console.error(e)
    await prisma.$disconnect()
  })