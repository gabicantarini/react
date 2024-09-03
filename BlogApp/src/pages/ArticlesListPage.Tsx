import { ArticlesList } from "../components/ArticlesList"
import { articles } from "./article-content"


export const ArticlesListPage = () => {


    return (
            <>
               
                <ArticlesList articles={articles}/>              
            </>
    )
}