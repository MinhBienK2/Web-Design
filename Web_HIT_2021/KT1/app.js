let test = document.querySelector('.bang-li')
let bang =  document.querySelector('.bang')
test.onmouseover = function() {
    bang.style.display = 'block'
}
test.onmouseout = function() {
    bang.style.display = 'none'
}