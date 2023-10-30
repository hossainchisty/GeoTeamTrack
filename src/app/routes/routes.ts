import express from "express";
import { UserRoute } from '../module/user/user.route';
import { AuthRoute } from '../module/auth/auth.route';

const router = express.Router();

const moduleRoutes = [
  { path: "/auth", route: AuthRoute },
  { path: "/users", route:  UserRoute },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const applicationRoutes = router;
