// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type SpotifyData = contentful.EntryCollection<Contentful.ISpotifyFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<SpotifyData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "spotify";
  const entries = await client.getEntries<Contentful.ISpotifyFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
