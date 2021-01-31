import { rest } from "msw";
const datas = require("./datas/articles.json");
export const handlers = [
  rest.get("http://localhost:3000/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(datas));
  }),
  rest.get("http://localhost:3000/posts/list/:id", (req, res, ctx) => {
    const { id } = req.params;
    let cocktail = [];
    datas.map((data) => {
      if (data.idDrink === id) {
        cocktail = data;
      }
    });
    return res(ctx.status(200), ctx.json(cocktail));
  }),
];
