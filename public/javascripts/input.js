document.addEventListener('keydown', function(event) {
  if(event.keyCode == 37) {
    console.log('Left was pressed');
    input.x = -1;
  } else if(event.keyCode == 38) {
    console.log('Up was pressed');
    input.y = 1;
  } else if(event.keyCode == 39) {
    input.x = 1;
    console.log('Right was pressed');
  }
});
