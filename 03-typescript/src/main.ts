import { App } from './rockPaperScissors';

import '@fortawesome/fontawesome-free/css/all.min.css';

const appContainer = document.querySelector<HTMLDivElement>('#app');

// type guard
if(appContainer) {
  appContainer.append(App);
}
 