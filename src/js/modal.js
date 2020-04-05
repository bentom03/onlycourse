
$(document).ready(function () {
    toggleModal();
    console.log("Modals are here");
    
});

function toggleModal() {
    $('#signUp').click(function () {
        $('#login').removeClass('show');
        $('#sign-up').addClass('show');
    })

    $('#logIn').click(function() {
        $('#sign-up').removeClass('show');
        $('#login').addClass('show');
    })
}