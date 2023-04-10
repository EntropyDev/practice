/*
Build a minesweeper game using the oop.

Requirements:
    - Start a new game
    - Random mines placed for a new game
    - user can open a specific block
    - if mine is found, end the game
    - calculate score for each game
    - maintain high score
    - user can flag blocks
    - show hint numbers around the mines
*/
var Grid = /** @class */ (function () {
    function Grid(size) {
        this.size = size;
        this.mines = new Map();
        this.blocks = [];
        this.setGrid();
    }
    Grid.prototype.setMines = function () {
        var _a, _b;
        for (var i = 0; i < this.size; i++) {
            var x = void 0, y = void 0;
            x = this.getXY()[0];
            y = this.getXY()[1];
            while (this.mines.get(x) && ((_a = this.mines.get(x)) === null || _a === void 0 ? void 0 : _a.includes(y))) {
                x = this.getXY()[0];
                y = this.getXY()[0];
            }
            if (this.mines.get(x) === undefined)
                this.mines.set(x, [y]);
            else
                (_b = this.mines.get(x)) === null || _b === void 0 ? void 0 : _b.push(y);
        }
    };
    Grid.prototype.setGrid = function () {
        var _a;
        this.setMines();
        for (var i = 0; i < this.size; i++) {
            this.blocks[i] = [];
            for (var j = 0; j < this.size; j++) {
                if (this.mines.get(i) && ((_a = this.mines.get(i)) === null || _a === void 0 ? void 0 : _a.includes(j))) {
                    this.blocks[i].push([1, 0, 0]);
                }
                else {
                    this.blocks[i].push([0, 0, 0]);
                }
            }
        }
        this.setClues();
    };
    Grid.prototype.getXY = function () {
        var x = this.getRandom(0, this.size), y = this.getRandom(0, this.size);
        return [x, y];
    };
    Grid.prototype.getRandom = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };
    Grid.prototype.setClues = function () {
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                var val = 0;
                if (i + 1 < this.size && j + 1 < this.size) {
                    if (this.blocks[i + 1][j + 1][0] == 1)
                        val += 1;
                }
                if (i + 1 < this.size && j - 1 >= 0) {
                    if (this.blocks[i + 1][j - 1][0] == 1)
                        val += 1;
                }
                if (i + 1 < this.size) {
                    if (this.blocks[i + 1][j][0] == 1)
                        val += 1;
                }
                if (i - 1 >= 0) {
                    if (this.blocks[i - 1][j][0] == 1)
                        val += 1;
                }
                if (i - 1 >= 0 && j + 1 < this.size) {
                    if (this.blocks[i - 1][j + 1][0] == 1)
                        val += 1;
                }
                if (i - 1 >= 0 && j - 1 >= 0) {
                    if (this.blocks[i - 1][j - 1][0] == 1)
                        val += 1;
                }
                if (j + 1 < this.size) {
                    if (this.blocks[i][j + 1][0] == 1)
                        val += 1;
                }
                if (j - 1 >= 0) {
                    if (this.blocks[i][j - 1][0] == 1)
                        val += 1;
                }
                this.blocks[i][j][1] = val;
            }
        }
    };
    return Grid;
}());
var Game = /** @class */ (function () {
    function Game() {
        this.score = 0;
    }
    return Game;
}());
var Play = /** @class */ (function () {
    function Play() {
    }
    return Play;
}());
var g = new Grid(4);
console.log(g.blocks);
