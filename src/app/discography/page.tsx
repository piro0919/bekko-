import queryString from "query-string";
import Discography from "components/Discography";
import { AppleMusicData } from "pages/api/appleMusic";
import { BoothData } from "pages/api/booth";
import { SpotifyData } from "pages/api/spotify";
import { YouTubeData } from "pages/api/youTube";

// revalidate every hour
export const revalidate = 3600;

async function getAppleMusic(): Promise<AppleMusicData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/appleMusic`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

async function getBooth(): Promise<BoothData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/booth`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

async function getSpotify(): Promise<SpotifyData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/spotify`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

async function getYouTube(): Promise<YouTubeData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/youTube`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

export default async function Page(): Promise<JSX.Element> {
  const [appleMusicData, boothData, spotifyData, youTubeData] =
    await Promise.all([
      getAppleMusic(),
      getBooth(),
      getSpotify(),
      getYouTube(),
    ]);
  const appleMusicList = appleMusicData.items.map(({ fields: { url } }) => ({
    url,
  }));
  const boothList = boothData.items.map(
    ({
      fields: {
        jacket: {
          fields: {
            file: { url: jacketUrl },
          },
        },
        title,
        url,
      },
    }) => ({
      jacketUrl,
      title,
      url,
    })
  );
  const spotifyList = spotifyData.items.map(({ fields: { url } }) => ({
    url,
  }));
  const youTubeList = youTubeData.items.map(({ fields: { title, url } }) => ({
    title,
    url,
  }));

  return (
    <Discography
      appleMusicList={appleMusicList}
      boothList={boothList}
      spotifyList={spotifyList}
      youTubeList={youTubeList}
    />
  );
}
