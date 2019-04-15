function bake(degress) {
  var message;
  if (degress > 500) {
    message = "I'am not a nuclear reactor!";
  } else if (degress < 100) {
    message = "I'am not a refregirator";
  } else {
    message = "that's a very comfortable temperature for me.";
  }
  return message;
}
var status = bake(350);