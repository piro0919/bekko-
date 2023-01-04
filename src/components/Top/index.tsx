"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "./style.module.scss";
import Image from "next/image";

export default function Top(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Swiper
          autoplay={true}
          slidesPerView={1.4}
          centeredSlides={true}
          spaceBetween={48}
          modules={[Navigation]}
          navigation={true}
          loop={true}
        >
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <Image
                alt=""
                fill={true}
                src="http://img.youtube.com/vi/jpiz5RLqSgw/maxresdefault.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <Image
                alt=""
                fill={true}
                src="http://img.youtube.com/vi/L57MI58_pPc/maxresdefault.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <Image
                alt=""
                fill={true}
                src="http://img.youtube.com/vi/JVBCojs8Ccg/maxresdefault.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageWrapper}>
              <Image
                alt=""
                fill={true}
                src="http://img.youtube.com/vi/9E-Q-imZq00/maxresdefault.jpg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <article>
          <h2>NEWS</h2>
          <ul>
            <li>
              <div>2022.12.22</div>
              <div>
                2023年3月31日(金)公開 劇場アニメ「らくだい魔女
                フウカと闇の魔女」の劇伴（音楽）を山崎泰之さんと担当します。
              </div>
            </li>
            <li>
              <div>2022.12.21</div>
              <div>
                TVアニメ『それでも歩は寄せてくる』
                のサントラが各配信サイトにて開始されました。
              </div>
            </li>
            <li>
              <div>2022.12.18</div>
              <div>
                2023年4月放送 TVアニメ「カワイスギクライシス」の
                劇伴（音楽）を瀬尾祐介さんと担当します。
              </div>
            </li>
            <li>
              <div>2022.11.10</div>
              <div>
                2023年夏放送 TVアニメ「 ダークギャザリング」の
                劇伴（音楽）をKOHTA YAMAMOTOさん、瀬尾祐介さんと担当します。
              </div>
            </li>
            <li>
              <div>2022.04.27</div>
              <div>
                2023年1月放送予定 TVアニメ『もういっぽん！』
                劇伴（音楽）担当します。
              </div>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
