//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const chapter = document.getElementById("chapter").value;
  const verse = document.getElementById("verse").value;
  let specific = chapter + ":" + verse;
  const url = `http://api.alquran.cloud/v1/ayah/${specific}`;
  console.log(url);

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.data.surah.englishName;
      console.log(data.data.surah.englishName);
      document.querySelector("h3").innerText = data.data.text;
      document.querySelector("h4").innerText = data.data.surah.revelationType;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
