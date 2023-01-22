import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET() {

  const res: Response = json({
    names: {
      "gandlaf21": "c4b5369a9db27a2e1bc97b25faa4862d9fcfa747506b1f272f8f4b36b812dbd6"
    }
  });

  res.headers.append('Access-Control-Allow-Origin', "*");

  return res
}