for (y = 1; y <= 9; y++) {
  for (x = 1; x <= 9; x++) {
    if (y == 10 - x) {
      document.write ('+');
    } 
    else if (x == y) {
      document.write ('+');
    }
     else {
        document.write('-')
    }
  }
  document.write ('<br>');
}
