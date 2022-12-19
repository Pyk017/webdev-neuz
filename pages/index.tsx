import ArticleList from "../components/ArticleList";

//? if using method 2...
import { server } from "../config";

export type articleType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

//! Method 1: using third-party/dummy API
/*
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=7"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
*/

//! Method 2: using nextjs api

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default function Home({ articles }: { articles: articleType[] }) {
  return (
    <main>
      <ArticleList articles={articles} />
    </main>
  );
}
