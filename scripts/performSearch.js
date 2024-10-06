import setMessage from './setMessage';
import getMessage from './getMessage';
import setSearchResult from './setSearchResult';
import setLoadingState from './setLoadingState';
const USER_API = 'https://api.github.com/search/users?q=';

export const performSearch = (searchTerm, isUserSelected) => {
  getMessage() && setMessage('');
  if (!searchTerm.trim()) {
    setMessage('Please fill out the search field 👆');
    return;
  } else {
    const typeQuery = isUserSelected ? '&type=user' : '&type=org';

    setLoadingState(true);
    fetch(`${USER_API}${searchTerm}${typeQuery}`)
      .then((result) => result.json())
      .then((response) => setSearchResult(response.items))
      .finally(() => setLoadingState(false));
  }
};
