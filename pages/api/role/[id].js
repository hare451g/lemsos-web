import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function roleById(req, res) {
  const query = {
    where: {
      id: req.query,
    },
  };

  if (req.method === 'GET') {
    const data = await prisma.role.findOne(query);
    res.json({
      messages: `found role by id ${data.id}`,
      data,
    });
  } else if (req.method === 'PATCH') {
    const data = await prisma.role.update({
      where: query.where,
      data: { name: req.body.name },
    });

    res.json({
      message: `updated role id: ${role.id} name to ${name}`,
      data,
    });
  } else if (req.method === 'DELETE') {
    const roles = await prisma.role.delete(query);
    res.json(roles);
  } else {
    res.json({
      messages: 'Role By Id API',
    });
  }
}

export default roleById;
