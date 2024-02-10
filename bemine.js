document.addEventListener('DOMContentLoaded', function() {

document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('response').innerHTML = '<iframe src="https://giphy.com/embed/2dQ3FMaMFccpi" width="480" height="460" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/love-i-you-that-70s-show-2dQ3FMaMFccpi">via GIPHY</a></p>';
  document.getElementById('response').innerText = "Great! I love you!";
});

document.getElementById('noBtn').addEventListener('click', function() {
  document.getElementById('response').innerHTML = '<iframe src="https://giphy.com/embed/5vYvEGSsFdtaTIC5ZM" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbc-schittscreek-schitts-creek-5vYvEGSsFdtaTIC5ZM">via GIPHY</a></p>';
  document.getElementById('response').innerHTML += "<p>WRONG. TRY AGAIN, LOSER.</p>";
});

});
