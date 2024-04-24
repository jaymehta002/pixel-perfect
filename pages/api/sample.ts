// pages/api/sample.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handling different HTTP methods
  if (req.method === 'GET') {
    // Responding to GET request
    res.status(200).json({ message: 'GET request received' });
  } else if (req.method === 'POST') {
    // Responding to POST request
    res.status(200).json({ message: 'POST request received' });
  } else {
    // Handling other HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
