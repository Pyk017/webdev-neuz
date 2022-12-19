//* import { useRouter } from "next/router";

//? if using built-in api
import { server } from "../../config";

import { articleType } from "../index";
import Link from "next/link";
import Meta from "../../components/Meta";

//! using Nextjs API

export const getStaticProps = async (context: any) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);
  const articles = await res.json();

  const ids = articles.map((article: articleType) => article.id);

  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  //? expected format for return object is :-
  //* {
  //*     paths: { params: {id: "1", id: "2" }}
  //* }

  return {
    paths,
    fallback: false,
  };
};

//! Method 1 using only getServerSideProps (without using nextjs api)
/*
export const getServerSideProps = async (context: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};
*/

//! Method 2 using getStaticProps and getStaticPaths together  (much faster) (without using nextjs api)
/*
export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const articles = await res.json();

  const ids = articles.map((article: articleType) => article.id);

  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  //? expected format for return object is :-
  //* {
  //*     paths: { params: {id: "1", id: "2" }}
  //* }

  return {
    paths,
    fallback: false,
  };
};
*/

const Article = ({ article }: { article: articleType }) => {
  //? This is a method to use the query passed in the address.
  //*   const router = useRouter();
  //*   const { id } = router.query;

  //   return <ArticleItem article={article} />;

  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body} </p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export default Article;
