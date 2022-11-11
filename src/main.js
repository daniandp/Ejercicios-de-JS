//Declaramos elementos HTML
const btnLanding = document.getElementById('btn-landing');
const contLanding = document.querySelector('.cont-landing');
const secondPage = document.querySelector('.cont-hidden-a-page');
const thirdPage = document.querySelector('.cont-hidden-b-page');
const btnSecondPage = document.getElementById('btn-second-page');
const header = document.querySelector('.hidden-header');
const footer = document.querySelector('.hidden-footer');



//Cambio de landing page a second page
btnLanding.addEventListener('click', () => {
    contLanding.style.display = 'none';
    secondPage.classList.remove('cont-hidden-a-page');
});

//Cambio de second page a third page
btnSecondPage.addEventListener('click', () => {
    secondPage.classList.add('cont-hidden-a-page');
    thirdPage.classList.remove('cont-hidden-b-page');
    header.classList.remove('hidden-header');
    footer.classList.remove('hidden-footer');

});


