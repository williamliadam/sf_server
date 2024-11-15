import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const william = await prisma.user.upsert({
    where: { email: 'willadamin@gmail.com' },
    update: {},
    create: {
      email: 'willadamin@gmail.com',
      name: 'WilliamLi',
      password: "123456",
      role: "ADMIN",
      phone: "178555833177",
      myPosts: {
        create: [
          {
            title: "First Post",
            stars: 899,
            content: "This is my first post",
            published: true,
            follows: 222,
          },
          {
            title: "Second Post",
            content: "This is my second post",
            published: false
          }
        ]
      }
    },
  })
  console.log({ william })
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