import queryString from "query-string";
import Home, { HomeProps } from "components/Home";
import { NewsData } from "pages/api/news";
import { YouTubeData } from "pages/api/youTube";

// revalidate every hour
export const revalidate = 3600;

async function getNews(): Promise<NewsData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        limit: 5,
        order: "-fields.date",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/news`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

async function getYouTube(): Promise<YouTubeData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        limit: 6,
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/youTube`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

export default async function Page(): Promise<JSX.Element> {
  const [newsData, youTubeData] = await Promise.all([getNews(), getYouTube()]);
  const newsList: HomeProps["newsList"] = newsData.items.map(
    ({ fields: { date, title, url } }) => ({
      date,
      title,
      url: url || "",
    })
  );
  const youTubeList: HomeProps["youTubeList"] = youTubeData.items.map(
    ({ fields: { url } }) => ({
      url,
    })
  );

  return <Home newsList={newsList} youTubeList={youTubeList} />;
}
