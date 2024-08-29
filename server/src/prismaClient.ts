import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['error', 'warn'] });

async function main() {
  try {
    await prisma.$connect();
    console.log('Prisma connected to the database.');
  } catch (error) {
    console.error('Prisma failed to connect to the database:', error);
    process.exit(1);
  }
}

main();

export default prisma;
