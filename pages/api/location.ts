import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let ip =
    (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress;

  // TypeScript isn't sure if ip is a string or an array of strings. We explicitly check for it.
  if (Array.isArray(ip)) {
    ip = ip[0];
  }

  if (!ip || ip === '::1') {
    ip = process.env.TEST_IP; // A dummy IP (Google's public DNS IP) for testing
  }

  if (ip?.startsWith('::ffff:')) {
    ip = ip.substring(7);
  }

  try {
    const response = await axios.get(
      `http://api.ipstack.com/${ip}?access_key=${process.env.IP_KEY}`
    );

    if (response.data && response.data.city && response.data.country_name) {
      const location = `${response.data.city}, ${response.data.country_name}`;
      res.status(200).json({ location });
    } else {
      res.status(500).json({ error: 'Invalid location data from IPStack' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to get location' });
    }
  }
}
