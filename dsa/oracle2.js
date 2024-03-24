const axios = require('axios')

let url = "https://jsonmock.hackerrank.com/api/food_outlets?city="

let city = "Seattle"
let mvotes = 100

async function processRequest(){
    let page = 1
    let pages = 1
    while(page<=pages){
        const resp = await axios.get(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${page}`)
        const paginatedData = resp.data
        pages = paginatedData.total_pages
        console.log(paginatedData)
    }
}

processRequest()