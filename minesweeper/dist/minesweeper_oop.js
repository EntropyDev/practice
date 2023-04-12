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
/* Git reset hard commit */
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
    function Game(size) {
        this.score = 0;
        this.size = 3;
        this.opened_count = 0;
        this.startGame(size);
        this.startScoring();
    }
    Game.prototype.startGame = function (size) {
        this.size = size;
        var game = new Grid(this.size);
        this.gameGrid = game.blocks;
    };
    //When player clicks on a block
    Game.prototype.playerMove = function (x, y, clickFlag) {
        if (!clickFlag) {
            if (this.isMine(this.gameGrid, x, y) || this.opened_count == (this.size * this.size - this.size)) {
                this.endGame();
                return;
            }
            this.openBlock(this.gameGrid, x, y);
        }
        else {
            this.setFlag(this.gameGrid, x, y);
        }
    };
    Game.prototype.endGame = function () {
        this.saveScore();
        console.log("Game Over!!! Your score is " + this.score + ".");
    };
    Game.prototype.saveScore = function () {
    };
    Game.prototype.startScoring = function () {
        var _this = this;
        setInterval(function () {
            _this.score += 1;
            console.log(_this.score);
        }, 1000);
    };
    Game.prototype.openBlock = function (grid, x, y) {
        grid[x][y][1] = 1;
        return grid;
    };
    Game.prototype.isMine = function (grid, x, y) {
        if (grid[x][y][0] == 1)
            return true;
        return false;
    };
    Game.prototype.setFlag = function (grid, x, y) {
        if (grid[x][y][1] == 0) {
            grid[x][y][2] = 1 - grid[x][y][2];
        }
        return grid;
    };
    return Game;
}());
var g = new Grid(4);
console.log(g.blocks);
var game = new Game(3);
