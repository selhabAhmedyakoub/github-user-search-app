import { cardsElements } from './elements';
const setSearchResult = (data) => {
  let result = '';
  if (data === null) {
    result = '';
  } else if (data?.length >= 1) {
    data.map((item) => {
      result += `
        <article class="card">
          <img class="img" src="${item.avatar_url}" />
          <h2 class="name">${item.login}</h2>
        </article>`;
    });
  } else if (data?.length === 0) {
    result += `
          <p>No results Found.</p>`;
  }
  cardsElements.innerHTML = result;
};

export default setSearchResult;
