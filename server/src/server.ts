// @ts-ignore
import dotenv from "dotenv";
import express from "express";
import http from "http";
import logger from "morgan";
import path from "path";
import { router } from "./router";
import { auth } from "express-openid-connect";

dotenv.load();

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const port = process.env.PORT;

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: `http://localhost:${port}`,
};

app.use(auth(config));

// Middleware to make the `user` object available for all views
// @ts-ignore
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

app.use("/", router);

// Catch 404 and forward to error handler
// @ts-ignore
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  // @ts-ignore
  err.status = 404;
  next(err);
});

// Error handlers
// @ts-ignore
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: process.env.NODE_ENV !== "production" ? err : {},
  });
});

http.createServer(app).listen(port, () => {
  console.log(`Listening on ${config.baseURL}`);
});
