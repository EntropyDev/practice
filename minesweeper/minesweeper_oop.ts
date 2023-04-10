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

class Grid {
    public blocks: Array<Array<[number, number]>>
    public size: number
    public mines: Map<number,Array<number>>

    constructor(size: number){
        this.size = size
        this.mines = new Map<number,Array<number>>
        this.blocks = []
        this.setGrid()
    }

    private setMines(){
        for(let i: number = 0; i<this.size; i++){
            let x: number, y: number
            x = this.getXY()[0]
            y = this.getXY()[1]
            while(this.mines.get(x) && this.mines.get(x)?.includes(y)){
                x = this.getXY()[0]
                y = this.getXY()[0]
            }
            if(this.mines.get(x) === undefined) this.mines.set(x,[y])
            else this.mines.get(x)?.push(y)
        }
    }
    
    private setGrid(){
        this.setMines()
        for(let i: number=0; i< this.size; i++){
            this.blocks[i] = []
            for(let j: number=0; j< this.size; j++){
                if(this.mines.get(i) && this.mines.get(i)?.includes(j)){
                    this.blocks[i].push([1,0])
                }else{
                    this.blocks[i].push([0,0])
                }
            }
        }
    }

    private getXY(){
        let x: number = this.getRandom(0, this.size), y:number = this.getRandom(0, this.size)
        return [x,y]
    }

    private getRandom(min: number, max: number){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
    }


}
let g = new Grid(3)
console.log(g.blocks)

class Game {
    public score: Number = 0    

    constructor(){
    }

}

