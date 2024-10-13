// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  const detailImage = document.querySelector('.detail-image');
  const ramenName = document.querySelector('.name');
  const ramenRestaurant = document.querySelector('.restaurant');
  const ramenRating = document.querySelector('#rating-display');
  const ramenComment = document.querySelector('#comment-display');

  detailImage.src = ramen.image;
  ramenName.textContent = ramen.name;
  ramenRestaurant.textContent = ramen.restaurant;
  ramenRating.textContent = ramen.rating;
  ramenComment.textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  const form = document.querySelector('#new-ramen');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newRamen = {
      name: event.target['new-name'].value,
      restaurant: event.target['new-restaurant'].value,
      image: event.target['new-image'].value,
      rating: event.target['new-rating'].value,
      comment: event.target['new-comment'].value,
    };
    
    addRamenToMenu(newRamen);
    form.reset();
  });
}

function addRamenToMenu(ramen) {
  const ramenMenu = document.querySelector('#ramen-menu');
  const img = document.createElement('img');
  img.src = ramen.image;
  img.addEventListener('click', function() {
    handleClick(ramen);
  });
  ramenMenu.appendChild(img);
}

const displayRamens = () => {
  // Add code
  fetch('http://localhost:3000/ramens')
  .then(function(response) {
    return response.json();
  })
  .then(function(ramens) {
    ramens.forEach(function(ramen) {
      addRamenToMenu(ramen);
    });
    if (ramens.length > 0) {
      handleClick(ramens[0]);
    }
  });
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitLstener here
  function main() {
    displayRamens();
    addSubmitListener();
  }
  
  main();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
