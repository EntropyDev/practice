let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0,
    age: 55
}

var rateColor = (color, rating, age) => (
    {
        ...color,
        rating,
        age
    }
)

// console.log(rateColor(color_lawn,5,11).age)
// console.log(color_lawn.rating, color_lawn.age);                 

let list = [
    { title: "Rad Red"},
    { title: "Lawn"},
    { title: "Party Pink"}
]

var addColor = (title, colors) => [...colors, {title}]

console.log(addColor("Green",list).length)
console.log(list.length); 
