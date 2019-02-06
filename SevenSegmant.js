function SevenSegmant(x, y, w, h, number = 0) {
    this.segmants = [];
    //A,B,C,D,E,F,G
    this.x = x;
    this.y = y;
    size = w / 9;
    this.w = w - size * 2;
    this.h = h - size * 3;
    this.number = number;
    size = this.w / 7;


    let V = [size, this.h / 2];
    let H = [this.w - 2 * V[0], size];

    let segmantsBluePrint = {
        0: { x: this.x + V[0], y: this.y, w: H[0], h: H[1] },
        1: {
            x: this.x + this.w - V[0],
            y: this.y + H[1],
            w: V[0],
            h: V[1] - V[0]
        },
        2: {
            x: this.x + this.w - V[0],
            y: this.y + this.h / 2 + V[0],
            w: V[0],
            h: V[1] - V[0]
        },
        3: {
            x: this.x + V[0],
            y: this.y + this.h,
            w: H[0],
            h: H[1]
        },
        4: {
            x: this.x,
            y: this.y + this.h / 2 + V[0],
            w: V[0],
            h: V[1] - V[0]
        },
        5: {
            x: this.x,
            y: this.y + H[1],
            w: V[0],
            h: V[1] - V[0]
        },
        6: { x: this.x + V[0], y: this.y + this.h / 2, w: H[0], h: H[1] },
    };

    for (let i = 0; i < 7; i++) {
        this.segmants.push(new Segmant(
            segmantsBluePrint[i]['x'],
            segmantsBluePrint[i]['y'],
            segmantsBluePrint[i]['w'],
            segmantsBluePrint[i]['h']
        ));
    }

}

SevenSegmant.prototype.show = function() {
    this.displayMyNumber();
    for (let i = 0; i < 7; i++) {
        this.segmants[i].show();
    }
}

SevenSegmant.prototype.displayMyNumber = function() {
    let truthTable = {
        0: [1, 1, 1, 1, 1, 1, 0],
        1: [0, 1, 1, 0, 0, 0, 0],
        2: [1, 1, 0, 1, 1, 0, 1],
        3: [1, 1, 1, 1, 0, 0, 1],
        4: [0, 1, 1, 0, 0, 1, 1],
        5: [1, 0, 1, 1, 0, 1, 1],
        6: [1, 0, 1, 1, 1, 1, 1],
        7: [1, 1, 1, 0, 0, 0, 0],
        8: [1, 1, 1, 1, 1, 1, 1],
        9: [1, 1, 1, 1, 0, 1, 1],
    }
    for (let i = 0; i < 7; i++) {
        this.segmants[i].setStatus(truthTable[this.number][i]);
    }
}

SevenSegmant.prototype.setNumber = function(number) {
    number > 9 ? number = number % 10 : number;
    this.number = number;
}