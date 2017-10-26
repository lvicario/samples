(function ($) {

    Drupal.behaviors.casino = {
        attach: function (context, settings) {

            /**
             * Toggle grid.
             */
            $('.grid-toggle').click(function (e) {
                e.preventDefault();

                $(this).toggleClass('show');
                $('body').toggleClass('show-grid');
            });
            

            /**
             * Toggle Version.
             */
            $('.version-toggle').click(function (e) {
                e.preventDefault();

                $(this).toggleClass('show');
                $('.version-number').slideToggle("fast");
            });


            if (Drupal.clientsideValidation) {

                //======= Custom Error Placement for Customer Support =========
                Drupal.clientsideValidation.prototype.show_custom_error = function (error, element)
                {
                    var marker = get_marker(element, false);
                    var errorText = error.text();

                    if (enable_tooltips) {
                        marker.attr("title", errorText);

                        //create tooltip for the icon
                        marker.tooltip({
                            content: errorText,
                            show: false,
                            hide: false,
                            position: {my: "left center", at: "right+10 center", collision: "none"},
                            container: 'body'
                        });
                    } else {
                        marker.text(Drupal.t(errorText));
                    }

                    //bind events for error icon
                    $(element)
                        .on(
                            'focus.error.tooltip', function () {
                                if ($(marker).data('ui-tooltip')) {
                                    marker.tooltip('open');
                                }
                            }
                        )
                        .on(
                            'blur.error.tooltip', function () {
                                if ($(marker).data('ui-tooltip')) {
                                    marker.tooltip('close');
                                }
                            }
                        );
                };
            }
        }
    }

    // Custom function to check if a value exists in an array
    Drupal.inArray = function (needle, haystack, argStrict) {
        var key = '',
                strict = !!argStrict;

        if (strict) {
            for (key in haystack) {
                if (haystack[key] === needle) {
                    return true;
                }
            }
        } else {
            for (key in haystack) {
                if (haystack[key] == needle) {
                    return true;
                }
            }
        }

        return false;
    }


    //livechat
    $('a.popup').click(function (e) {
        e.preventDefault();
        livechatWindow = window.open($(this).attr('href'), 'livechatWindow', 'height=810,width=820,scrollbars=1');
    });

   
    $(document).ready(function () {
        setTimeout('jQuery("input#matterhorn-username").focus().blur()', 100);
        setTimeout('jQuery("input#matterhorn-password").focus().blur()', 100);
    });



    // For browser that has no maxlength attribute capability (IE,FF3)
    $('textarea.form-textarea[maxlength]').on('keypress input paste', function (e) {
        var text = $(this).val(), //Get the value
                limit = $(this).attr('maxlength'); //Get the maxlength
        //Check if the length exceeds what is permitted
        if (text.length == limit && $('html').hasClass('msie') === true) {
            e.preventDefault();
        } else if (text.length > limit) {
            if ($('html').hasClass('msie') === true) {
                $(this).val(text.substr(0, (limit - 1))); //Truncate the text if necessary
            } else {
                $(this).val(text.substr(0, limit)); //Truncate the text if necessary
            }
        }
    });

})(jQuery);


// jquery
function fncOnloadDisplayNone(target) {
    jQuery(target).hide();
}

function fncDisplaytoggle(theid) {
    var id = '#' + theid;
    $(id).toggle();
}

function fncDisplaytoggleSlide(theid) {
    var id = '#' + theid;
    $(id).slideToggle();
}
