import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = useSelector((state) =>
    state.news.articles.find((article) => article.url === id)
  );

  if (!article) {
    return <div className="text-center mt-8">Article not found</div>;
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto p-9 bg-red-100 ">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <span className="mr-2">{formattedDate}</span>
        <span>&bull;</span>
        <span className="ml-2">{article.source.name}</span>
      </div>
      <img src={article.urlToImage} alt={article.title} className="w-full mb-4 rounded-lg shadow-lg" />
      <p className="text-lg leading-relaxed mb-4">{article.content}</p>
      <p className="text-gray-700 mb-4">{article.description}</p>
      <div className="flex items-center">
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
