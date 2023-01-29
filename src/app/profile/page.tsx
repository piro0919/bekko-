import * as contentful from "contentful";
import Profile, { ProfileProps } from "components/Profile";
import client from "libs/client";

// revalidate every hour
export const revalidate = 3600;

type WorkInChargeData =
  contentful.EntryCollection<Contentful.IWorkInChargeFields>;

async function getWorkInCharge(): Promise<WorkInChargeData> {
  const contentType: Contentful.CONTENT_TYPE = "workInCharge";
  const entries = await client.getEntries<Contentful.IWorkInChargeFields>({
    content_type: contentType,
    order: "-sys.createdAt",
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return entries;
}

export default async function Page(): Promise<JSX.Element> {
  const workInChargeData = await getWorkInCharge();
  const workInChargeList: ProfileProps["workInChargeList"] =
    workInChargeData.items.map(({ fields: { title, url } }) => ({
      title,
      url: url || "",
    }));

  return <Profile workInChargeList={workInChargeList} />;
}
