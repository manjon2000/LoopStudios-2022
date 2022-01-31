document.addEventListener("DOMContentLoaded", function() {    
const itemActived = document.querySelector('.icon-menu-hamburges')
const openmenu = () => {const itemmenu = document.querySelector('.menu-links') 
itemmenu.classList.toggle('openmenu')}
itemActived.addEventListener('click',openmenu);
});