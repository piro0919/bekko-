import Image from "next/image";
import styles from "./style.module.scss";

export default function Profile(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <article>
          <div className={styles.articleInner}>
            <div>
              <h2>
                成田 旬<small>（なりた しゅん）</small>
              </h2>
              <div>
                <p>
                  Composer & Arranger
                  <br />
                  劇伴から歌物など幅広く業務を行なっております。
                  <br />
                  Vocaloid Mayuの開発者です。
                </p>
                <article>
                  <h3>業務内容</h3>
                  <p>
                    作曲・編曲・ギター、ベースの録音・サンプリング
                    ・歌のお直し・波形編集など
                  </p>
                </article>
                <article>
                  <h3>主な担当作品</h3>
                  <ul>
                    {[
                      "カワイスギクライシス",
                      "ダークギャザリング",
                      "それでも歩は寄せてくる",
                      "もういっぽん！",
                      "闘神機ジーズフレーム",
                      "ツナガレラジオ～僕らの雨降 Days～",
                      "NOBLESSE -ノブレス-",
                      "あかねさす少女",
                      "俺達の世界わ終っている。",
                    ].map((title) => (
                      <li key={title}>{title}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                alt="成田 旬"
                fill={true}
                src="/e85bb4_eac637d969084926ac5ae7bbde535365~mv2.jpg"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
