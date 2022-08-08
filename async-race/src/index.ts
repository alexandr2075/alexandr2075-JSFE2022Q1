import './style.css';
import Router from './js-files/router';
import navigation from './js-files/layouts/navigation';
import { results } from './js-files/view/garage';

(async () => {
  try {
    navigation();
    results();
    Router.init();
  } catch (error) {
    throw new Error(error.message);
  }
})();
