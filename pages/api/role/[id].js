import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function roleById(req, res) {
  const id = parseInt(req.query.id);

  if (req.method === 'GET') {
    const data = await prisma.role.findOne({
      where: { id },
    });
    res.json({
      messages: `found role by id ${data.id}`,
      data,
    });
  } else if (req.method === 'PATCH') {
    const data = await prisma.role.update({
      where: { id },
      data: { name: req.body.name },
    });

    res.json({
      message: `updated role id: ${data.id} name to ${req.body.name}`,
      data,
    });
  } else if (req.method === 'DELETE') {
    const data = await prisma.role.delete({
      where: { id },
    });
    res.json({
      message: `deleted role id: ${id}`,
      data,
    });
  } else {
    res.json({
      messages: 'Role By Id API',
    });
  }
}

export default roleById;
