import connectDb from '../../utils/db';

export default async function handler(req, res) {
  await connectDb();
  res.status(200).json({ name: 'Protik' })
}
