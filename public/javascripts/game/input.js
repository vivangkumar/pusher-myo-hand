document.addEventListener('keydown', function(event) {
  if(event.keyCode == 37) {
    input.x = 2;
  } else if(event.keyCode == 38) {
    input.y = -2;
  } else if(event.keyCode == 39) {
    input.x = -2;
  }
});

document.addEventListener('keyup', function(event) {
  if(event.keyCode == 37) {
    input.x = 0;
  } else if(event.keyCode == 38) {
    input.y = 0;
  } else if(event.keyCode == 39) {
    input.x = 0;
  }
});
