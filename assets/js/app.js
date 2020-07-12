var lower = 0;
var upper = 100000000;
var url = `https://source.unsplash.com/random?sig=${
  Math.floor(Math.random() * (upper - lower)) + lower
}`;

function randomImg() {
  document.getElementById("img-container").src = url;
}
