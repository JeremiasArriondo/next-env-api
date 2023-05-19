// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  env: string,
  table?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const environment = process.env.NODE_ENV
  const table = process.env.TABLE_NAME

  res.status(200).json({ env: environment, table: table})
}
