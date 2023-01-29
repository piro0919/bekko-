"use client";
import queryString from "query-string";
import useScrollbarSize from "react-scrollbar-size";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "usehooks-ts";
import styles from "./style.module.scss";

type News = {
  date: string;
  title: string;
  url: string;
};

type YouTube = {
  url: string;
};

export type HomeProps = {
  newsList: News[];
  youTubeList: YouTube[];
};

export default function Home({
  newsList,
  youTubeList,
}: HomeProps): JSX.Element {
  const { width: scrollbarWidth } = useScrollbarSize();
  const { width } = useWindowSize();

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.inner}
        style={{ width: `calc(100dvw - ${scrollbarWidth}px)` }}
      >
        <Swiper
          autoplay={{ delay: 10000, pauseOnMouseEnter: true }}
          centeredSlides={true}
          className={styles.swiper}
          loop={true}
          modules={[Autoplay, Navigation]}
          navigation={true}
          slidesPerView={1.4}
          spaceBetween={width >= 980 ? 48 : 24}
        >
          {youTubeList.map(({ url }) => (
            <SwiperSlide key={url}>
              <a href={url} rel="noreferrer" target="_blank">
                <div className={styles.iframeWrapper}>
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                    className={styles.iframe}
                    src={`https://www.youtube.com/embed/${
                      queryString.parseUrl(url).query.v?.toString() || ""
                    }?controls=0&modestbranding=1`}
                    title="YouTube video player"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.newsBlock}>
        <div className={styles.inner}>
          <ul className={styles.list}>
            {newsList.map(({ date, title, url }) => (
              <li className={styles.item} key={title}>
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
                  <div>{title}</div>
                )}
                <div className={styles.date}>{date}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
