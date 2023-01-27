// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type BoothData = contentful.EntryCollection<Contentful.IBoothFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<BoothData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "booth";
  const entries = await client.getEntries<Contentful.IBoothFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
