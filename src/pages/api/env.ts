// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  env: string,
  table?: string,
  vercelEnv?: string,
  nextEnv?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const environment = process.env.NODE_ENV
  const table = process.env.TABLE_NAME
  const vercelEnv = process.env.VERCEL_ENV
  const nextEnv = process.env.NEXT_PUBLIC_VERCEL_ENV

  res.status(200)
  .json({
    env: environment,
    table: table,
    vercelEnv: vercelEnv,
    nextEnv: nextEnv
  })
}