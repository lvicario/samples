(function($) {

    var is_lessThanIE9 = ($.browser.msie == true && $.browser.version <= '9.0');
    var is_notmodernFF = ($.browser.mozilla == true && $.browser.version < '30');

    Drupal.behaviors.matterhorn_header = {
        attach: function (context, settings) {


            /*
             * Popup for Forgot Password
             */
            $('.btn-forgot-password').click(function (e) {
                e.preventDefault();
                forgotPasswordWindow = window.open($(this).attr('href'), 'forgotPasswordWindow', 'height=810,width=820,scrollbars=1');
            });
        }
    };

})(jQuery);

//Jquery On ready to check if the login action in the lighbox fails
//and will popup the login lightbox again
jQuery(document).ready(function () {
    //Set the launch game to true if he click the fancy-submit button
    jQuery(document).on("click", ".fancy-submit", function () {
        createCookie("launchGame", 'true');
    });
    if (getCookie('launchGame') === 'true') {
        if (jQuery('.login-error').length) {
            setTimeout(launchfancy, 1);
        }
    } else {
        createCookie('launchGame', 'false');
    }
    function launchfancy() {
        var gameId = getCookie('gameId');
        jQuery('#' + gameId).trigger('click');
    }
});

/*
 * Function helpers to save, get
 * and delete cookies
 *
 */
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else
        var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(Name) {
    var search = Name + "="
    if (document.cookie.length > 0) { // if there are any cookies
        var offset = document.cookie.indexOf(search)
        if (offset != -1) { // if cookie exists
            offset += search.length
            // set index of beginning of value
            var end = document.cookie.indexOf(";", offset)
            // set index of end of cookie value
            if (end == -1)
                end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
    }
}

function eraseCookie(name) {
    var date = new Date(1000);
    var expire = date.toGMTString();
    document.cookie = name + '=; expires=' + expire + ';';
}

