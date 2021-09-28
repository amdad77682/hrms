import nextConnect from "next-connect";
import clientPromise from "../mongodb";

async function database(req, res, next) {
  const client = await clientPromise;
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("notification");
  return next();
}
const middleware = nextConnect();
middleware.use(database);
export default middleware;
