"use client";
import { usePathname } from "next/navigation";
import { NextSeo, NextSeoProps } from "next-seo";
import { OpenGraph } from "next-seo/lib/types";

export type SeoProps = Pick<NextSeoProps, "title"> & Pick<OpenGraph, "type">;

export default function Seo({
  title,
  type = "article",
}: SeoProps): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      <NextSeo
        canonical={`https://www.natsuzolab.com${pathname || ""}`}
        defaultTitle="Natsuzolab"
        description="作曲家、成田旬のウェブサイトNatsuzolabです。歌物、劇伴、ゲームのBGMなど様々な業務を行っております。"
        openGraph={{
          type,
          images: [
            {
              alt: "むつきレビン",
              height: 256,
              type: "image/png",
              url: "https://www.natsuzolab.com/mutsukilevin.png",
              width: 256,
            },
          ],
          url: "https://www.natsuzolab.com/",
        }}
        title={title}
        titleTemplate="%s - Natsuzolab"
        twitter={{
          cardType: "summary",
        }}
        useAppDir={true}
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href="/favicon.ico" rel="icon" />
    </>
  );
}
