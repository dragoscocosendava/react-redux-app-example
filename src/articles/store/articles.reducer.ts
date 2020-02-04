// Actions
import { ADD_ARTICLE } from './articles.actions';

// Initial State value for Articles features
const INIT_STATE: IArticles.State = {
  allArticles: [
    { id: 56, title: 'Article Title 1', body: 'Lorem ipsum...' },
    { id: 87, title: 'Article Title 2', body: 'Lorem ipsum...' },
  ],
};

export const articleReducer = (state = INIT_STATE, action: IArticles.Action): IArticles.State => {
  switch (action.type) {
    case ADD_ARTICLE:
      // ❗DO NOT forget to return whatever state have saved
      return { ...state, allArticles: [...state.allArticles, action.payload] };
    default:
      return state;
  }
};
