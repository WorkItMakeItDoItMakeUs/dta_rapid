$(function () {
    $('.js-log-in').text(localStorage.getItem('loggedIn') ? "My Account" : "Log in");

    $('.js-log-in').on('click', function (event) {
        event.preventDefault();
        var loggedIn = localStorage.getItem('loggedIn') === "true";

        if (!loggedIn) {
            window.location.href = "/account_login.html"
        } else {
            window.location.href = "/my-account.html"
        }
    });
});

