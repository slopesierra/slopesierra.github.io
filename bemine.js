document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerText = "Great! I love you!";
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerText = "WRONG. GO BACK.";
    fetchSassyGif();
  });
  
  function fetchSassyGif() {
    fetch('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW9ldWtiamY2b21qdWZsNHFpd2Q5OG4xMnlwMjNndTl5aGZtbjQ3dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HlZpXqgejdpUrwroHL/giphy.gif')
      .then(response => response.json())
      .then(data => {
        const gifUrl = data.data.image_original_url;
        const img = document.createElement('img');
        img.src = https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW9ldWtiamY2b21qdWZsNHFpd2Q5OG4xMnlwMjNndTl5aGZtbjQ3dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HlZpXqgejdpUrwroHL/giphy.gif;
        img.alt = 'Sassy GIF';
        const responseContainer = document.getElementById('response');
        responseContainer.innerHTML = '';
        responseContainer.appendChild(img);
      })
      .catch(error => console.error('Error fetching sassy gif:', error));
  }
  