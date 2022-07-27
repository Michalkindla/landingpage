var input = document.getElementById('email');
var submit = document.getElementById('mailicon');
const inActive = document.getElementById('invalid');
const inActiveTwo = document.getElementById('invalid-txt')

submit.addEventListener('click', function () {
   
    if (input.validity.typeMismatch) {
    inActive.classList.remove('inactive');
    inActiveTwo.classList.remove('inactive');
}
    else {
    inActive.classList.add('inactive');
    inActiveTwo.classList.add('inactive');
    alert('prawidlowy mail')
}
});
