"use client";
import { Poppins } from "@next/font/google";
import { useMemo } from "react";
import useCollapse from "react-collapsed";
import {
  IoChevronDownCircleSharp,
  IoChevronUpCircleSharp,
} from "react-icons/io5";
import styles from "./style.module.scss";

type Work = {
  title: string;
  url: string;
};

type ArticleProps = {
  heading: string;
  works: Work[];
};

function Article({ heading, works }: ArticleProps): JSX.Element {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const items = useMemo(
    () =>
      works.map(({ title, url }) => (
        <li className={styles.item} key={url}>
          {url ? (
            <a
              className={styles.link}
              href={url}
              rel="noreferrer"
              target="_blank"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </li>
      )),
    [works]
  );

  return (
    <article className={styles.article}>
      <h2 className={poppins.className}>{heading}</h2>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>{items.filter((_, index) => index < 3)}</ul>
        <ul {...getCollapseProps()}>
          {items.filter((_, index) => index >= 3)}
        </ul>
      </div>
      <div className={styles.bottomWrapper}>
        {items.at(3) ? (
          <button {...getToggleProps()}>
            {isExpanded ? (
              <IoChevronUpCircleSharp color="#fff" size={24} />
            ) : (
              <IoChevronDownCircleSharp color="#fff" size={24} />
            )}
          </button>
        ) : null}
      </div>
    </article>
  );
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export type WorksProps = {
  andMoreList: ArticleProps["works"];
  dramaCdList: ArticleProps["works"];
  gameMusicList: ArticleProps["works"];
  incidentalMusicList: ArticleProps["works"];
  instrumentPlayingList: ArticleProps["works"];
  songMusicList: ArticleProps["works"];
};

export default function Works({
  andMoreList,
  dramaCdList,
  gameMusicList,
  incidentalMusicList,
  instrumentPlayingList,
  songMusicList,
}: WorksProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Article heading="Incidental Music" works={incidentalMusicList} />
        <Article heading="Game Music" works={gameMusicList} />
        <Article heading="Song Music" works={songMusicList} />
        <Article heading="Instrument Playing" works={instrumentPlayingList} />
        <Article heading="Drama CD" works={dramaCdList} />
        <Article heading="And More" works={andMoreList} />
      </div>
    </div>
  );
}
