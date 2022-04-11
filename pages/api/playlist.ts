import prisma from "../../lib/prisma";
import { validateRoutes } from "../../lib/auth";

export default validateRoutes(async (req, res, user) => {
  const playlist = await prisma.playlist.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: "asc",
    },
  });
  res.json(playlist);
});
