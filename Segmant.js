function Segmant(x, y, w, h, status = false) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.status = status;
}

Segmant.prototype.show = function() {
    noStroke();
    this.status ? fill(255, 0, 0) : fill(50);
    rect(this.x, this.y, this.w, this.h);
}

Segmant.prototype.setStatus = function(status) {
    this.status = status;
}