"use client";
import { Poppins } from "@next/font/google";
import useCollapse from "react-collapsed";
import {
  IoChevronDownCircleSharp,
  IoChevronUpCircleSharp,
} from "react-icons/io5";
import styles from "./style.module.scss";

type ArticleProps = {
  heading: string;
};

function Article({ heading }: ArticleProps): JSX.Element {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <article className={styles.article}>
      <h2 className={poppins.className}>{heading}</h2>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          <li className={styles.item}>
            【劇場アニメ】「らくだい魔女 フウカと闇の魔女」2023年3月31日(金)公開
            山崎泰之さんと共作
          </li>
          <li className={styles.item}>
            【アニメ】「ダークギャザリング」2023年夏放送開始 KOHTA
            YAMAMOTOさん、瀬尾祐介さんと共作
          </li>
          <li className={styles.item}>
            【アニメ】「カワイスギクライシス」2023年4月放送開始
            瀬尾祐介さんと共作
          </li>
        </ul>
        <ul {...getCollapseProps()} className={styles.collapseList}>
          <li className={styles.item}>
            【アニメ】「もういっぽん！」2023年1月放送開始
          </li>
        </ul>
      </div>
      <div className={styles.bottomWrapper}>
        <button {...getToggleProps()}>
          {isExpanded ? (
            <IoChevronUpCircleSharp color="#fff" size={24} />
          ) : (
            <IoChevronDownCircleSharp color="#fff" size={24} />
          )}
        </button>
      </div>
    </article>
  );
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Works(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Article heading="Incidental Music" />
        <Article heading="Game Music" />
        <Article heading="Song Music" />
        <Article heading="Instrument Playing" />
        <Article heading="Drama CD" />
        <Article heading="And More" />
      </div>
    </div>
  );
}
