import { Poppins } from "@next/font/google";
import Image from "next/image";
import queryString from "query-string";
import styles from "./style.module.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

type AppleMusic = {
  url: string;
};

type Booth = {
  jacketUrl: string;
  title: string;
  url: string;
};

type Spotify = {
  url: string;
};

type YouTube = {
  title: string;
  url: string;
};

export type DiscographyProps = {
  appleMusicList: AppleMusic[];
  boothList: Booth[];
  spotifyList: Spotify[];
  youTubeList: YouTube[];
};

export default function Discography({
  appleMusicList,
  boothList,
  spotifyList,
  youTubeList,
}: DiscographyProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.oddBlock}>
        <div className={styles.inner}>
          <article>
            <h2 className={poppins.className}>YouTube</h2>
            <div className={styles.listWrapper}>
              <ul className={styles.list}>
                {youTubeList.map(({ title, url }) => (
                  <li key={url}>
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
                    <div className={styles.title}>{title}</div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div className={styles.evenBlock}>
        <div className={styles.inner}>
          <article>
            <h2 className={poppins.className}>Spotify</h2>
            <div className={styles.listWrapper}>
              <ul className={styles.list}>
                {spotifyList.map(({ url }) => (
                  <li key={url}>
                    <iframe
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      height="352"
                      loading="lazy"
                      src={url.replace(
                        "open.spotify.com/",
                        "open.spotify.com/embed/"
                      )}
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
      <div className={styles.oddBlock}>
        <div className={styles.inner}>
          <article>
            <h2 className={poppins.className}>BOOTH</h2>
            <div className={styles.listWrapper}>
              <ul className={styles.list}>
                {boothList.map(({ jacketUrl, title, url }) => (
                  <li key={url}>
                    <div className={styles.imageWrapper2}>
                      <Image
                        alt=""
                        fill={true}
                        src={jacketUrl}
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
      </div>
      <div className={styles.evenBlock}>
        <div className={styles.inner}>
          <article>
            <h2 className={poppins.className}>Apple Music</h2>
            <div className={styles.listWrapper}>
              <ul className={styles.list}>
                {appleMusicList.map(({ url }) => (
                  <li key={url}>
                    <iframe
                      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                      height="450"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                      src={url.replace("https://", "https://embed.")}
                      style={{
                        background: "transparent",
                        maxWidth: "660px",
                        overflow: "hidden",
                        width: "100%",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
