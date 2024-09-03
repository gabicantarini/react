import { Link } from "react-router-dom"

export const ArticlesList = ( { articles }: any ) => {


    return (
            <>
                <h3>Articles</h3>
                    {articles.map((article:any) => (
                        <Link className="article-list-item" to={`/articles/${article.name}`} target="_blank">
                            <h3>{article.title}</h3>
                            <p>{article.content[0].substring(0, 150)}...</p>
                        </Link>
                    ))}                
            </>
    )
}