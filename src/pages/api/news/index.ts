// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type NewsData = contentful.EntryCollection<Contentful.INewsFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<NewsData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "news";
  const entries = await client.getEntries<Contentful.INewsFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
