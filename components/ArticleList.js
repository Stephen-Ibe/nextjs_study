import articleStyles from "../styles/Article.module.css";

function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.map((a, i) => (
        <h3 key={i}>{a.title}</h3>
      ))}
    </div>
  );
}

export default ArticleList;
