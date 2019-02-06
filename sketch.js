let c;
let n = 0;

function setup() {
    createCanvas(600, 500);
    c = new Clock(100, 100, 300, 100);
}

function draw() {
    background(50);
    c.show();
}