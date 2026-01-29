import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
  timestamp: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await new Promise(resolve => setTimeout(resolve, 0))
  res.status(200).json({
    message: 'Test API working',
    timestamp: new Date().toISOString(),
  })
}
