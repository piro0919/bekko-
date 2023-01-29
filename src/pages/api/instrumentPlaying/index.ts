// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type InstrumentPlayingData =
  contentful.EntryCollection<Contentful.IInstrumentPlayingFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<InstrumentPlayingData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "instrumentPlaying";
  const entries = await client.getEntries<Contentful.IInstrumentPlayingFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
