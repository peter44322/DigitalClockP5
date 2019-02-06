function Clock(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    sevenSegmentWidth = this.w / 6;

    this.clock = [
        new SevenSegmant(this.x, this.y, sevenSegmentWidth, this.h),
        new SevenSegmant(this.x + sevenSegmentWidth, this.y, sevenSegmentWidth, this.h),
        new SevenSegmant(this.x + sevenSegmentWidth * 2, this.y, sevenSegmentWidth, this.h),
        new SevenSegmant(this.x + sevenSegmentWidth * 3, this.y, sevenSegmentWidth, this.h),
        new SevenSegmant(this.x + sevenSegmentWidth * 4, this.y, sevenSegmentWidth, this.h),
        new SevenSegmant(this.x + sevenSegmentWidth * 5, this.y, sevenSegmentWidth, this.h)
    ];

}

Clock.prototype.show = function() {
    let values = [
        floor(hour() / 10),
        hour(),
        floor(minute() / 10),
        minute(),
        floor(second() / 10),
        second()
    ];

    let colon = [];
    for (let i = 0; i < 6; i++) {
        this.clock[i].setNumber(values[i]);
        this.clock[i].show();

    }
}