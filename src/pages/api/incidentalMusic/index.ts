// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type IncidentalMusicData =
  contentful.EntryCollection<Contentful.IIncidentalMusicFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<IncidentalMusicData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "incidentalMusic";
  const entries = await client.getEntries<Contentful.IIncidentalMusicFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
