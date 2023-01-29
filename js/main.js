const modalButtonCall = document.querySelector('.btn-call');
const modalButtonCancel = document.querySelector('.btn-cancel');
const flex = document.querySelector('.root');

/////////////view

////////////controler
modalButtonCall.addEventListener('click', () => {
    flex.classList.add('flex');
});

modalButtonCancel.addEventListener('click', () => {
    flex.classList.remove('flex');
});