import prisma from '../src/prismaClient';

async function main() {
  await prisma.card.createMany({
    data: [
      {
        title: 'Card 1',
        description: 'Description for card 1',
      },
      {
        title: 'Card 2',
        description: 'Description for card 2',
      },
      {
        title: 'Card 3',
        description: 'Description for card 3',
      },
    ],
  });

  console.log('Data seeded successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
