/// <reference types="react-scripts" />

/**
 *
 * Namespace and interfaces used/shared
 * across the Article feature
 *
 */
declare namespace IArticles {
  interface Item {
    id?: number;
    thumbnail?: string;
    title: string;
    body: string;
  }

  interface State {
    allArticles: IArticles.Item[];
  }

  interface Action {
    type: string;
    payload: IArticles.Props;
  }
}
