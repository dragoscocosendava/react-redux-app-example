import React, { FunctionComponent } from 'react';

export const ArticleItem: FunctionComponent<IArticles.Item> = ({ thumbnail, title, body }) => {
  return (
    // how the article looks
    <div className="media mb-4">
      {thumbnail && <img src={thumbnail} className="mr-3" alt="..." />}
      <div className="media-body">
        <h5 className="mt-0">{title}</h5>
        {body}
      </div>
    </div>
  );
};
