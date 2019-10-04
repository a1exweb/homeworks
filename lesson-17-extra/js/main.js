let $width = 10;
let $height = 20;

let area = function calculateArea() {
  console.log($width * $height);
}

for (i = 0; i < 10; i++) {
  $width +=10;
  console.log(area());
}