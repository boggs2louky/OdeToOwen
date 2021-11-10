console.log('It Works hopefully!')

$(document).ready(function () {
   $('.submit').click(function (event) {
     console.log('Clicked button')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()
    if (email.length > 5 && email.includes ('@') && email.includes('.')) {
        statusElm.append('<div>Email is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Email is not valid</div>')
    }

    if(subject.length >= 2) {
        statusElm.append('<div>Subject is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Subject is not valid</div>')
    }

    if(message.length >= 10) {
        statusElm.append('<div>Message is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Message is not valid</div>')    
    }
   }) 
})

/* Javascript syntac 
console.log('It Works hopefully!')

document.querySelector(document).ready(function () {
   document.querySelector('.submit').click(function (event) {
     console.log('Clicked button')

    var email = document.querySelector('.email').value
    var subject = document.querySelector('.subject').value
    var message = document.querySelector('.message').value
    var statusElm = document.querySelector('.status')
    statusElm.empty()
    if (email.length > 5 && email.includes ('@') && email.includes('.')) {
        statusElm.insertAdjacentHTML("beforeend",'<div>Email is valid</div>')
    } else {
        event.preventDefault()
        statusElm.insertAdjacentHTML("beforeend",'<div>Email is not valid</div>')
    }

    if(subject.length >= 2) {
        statusElm.insertAdjacentHTML("beforeend",'<div>Subject is valid</div>')
    } else {
        event.preventDefault()
        statusElm.insertAdjacentHTML("beforeend",'<div>Subject is not valid</div>')
    }

    if(message.length >= 10) {
        statusElm.insertAdjacentHTML("beforeend",'<div>Message is valid</div>')
    } else {
        event.preventDefault()
        statusElm.insertAdjacentHTML("beforeend",'<div>Message is not valid</div>')    
    }
   }) 
})
*/