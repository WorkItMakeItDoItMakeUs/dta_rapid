
$(function () {

    var _logMeIn = function () {
        var loggedIn = localStorage.getItem('loggedIn') === "true";

        if (!loggedIn) {
            window.location.href = "/account_login.html"
        } else {
            window.location.href = "/my-account.html"
        }
    }

    $('.js-log-in').on('click', function (event) {
        event.preventDefault();
        _logMeIn();
    });

});

