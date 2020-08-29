// setTimeout(()=>{
//     console.log('2 seonds up')
// },2000)
// const names = ['Aditya','kumar','singh']
// const shortname = names.filter((name) =>{
//     return name.length>=4
// })
// console.log(shortname)
// const geocode = (address,callback) => {
//     const data = {
//         latitude : 0,
//         longitude : 0
//     }
//     return data
// }
const geocode = (address,callback) =>{
    setTimeout(() => {
        const data = {
            latitude:0,
            longitude:0
        }
        callback(data)
        //return data
        // data is not returned by geocode so undefined is returned
    }, 2000);
}
// const data = geocode('new delhi')
// console.log(data)
geocode('New Delhi',(data) =>{
    console.log(data)
})


//Quick challenge
const add = (a,b,callback) => {
    setTimeout(() => {
        callback(a+b)
    }, 1000);
}
add(1,4,(sum) =>{
    console.log(sum)
})
