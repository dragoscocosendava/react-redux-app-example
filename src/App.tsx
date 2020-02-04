import React from 'react';
import { Provider } from 'react-redux';

import store from './store/app.store';

import { Articles } from './articles/list.articles';
import { AddArticle } from './articles/add/add.articles';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <Articles />
      <div className="row justify-content-center">
        <div className="col-8 pt-5">
          <AddArticle />
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
