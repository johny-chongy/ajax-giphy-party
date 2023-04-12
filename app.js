"use strict";

let inputForm = $("#form");

/** handles what happens when submitting Giphy key */
function handleSubmit(evt) {
  evt.preventDefault();
  let searchVal = $("#giphySearch").val();
  // console.log(searchVal);
  addGiphy(searchVal);
}

/** takes in keyText and sends a request to GIPHY API and adds
 *  a new div with gif
 */
async function addGiphy(keyText) {
  let newDiv = $("<div>");
  let newGif = $("<img>");
  let giphy = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q:keyText, api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
  console.log(giphy.data.data['0']);
  let giphyLink = giphy.data.data['0'].images.original.url;
  newGif.attr("src", giphyLink);
  newDiv.append(newGif);
  $("#gifs").append(newDiv);
}



inputForm.on("submit", handleSubmit)


