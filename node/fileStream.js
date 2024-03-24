const fs = require('fs')
const Readable = require('stream').Readable

let w = fs.createWriteStream('./counter.txt', {flags: 'w', mode: 0o666})
let r = new Readable

let count = 0
r._read = function(){
    count++
    if(count>10){
        return r.push(null)
    }
    setTimeout(()=> r.push(count+'\n'),500)
}
r.pipe(w)