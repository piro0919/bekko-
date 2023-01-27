import queryString from "query-string";
import Home from "components/Home";
import { NewsData } from "pages/api/news";

// revalidate every hour
export const revalidate = 3600;

async function getNews(): Promise<NewsData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        limit: 5,
        order: "-fields.date",
      },
      url: "http://localhost:3000/api/news",
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

export default async function Page(): Promise<JSX.Element> {
  const newsData = await getNews();
  const newsList = newsData.items.map(({ fields: { date, title, url } }) => ({
    date,
    title,
    url,
  }));

  return <Home newsList={newsList} />;
}
