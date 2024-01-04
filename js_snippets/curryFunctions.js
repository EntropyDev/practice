function compose(fn, artv=fn.length, ...args){
    // return fn.bind(null,fn, artv, ...args);
    return artv!==args.length ? compose.bind(null,fn,artv,...args) : fn(...args) ;
}

function slowAdd(a,b,c){
    console.log(`Slow Adding ${a} and ${b} and ${c}`);
    return a+b+c;
}

let nextFn = compose(slowAdd);
let nextFn2 = nextFn(1);
let nextFn3 = nextFn2(3);
let nextFn4 = nextFn3(2);
// nextFn2();
console.log(nextFn4);
