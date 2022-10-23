import Koa, { Context } from "koa";
import Router from "koa-router";
import cors from "kcors";

const PORT = 3000;
const app = new Koa();
const router = new Router();

router.get("/", async (ctx: Context) => {
  ctx.body = {
    message: "Hello World",
  };
});

router.get("/users", async (ctx: Context) => {
  ctx.body = {
    message: "Hello Users",
  };
});

app.use(router.routes());

app.listen(PORT);
