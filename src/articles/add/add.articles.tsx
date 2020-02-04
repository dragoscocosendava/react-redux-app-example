import React, { FunctionComponent, FormEvent } from 'react';
import { connect } from 'react-redux';

import store from '../../store/app.store';
import { addNewArticle } from '../store/articles.actions';

const AddNewArticleComponent: FunctionComponent<{
  addNewArticle: (art: IArticles.Item) => IArticles.Action;
}> = ({ addNewArticle }) => {
  /**
   * ⚠️Notice we're not keeping track of the article's title and body.
   * For now, we just grab them from the form elements value
   * and create the object data the dispatcher action needs.
   * A better approach will be using State Hooks 💪
   */
  const handleForm = (ev: FormEvent) => {
    ev.preventDefault();
    // Initialize the article object data
    let articleData: IArticles.Item = {
      id: Math.ceil(Math.random() * 100),
      title: '',
      body: '',
    };
    // Iterate through the form elements and update the article's title,body data value
    Array.from((ev.target as HTMLFormElement).elements).forEach((fieldElement: Element) => {
      if (!(fieldElement instanceof HTMLInputElement)) return; // we only care about form elements
      articleData[fieldElement.name as 'title' | 'body'] = fieldElement.value;
    });
    // trigger a state change
    // (see: `mapDispatchToProps` function down in this file)
    addNewArticle(articleData);
  };

  return (
    <form onSubmit={handleForm}>
      <div className="form-group">
        <label>Article title:</label>
        <input name="title" type="text" className="form-control" placeholder="Your article title" />
      </div>
      <div className="form-group">
        <label>Article body:</label>
        <textarea name="body" className="form-control" rows={3} placeholder="Your article body"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Create Article
      </button>
    </form>
  );
};

/** `mapDispatchToProps` is used for dispatching actions to the store */
const mapDispatchToProps = (dispatch: typeof store.dispatch) => ({
  addNewArticle: (art: IArticles.Item): IArticles.Action => dispatch(addNewArticle(art)),
});

export const AddArticle = connect(null, mapDispatchToProps)(AddNewArticleComponent);
