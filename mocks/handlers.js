import { rest } from 'msw'
const  datas = require('./datas/articles.json')
export const handlers = [

  rest.get('http://localhost:3000/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(datas),
    )
  }),
]