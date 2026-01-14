document.addEventListener('DOMContentLoaded', function() {

    const btnHorloge = document.querySelector('a[href="#horloge"]');
    const btnReveil = document.querySelector('a[href="#reveil"]');
    const btnChrono = document.querySelector('a[href="#chronometre"]');
    const btnMinuteur = document.querySelector('a[href="#minuteur"]');

    const divHorloge = document.getElementById('horloge');
    const divReveil = document.getElementById('reveil');
    const divChrono = document.getElementById('chronometre');
    const divMinuteur = document.getElementById('minuteur');

    function hideAll() {
        divHorloge.style.display = 'none';
        divReveil.style.display = 'none';
        divChrono.style.display = 'none';
        divMinuteur.style.display = 'none';

        btnHorloge.classList.remove('active');
        btnReveil.classList.remove('active');
        btnChrono.classList.remove('active');
        btnMinuteur.classList.remove('active');
    }


    btnHorloge.addEventListener('click', function(event) {
        event.preventDefault(); 
        hideAll();
        
        divHorloge.style.display = 'block'; 
        btnHorloge.classList.add('active'); 
    });

    btnReveil.addEventListener('click', function(event) {
        event.preventDefault();
        hideAll();
        
        divReveil.style.display = 'block'; 
        btnReveil.classList.add('active'); 
    });

    btnChrono.addEventListener('click', function(event) {
        event.preventDefault();
        hideAll();

        divChrono.style.display = 'block';
        btnChrono.classList.add('active');
    });

    btnMinuteur.addEventListener('click', function(event) {
        event.preventDefault();
        hideAll();

        divMinuteur.style.display = 'block';
        btnMinuteur.classList.add('active');
    });

    
    hideAll();
    divHorloge.style.display = 'block';
    btnHorloge.classList.add('active');
});