import {
  buttonElement,
  searchInput,
  usersInputElement,
  cardsElements,
} from './elements';
import { performSearch } from './performSearch';

buttonElement?.addEventListener('click', (e) => {
  e.preventDefault();
  performSearch(searchInput.value.trim(), usersInputElement.checked);
});
