import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.map((a, i) => (
        <ArticleItem article={a} key={i} />
      ))}
    </div>
  );
}

export default ArticleList;
