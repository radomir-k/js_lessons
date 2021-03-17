
let connectionSting = 'https://pixabay.com/api/?key=13758930-1d93593cd503dcde0b0b6f27b';

let testURL = 'https://pixabay.com/api/?key=13758930-1d93593cd503dcde0b0b6f27b&q=yellow+flowers&image_type=photo&pretty=true';

let color = ['transparent', 'grayscale', 'red', 'orange', 'yellow',
             'green', 'turquoise', 'blue', 'lilac', 'pink',
             'white', 'gray', 'black', 'brown'];

let userRequest = '';

let smallImage = '';
let bigImage = '';

$(function() {
  $('.ext-button').click(function() {
    $('.ext-panel').slideToggle();
  });
})

new SlimSelect({
  select: '.--type'
})

new SlimSelect({
  select: '.--category'
})

fetch(connectionSting) // GET
                .then((response) => response.json())
                .then((fullRequest) => {
                  $('.image-gallery').html(`
                    <a href = ${hits.previewURL}>
                      <img alt = ${hits.id} src = ${hits.previewURL}/>
                    </a>
                  `);
                })
                .catch((error) => {
                  console.log(error);
                });

;