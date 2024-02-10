document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerText = "Great! I love you!";
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerText = "I'm sorry. Please forgive me.";
    fetchSassyGif();
  });
  
  function fetchSassyGif() {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=YOUR_GIPHY_API_KEY&tag=sassy')
      .then(response => response.json())
      .then(data => {
        const gifUrl = data.data.image_original_url;
        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = 'Sassy GIF';
        const responseContainer = document.getElementById('response');
        responseContainer.innerHTML = '';
        responseContainer.appendChild(img);
      })
      .catch(error => console.error('Error fetching sassy gif:', error));
  }
  