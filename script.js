/** @format */

const img = document.getElementById("img");

const imgBtn = document.getElementById("imgBtn");

imgBtn.addEventListener("click", generateQuote);

generateQuote();

function generateQuote() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://dog.ceo/api/breeds/image/random", config)
    .then((res) => res.json())
    .then((data) => {
      img.src = data.message;
    });
}
