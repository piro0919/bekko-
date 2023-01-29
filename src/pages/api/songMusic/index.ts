// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type SongMusicData =
  contentful.EntryCollection<Contentful.ISongMusicFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<SongMusicData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "songMusic";
  const entries = await client.getEntries<Contentful.ISongMusicFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
