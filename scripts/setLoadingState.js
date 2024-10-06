import { loaderElement } from './elements';
import setSearchResult from './setSearchResult';

export default function (loadingState) {
  loaderElement.classList.toggle('hidden', !loadingState);
  loadingState && setSearchResult(null);
}
