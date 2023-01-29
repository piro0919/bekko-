import queryString from "query-string";
import Profile, { ProfileProps } from "components/Profile";
import { WorkInChargeData } from "pages/api/workInCharge";

// revalidate every hour
export const revalidate = 3600;

async function getWorkInCharge(): Promise<WorkInChargeData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/workInCharge`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
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
