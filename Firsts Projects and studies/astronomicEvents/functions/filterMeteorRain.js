
let date = new Date();
let month = date.getMonth()+1;
let year = date.getFullYear();
let day = date.getDate()

console.log(date)
console.log(month)
console.log(year)
console.log(day)

let fullDate = new Date(`${year}-${month}-${day}`)

console.log(fullDate.toString())

const filterMeteorRain = (item) => {
    if (item.inicio > date) {

    }
}