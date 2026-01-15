import { prisma } from './lib/prisma'

async function main() {
  const estudiante = await prisma.estudiante.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      pasantia: {
        create: {
          fechaInicio: '2020/02/02',
          notaFinal : 4.3,
         },
      },
    },
    include: {
      posts: true,
    },
  })
  console.log('Created user:', user)

  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.log('All users:', JSON.stringify(allUsers, null, 2))
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