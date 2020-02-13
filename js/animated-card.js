( function() {
  var card = document.querySelector('.animated-card');
  card.addEventListener( 'click', function() {
    card.classList.toggle('card-flip');
  });
})();