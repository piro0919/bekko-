import Seo from "components/Seo";

export default function Head(): JSX.Element {
  return (
    <>
      <Seo type="website" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href="/favicon.ico" rel="icon" />
    </>
  );
}
