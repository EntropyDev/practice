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
    public blocks: Array<Array<[number, number, number]>>
    public size: number
    public mines: Map<number,Array<number>>

    constructor(size: number){
        this.size = size
        this.mines = new Map<number,Array<number>>()
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
                    this.blocks[i].push([1,0,0])
                }else{
                    this.blocks[i].push([0,0,0])
                }
            }
        }
        this.setClues()
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

    public setClues(){
        for(let i: number =0; i<this.size; i++){
            for(let j: number = 0;j<this.size; j++){
                let val: number = 0
                if(i+1<this.size && j+1<this.size){
                    if(this.blocks[i+1][j+1][0] == 1) val+=1
                }
                if(i+1<this.size && j-1>=0){
                    if(this.blocks[i+1][j-1][0] == 1) val+=1
                }
                if(i+1<this.size){
                    if(this.blocks[i+1][j][0] == 1) val+=1
                }
                if(i-1>=0){
                    if(this.blocks[i-1][j][0] == 1) val+=1
                }
                if(i-1>=0 && j+1<this.size){
                    if(this.blocks[i-1][j+1][0] == 1) val+=1
                }
                if(i-1>=0 && j-1>=0){
                    if(this.blocks[i-1][j-1][0] == 1) val+=1
                }
                if(j+1<this.size){
                    if(this.blocks[i][j+1][0] == 1) val+=1
                }
                if(j-1>=0){
                   if(this.blocks[i][j-1][0] == 1) val+=1
                }
                this.blocks[i][j][1]=val                
            }
        }
    }

}


class Game {
    public score: number = 0
    public size: number = 3 
    public gameGrid: Array<Array<[number,number,number]>>
    public opened_count: number = 0  

    constructor(size: number){
        this.startGame(size)
        this.startScoring()
    }
    private startGame(size: number){
        this.size = size
        let game = new Grid(this.size)
        this.gameGrid = game.blocks
    }
    //When player clicks on a block
    public playerMove(x: number, y: number, clickFlag: boolean){
        if(!clickFlag){
        if(this.isMine(this.gameGrid,x,y) || this.opened_count == (this.size*this.size - this.size)){
            this.endGame()
            return
        }
        this.openBlock(this.gameGrid,x,y)
        }
        else{
            this.setFlag(this.gameGrid,x,y)
        }
    }

    private endGame(){
        this.saveScore()
        console.log(`Game Over!!! Your score is ${this.score}.`)
    }
    private saveScore(){

    }
    private startScoring(){
        setInterval(()=>{
            this.score += 1
            console.log(this.score)
        },1000)
    }

    private openBlock(grid: Array<Array<[number, number, number]>>,x: number,y: number){
        grid[x][y][1] = 1
        return grid
    }
    private isMine(grid: Array<Array<[number,number,number]>>,x:number,y:number){
        if(grid[x][y][0]==1) return true
        return false
    }
    private setFlag(grid: Array<Array<[number,number,number]>>,x:number,y:number){
        if(grid[x][y][1]==0){
            grid[x][y][2] = 1 - grid[x][y][2]
        }
        return grid
    }
}

let g = new Grid(4)
console.log(g.blocks)

let game = new Game(3)