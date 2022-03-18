import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase";

const testAuthor: Author = {
  firstName: "Tony",
  lastName: "Boules",
  dateAdded: new Date().toISOString(),
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const author = await db.collection("author").add(testAuthor);

    res.status(200).json(author.id);
  } catch (error) {
    res.status(400).end();
  }

  res.status(200).json(testAuthor);
}
