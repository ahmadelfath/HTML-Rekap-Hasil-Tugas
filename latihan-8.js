for (y = 1; y <= 9; y++) {
  for (x = 1; x <= 9; x++)
    if (x >= 10 - y) {
      document.write ('+' );
    } else {
      document.write ('-');
    }
  document.write ('<br>');
}
