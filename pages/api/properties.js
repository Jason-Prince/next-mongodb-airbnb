import { connectToDatabase } from 'util/mongodb';

const handler = async (req, res) => {
  const { db } = await connectToDatabase();

  const data =
    await db
    .collection("listingsAndReviews")
    .find({})
    .limit(20)
    .toArray();

  res.json(data);
}

export default handler;