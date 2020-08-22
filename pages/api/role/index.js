import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function role(req, res) {
  if (req.method === 'GET') {
    const data = await prisma.role.findMany();
    res.json({
      messages: `fetched ${data.length} roles`,
      data,
    });
  } else if (req.method === 'POST') {
    const { name } = req.body;

    const data = await prisma.role.create({
      data: {
        name,
      },
    });

    res.json({
      messages: `Created new Role: ${name}`,
      data,
    });
  } else {
    res.json({
      messages: 'Role API',
    });
  }
}

export default role;
