import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { ArticleItem } from './item/item.article';

const ArticlesComponent: FunctionComponent<{ articles: IArticles.State['allArticles'] }> = ({ articles }) => (
  <>
    <h1 className="border-bottom my-4">Articles</h1>
    {articles.map((article: IArticles.Item) => (
      <ArticleItem key={article.id} title={article.title} body={article.body} />
    ))}
  </>
);

/**
 * mapStateToProps is used for selecting the part of the data
 * from the store that the connected component needs
 */
const mapStateToProps = ({ articles }: { articles: IArticles.State }) => {
  // Up here 👆, we are here extracting articles from the store (see: ../../store/app.reducer.ts)
  return {
    // and passing allArticles as articles to our <ArticlesComponent> function
    articles: articles.allArticles,
  };
};

/**
 * With `connect` HOC, we map our `mapStateToProps`
 * to the <ArticlesComponent> props
 */
export const Articles = connect(mapStateToProps)(ArticlesComponent);
