import Head from "next/head";

const Meta = ({
  title,
  keywords,
  description,
}: {
  title: string;
  keywords: string;
  description: string;
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="descripttion" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WebWorld Neuz",
  keywords: "Web development news",
  description: "Get the latest news of web dev",
};

export default Meta;
