import { validateRoutes } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoutes(async (req, res, user) => {
  const playlistCount = await prisma.playlist.count({
    where: {
      user: {
        id: user.id,
      },
    },
  });
  res.json({
    user,
    playlistCount,
  });
});
