console.log("javaScript")
// fetch('http://localhost:4000/weather?address=patna').then((response) =>{
//     response.json().then((data) =>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:4000/weather?address='+location).then((response) =>{
        response.json().then((data) =>{
            if(data.error){
                messageTwo.textContent = data.error
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})