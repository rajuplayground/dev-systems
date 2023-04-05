import { rest } from "msw"


export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
        return res(
          ctx.json([
            { id: 1, title: 'todo 1' },
            { id: 2, title: 'todo 2' },
            { id: 3, title: 'todo 3' },
          ])
        );
      })
]
