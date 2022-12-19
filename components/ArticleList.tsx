import articleStyles from "../styles/Article.module.css";
import { articleType } from "../pages/index";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }: { articles: articleType[] }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: articleType) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
