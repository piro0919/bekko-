// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type AppleMusicData =
  contentful.EntryCollection<Contentful.IAppleMusicFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<AppleMusicData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "appleMusic";
  const entries = await client.getEntries<Contentful.IAppleMusicFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
