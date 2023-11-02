function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.classList.contains('navtoggle')) {
      x.classList.add('responsive');
  } else {
      x.classList.remove('responsive');
  }
}
