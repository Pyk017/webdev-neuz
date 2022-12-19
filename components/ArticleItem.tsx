import articleStyles from "../styles/Article.module.css";
import Link from "next/link";
import { articleType } from "../pages";

const ArticleItem = ({ article }: { article: articleType }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} legacyBehavior>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
