// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type AndMoreData = contentful.EntryCollection<Contentful.IAndMoreFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<AndMoreData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "andMore";
  const entries = await client.getEntries<Contentful.IAndMoreFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
