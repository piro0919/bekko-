import queryString from "query-string";
import Works, { WorksProps } from "components/Works";
import { AndMoreData } from "pages/api/andMore";
import { DramaCdData } from "pages/api/dramaCd";
import { GameMusicData } from "pages/api/gameMusic";
import { IncidentalMusicData } from "pages/api/incidentalMusic";
import { InstrumentPlayingData } from "pages/api/instrumentPlaying";
import { SongMusicData } from "pages/api/songMusic";

// revalidate every hour
export const revalidate = 3600;

async function getAndMore(): Promise<AndMoreData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/andMore`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

async function getDramaCd(): Promise<DramaCdData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/dramaCd`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

async function getGameMusic(): Promise<GameMusicData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/gameMusic`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

async function getIncidentalMusic(): Promise<IncidentalMusicData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/incidentalMusic`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

async function getInstrumentPlaying(): Promise<InstrumentPlayingData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/incidentalMusic`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

async function getSongMusic(): Promise<SongMusicData> {
  const res = await fetch(
    queryString.stringifyUrl({
      query: {
        order: "-sys.createdAt",
      },
      url: `${process.env.ORIGIN_URL || ""}/api/songMusic`,
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

export default async function Page(): Promise<JSX.Element> {
  const [
    andMoreData,
    dramaCdData,
    gameMusicData,
    incidentalMusicData,
    instrumentPlayingData,
    songMusicData,
  ] = await Promise.all([
    getAndMore(),
    getDramaCd(),
    getGameMusic(),
    getIncidentalMusic(),
    getInstrumentPlaying(),
    getSongMusic(),
  ]);
  const andMoreList: WorksProps["andMoreList"] = andMoreData.items.map(
    ({ fields: { title, url } }) => ({
      title,
      url: url || "",
    })
  );
  const dramaCdList: WorksProps["dramaCdList"] = dramaCdData.items.map(
    ({ fields: { title, url } }) => ({
      title,
      url: url || "",
    })
  );
  const gameMusicList: WorksProps["gameMusicList"] = gameMusicData.items.map(
    ({ fields: { title, url } }) => ({
      title,
      url: url || "",
    })
  );
  const incidentalMusicList: WorksProps["incidentalMusicList"] =
    incidentalMusicData.items.map(({ fields: { title, url } }) => ({
      title,
      url: url || "",
    }));
  const instrumentPlayingList: WorksProps["instrumentPlayingList"] =
    instrumentPlayingData.items.map(({ fields: { title, url } }) => ({
      title,
      url: url || "",
    }));
  const songMusicList: WorksProps["songMusicList"] = songMusicData.items.map(
    ({ fields: { title, url } }) => ({
      title,
      url: url || "",
    })
  );

  return (
    <Works
      andMoreList={andMoreList}
      dramaCdList={dramaCdList}
      gameMusicList={gameMusicList}
      incidentalMusicList={incidentalMusicList}
      instrumentPlayingList={instrumentPlayingList}
      songMusicList={songMusicList}
    />
  );
}
