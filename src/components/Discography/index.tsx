import Image from "next/image";
import styles from "./style.module.scss";

export default function Discography(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <article>
          <h2>YouTube</h2>
          <div className={styles.listWrapper}>
            <ul className={styles.list}>
              {[
                {
                  title: "TVアニメ「もういっぽん！」PV",
                  url: "http://img.youtube.com/vi/jpiz5RLqSgw/maxresdefault.jpg",
                },
                {
                  title: "Nintendo Switch「滄海天記」ティザーPV",
                  url: "http://img.youtube.com/vi/DDqAMpcIFqs/maxresdefault.jpg",
                },
              ].map(({ title, url }) => (
                <li key={url}>
                  <div className={styles.imageWrapper}>
                    <Image
                      alt=""
                      fill={true}
                      src={url}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.title}>{title}</div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
      <div className={styles.evenBlock}>
        <div className={styles.inner}>
          <article>
            <h2>Spotify</h2>
            <div className={styles.listWrapper}>
              <ul className={styles.list}>
                {[
                  "https://open.spotify.com/embed/playlist/6xxdwNamfEr4YeVYGZVZC4?utm_source=generator",
                  "https://open.spotify.com/embed/album/4qDfLMoFYOPWG0B9wLK3JW?utm_source=generator",
                ].map((url) => (
                  <li key={url}>
                    <iframe
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      height="352"
                      loading="lazy"
                      src={url}
                      style={{ borderRadius: "12px" }}
                      width="100%"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div className={styles.inner}>
        <article>
          <h2>BOOTH</h2>
          <div className={styles.listWrapper}>
            <ul className={styles.list2}>
              <li>
                <div className={styles.imageWrapper2}>
                  <Image
                    alt=""
                    fill={true}
                    src="cc8ecba2-0d1f-4daa-865e-a5763def0c78_base_resized.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.title}>
                  Please, please smile. NATSUZOLabo-worksI
                </div>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className={styles.evenBlock}>
        <div className={styles.inner}>
          <article>
            <h2>Apple Music</h2>
            <div className={styles.listWrapper}>
              <ul className={styles.list}>
                <li>
                  <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    height="450"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/jp/album/%E6%98%A5%E5%91%8A%E3%81%AE%E8%B4%84/1496318590"
                    style={{
                      background: "transparent",
                      maxWidth: "660px",
                      overflow: "hidden",
                      width: "100%",
                    }}
                  />
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
