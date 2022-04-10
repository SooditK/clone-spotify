import { validateRoutes } from "../../lib/auth";

export default validateRoutes((req, res, user) => {
  res.json({
    user,
  });
});
