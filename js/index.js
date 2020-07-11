// Your code goes here

//mouseover nav-links
let navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((link) => link.addEventListener('mouseover', () => link.style.color = 'red'))

//wheel top pic
let intro = document.querySelector('img')
intro.addEventListener('wheel', () => intro.style.border = '5px dotted black')

//dblclick 
let page = document.querySelector('body')
page.addEventListener('dblclick', () => page.style.backgroundColor = '#f4f4f4')

//click
let nav = document.querySelector('.main-navigation')
nav.addEventListener('click', () => nav.style.display = 'none')

//scroll
window.addEventListener('scroll', () => page.style.backgroundColor = 'salmon')

//resize
window.addEventListener('resize', () => alert('You resized the window!'))

//load
window.addEventListener('load', () => alert('Page is loaded!'))

//hashchange
window.addEventListener('hashchange', () => alert('Hey! The hash has been changed'))


//mousedown & mouseup
let signUp = document.querySelectorAll('.destination')
signUp.forEach(div => {
  div.addEventListener('mousedown', () => div.style.backgroundColor = '#f4f4f4')
  div.addEventListener('mouseup', () => div.style.backgroundColor = 'salmon')
})







