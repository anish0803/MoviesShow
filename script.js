// Query Selectors

let form = document.querySelector(".formsearch");
let box2 = document.querySelector(".box2");

form.addEventListener("submit", function (name) {
  fetch(`https://api.tvmaze.com/search/shows?q=${box2.value}`)
    .then((responce) => responce.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let shows = data[i]["show"];
        console.log(shows);
        let result = `<div class="content2">
              <div class="poster">
                  <img src="${shows.image["original"]}" alt="${shows.name}">
              </div>
              <div class="show-heading">
                  <h3>Name :${shows.name}</h3>
                  <h3>Start Date : ${shows.premiered}</h3>
                  <h5>Language: ${shows.language}</h5>
                  <button class="buttonclass">Show Mores</button>
              </div>
              </div>`;
        let main = document.querySelector(".box3");
        main.innerHTML += result;
      }

      
    })
     .catch(err => alert('show not found'))
});
