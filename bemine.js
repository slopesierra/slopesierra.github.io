document.addEventListener('DOMContentLoaded', function() {

document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('response').innerHTML = '<iframe src="https://giphy.com/embed/8UGGp7rQvfhe63HrFq" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reaction-mood-8UGGp7rQvfhe63HrFq">via GIPHY</a></p>';
  document.getElementById('response').innerText = "Great! I love you!";
});

document.getElementById('noBtn').addEventListener('click', function() {
  document.getElementById('response').innerHTML = '<iframe src="https://giphy.com/embed/MoYC1N4nv7Fcs" width="480" height="416" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sassy-spn-gurl-MoYC1N4nv7Fcs">via GIPHY</a></p>';
  document.getElementById('response').innerHTML += "<p>WRONG. TRY AGAIN, LOSER.</p>";
});
  // Your JavaScript code here
});