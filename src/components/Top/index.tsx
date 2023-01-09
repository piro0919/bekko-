"use client";
import Image from "next/image";
import useScrollbarSize from "react-scrollbar-size";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "usehooks-ts";
import styles from "./style.module.scss";

export default function Top(): JSX.Element {
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
          {[
            "http://img.youtube.com/vi/jpiz5RLqSgw/maxresdefault.jpg",
            "http://img.youtube.com/vi/L57MI58_pPc/maxresdefault.jpg",
            "http://img.youtube.com/vi/JVBCojs8Ccg/maxresdefault.jpg",
            "http://img.youtube.com/vi/9E-Q-imZq00/maxresdefault.jpg",
          ].map((url) => (
            <SwiperSlide key={url}>
              <div className={styles.imageWrapper}>
                <Image
                  alt=""
                  fill={true}
                  src={url}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.newsBlock}>
        <div className={styles.inner}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div>
                2023年3月31日(金)公開 劇場アニメ「らくだい魔女
                フウカと闇の魔女」の劇伴（音楽）を山崎泰之さんと担当します。
              </div>
              <div className={styles.date}>2022.12.22</div>
            </li>
            <li className={styles.item}>
              <div>
                TVアニメ『それでも歩は寄せてくる』
                のサントラが各配信サイトにて開始されました。
              </div>
              <div className={styles.date}>2022.12.21</div>
            </li>
            <li className={styles.item}>
              <div>
                2023年4月放送 TVアニメ「カワイスギクライシス」の
                劇伴（音楽）を瀬尾祐介さんと担当します。
              </div>
              <div className={styles.date}>2022.12.18</div>
            </li>
            <li className={styles.item}>
              <div>
                2023年夏放送 TVアニメ「 ダークギャザリング」の
                劇伴（音楽）をKOHTA YAMAMOTOさん、瀬尾祐介さんと担当します。
              </div>
              <div className={styles.date}>2022.11.10</div>
            </li>
            <li className={styles.item}>
              <div>
                2023年1月放送予定 TVアニメ『もういっぽん！』
                劇伴（音楽）担当します。
              </div>
              <div className={styles.date}>2022.04.27</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
