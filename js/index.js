(function () {
  // Utility function to get element by ID
  function $(id) {
    return document.getElementById(id);
  }

  // Get elements
  var card = $('card'),
    openB = $('open'),
    closeB = $('close'),
    timer = null;

  // Get the audio element
  var audioElement = $('background-music');

  console.log('Card Element:', card);

  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);

    // Start music when the card is opened
    playMusic();
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);

    // Stop music when the card is closed
    stopMusic();
  });

  // Function to play music
  function playMusic() {
    // Attempt to play the music
    audioElement.play().then(function () {
      console.log('Music is playing!');
    }).catch(function (error) {
      console.log('Autoplay failed:', error);
      // Display message to encourage user interaction
      alert('Please interact with the page to play music.');
    });
  }

  // Function to pause music
  function stopMusic() {
    audioElement.pause();
    console.log('Music stopped.');
  }
}());
