// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type GameMusicData =
  contentful.EntryCollection<Contentful.IGameMusicFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<GameMusicData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "gameMusic";
  const entries = await client.getEntries<Contentful.IGameMusicFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
