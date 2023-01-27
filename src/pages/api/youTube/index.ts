// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type YouTubeData = contentful.EntryCollection<Contentful.IYouTubeFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<YouTubeData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "youTube";
  const entries = await client.getEntries<Contentful.IYouTubeFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
