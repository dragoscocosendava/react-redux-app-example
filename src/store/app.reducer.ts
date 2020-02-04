import { combineReducers } from 'redux';
import { articleReducer } from '../articles/store/articles.reducer';

export const appReducer = combineReducers({
  // Keep in mind that isn't a good practice to actually include words
  // like "reducer" in your state key names. The following will generate
  // { articles: { allArticles : [ ... ] } } in our app state
  articles: articleReducer,
});
