// Get the container element
const navbar = document.getElementById("navbar");
// Get all elem with class="menu" inside the container
const activeItem = navbar.getElementsByClassName("menu");

// Loop through the elem and add the active class to the current/clicked button
for (let i = 0; i < activeItem.length; i++) {
  activeItem[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/*CARDS*/

function loadImages (url, container){
  // get the JSON object
  $.getJSON(url, function(data){
    if(typeof data === 'object'){
     // create the HTML markup for the slider from data
      $.each(data['images'], function(key, image){
        var slide = '<li><img src="'+image['url']+'" alt="'+image['title']+'"></li>';
        $(container).append(slide);
      });
     // initialize anythingSlider
      $(container).anythingSlider();
    }
  });
};

$(function(){
  loadImages('images.json', '#slider1');
});