import './style.css';
import View from './js-files/view/garage';
import Router from './js-files/router';
import navigation from './js-files/layouts/navigation';

(async () => {
  try {
    navigation();
    Router.init();
  } catch (error) {
    console.error(error.message);
  }
})();
