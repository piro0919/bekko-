// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type DramaCdData = contentful.EntryCollection<Contentful.IDramaCdFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<DramaCdData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "dramaCd";
  const entries = await client.getEntries<Contentful.IDramaCdFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
