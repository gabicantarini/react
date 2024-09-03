import { useParams } from 'react-router-dom'
import { articles } from './article-content';

export const ArticlesPages = () => {
      const params = useParams();
      const articleId = params.articleId;

      const article = articles.find(article => article.name === articleId)
    

    return (
        <>
        
            <h1>{article?.title}</h1>
            {article?.content.map(paragraph => (
                <p>{paragraph}</p>
            ))}
        </>
    )
}


    // const params = useParams();
    // const articleId = params.articleId;
    //OR
    // const params = useParams();
    // const { articleId }= params;
    //OR
    //const { articleId } = useParams();