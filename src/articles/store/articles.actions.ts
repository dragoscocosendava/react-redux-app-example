export const ADD_ARTICLE = 'ADD_ARTICLE';

export const addNewArticle = (article: IArticles.Item): IArticles.Action => ({
  type: ADD_ARTICLE,
  payload: article
});
