import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardWrapper = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthorWrap = document.createElement('div');
  const cardImgContainer = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardAuthor = document.createElement('span');

  cardWrapper.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthorWrap.classList.add('author');
  cardImgContainer.classList.add('img-container');
  
  //article = {headline: headline, authorPhoto: authorPhoto, authorName: authorName};

  cardHeadline.textContent = article.headline;
  cardImage.src = article.authorPhoto;
  cardAuthor.textContent = article.authorName;

  cardWrapper.appendChild(cardHeadline);
  cardWrapper.appendChild(cardAuthorWrap);
  cardAuthorWrap.appendChild(cardImgContainer);
  cardAuthorWrap.appendChild(cardAuthor);
  cardImgContainer.appendChild(cardImage);


  cardWrapper.addEventListener('click', () => {
    console.log(headline);
  })

  return cardWrapper;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const toAppend = document.querySelector(selector);
  axios.get('http://localhost:5001/api/articles')
  .then(res => {
    console.log(res);
    res.data.articles.forEach(article => {
      toAppend.appendChild(Card(article));
    });
  })
  .catch(err => {
    console.log('Card API request failed');
  })
  .finally(() => {
    console.log('Card API request completed');
  });

}

export { Card, cardAppender }
