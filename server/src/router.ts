import { Router } from "express";
const { requiresAuth } = require("express-openid-connect");

const router = Router();

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Auth0 Webapp sample Nodejs",
    // @ts-ignore
    isAuthenticated: req.oidc.isAuthenticated(),
  });
});

router.get("/profile", requiresAuth(), function (req, res, next) {
  res.render("profile", {
    // @ts-ignore
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: "Profile page",
  });
});

export { router };
