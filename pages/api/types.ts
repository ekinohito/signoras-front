// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Type, types} from "../../data/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Type[]>
) {
  res.status(200).json(types)
}
