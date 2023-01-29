// eslint-disable-next-line filenames/match-exported
import * as contentful from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "libs/client";

export type WorkInChargeData =
  contentful.EntryCollection<Contentful.IWorkInChargeFields>;

export default async function handler(
  { query }: NextApiRequest,
  res: NextApiResponse<WorkInChargeData>
): Promise<void> {
  const contentType: Contentful.CONTENT_TYPE = "workInCharge";
  const entries = await client.getEntries<Contentful.IWorkInChargeFields>({
    ...query,
    content_type: contentType,
  });

  res.status(200).json(entries);
}
