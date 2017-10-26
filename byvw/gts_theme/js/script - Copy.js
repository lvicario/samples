(function($) {

    Drupal.behaviors.casino = {
        attach: function(context, settings) {

            //======= Language Switcher =========
            var selectorContent = $('.language-switcher li.active a').clone().addClass('selector'),
                    selectorClass = $('.language-switcher .active').attr('class'),
                    selector = $('.language-switcher .block-content').prepend(selectorContent).find(".selector").addClass(selectorClass).append("<span></span>");

            selector.click(function(e) {

                $(this).next().slideToggle(200);
                e.preventDefault();

            });


            //======= Gamelist Tabs =========
            $(".region-game-list").idTabs();

            // Add classes to tab holder for styling
            $(".region-game-list .block-views").each(function(i) {
                $(this).addClass("tab" + (i + 1));
            });


            //======= Highlight tab for certain pages =========
            // Promotion Content Type
            
             if ($('body').hasClass('node-type-promotion')) {
             $('.main-menu li:nth-child(2)').find('a').addClass('active');
             }
             ;
             
             // Payment Methods Content Type
             if ($('body').hasClass('node-type-payment-method')) {
             $('.main-menu li:nth-child(4)').find('a').addClass('active');
             }
             ;
             

            //======= Add close button to Messages =========
            $('.messages').prepend('<span class="close-messages">x</span>');
            $('.close-messages').on('click', function() {
                $(this).closest('div').slideUp(200);
            });


            //======= Country Contact Number Fancybox =========
            jQuery("#contactcountry").change(function() {
                if (number = jQuery(this).find("option:selected").val()) {
                    country = jQuery(this).find("option:selected").text();
                    jQuery.fancybox("<div style=\"color: #000; padding: 20px\">Users dialling from " + country + "<br />must dial " + number + "</div><div align=\"center\"><input type=\"button\" value=\"Ok\"></div>", {padding: "20", onComplete: function() {
                            jQuery("input:button").click(function() {
                                jQuery.fancybox.close();
                            });
                        }});
                }
            });


            // Add ddbelatedPNG fix 
            if (typeof DD_belatedPNG !== 'undefined') {
                DD_belatedPNG.fix('.logo a, #slider-nav a, .language-switcher .selector, .social a, .partner-primary a, .partner-secondary a, .partner-tertiary a');
            }


            //======= Payment Options =========
            $("a.view").fancybox({
                type: 'inline',
                height: 'auto',
                padding: 10,
                scrolling: 'no',
                overlayOpacity: 0.76,
                overlayColor: '#000',
                centerOnScroll: true,
                autoDimensions: false,
                onComplete: function(element) {
                    $($(element).attr('href')).closest('#fancybox-outer').addClass('modal-light');
                },
                onClosed: function(element) {
                    $('.modal-light').removeClass('modal-light');
                }
            });


            //======= Link Back =========
            $(".link-back").click(function(e) {
                e.preventDefault();
                history.back(1);
            });


            //======= Grid/Version Toggle =========
            $('.grid-toggle').click(function(e) {
                e.preventDefault();

                $(this).toggleClass('show');
                $('body').toggleClass('show-grid');
            });

            $('.version-toggle').click(function(e) {
                e.preventDefault();

                $(this).toggleClass('show');
                $('.version-number').slideToggle("fast");
            });


            //======= Add extra span to total jackpot amount for styling =========
            // $(".ticker").html(wrap($(".ticker")));

            function wrap(target) {
                var newtarget = $("<div></div>");
                nodes = target.contents().clone(); // the clone is critical!
                nodes.each(function() {
                    if (this.nodeType == 3) { // text
                        var newhtml = "";
                        var text = this.wholeText; // maybe "textContent" is better?
                        for (var i = 0; i < text.length; i++) {
                            if (text[i] == ' ')
                                newhtml += " ";
                            else
                                newhtml += "<span>" + text[i] + "</span>";
                        }
                        newtarget.append($(newhtml));
                    }
                    else { // recursion FTW!
                        $(this).html(wrap($(this)));
                        newtarget.append($(this));
                    }
                });
                return newtarget.html();
            }


            //======= Account login placeholder =========
            $('#matterhorn-username, #matterhorn-password').focus(function() {
                $(this).prev('label').hide();
            }).blur(function() {
                var $label = $(this).prev('label')
                        , label = $label.text().replace(/[\s\*]+/g, '');
                if ($label.is(':hidden') && ($(this).val() == '' || $(this).val() == label)) {
                    $label.show();
                    $(this).val('');
                }
            }).prev('label').mouseover().css('cursor', 'text');


            //======= Collapsible. =========
            $('.collapsible-content').hide(),
                    dropMenuLink = $('.collapsible');
            dropMenuLink.click(function(e) {
                e.preventDefault();
                $this = $(this);
                $this.toggleClass('collapsible-active');
                $this.next().slideToggle(200);
            });


            //======= Fancybox login box. =========
            var elementId
                    , $fancyboxWrap = $('#fancybox-wrap')
                    , $gateway = $('#account-login-form').find('input[name="gateway"]')
                    , gatwayValue = $gateway.val()
                    , playnowSelector = settings.matterhorn.general.playnow_selector || 'a.playnow';

            if (!settings.matterhorn.account.is_logged_in) {

                $(playnowSelector).fancybox({
                    width: 455,
                    height: 260,
                    padding: 3,
                    scrolling: 'no',
                    overlayOpacity: 0.76,
                    overlayColor: '#000',
                    centerOnScroll: true,
                    autoDimensions: false,
                    onStart: function(element) {
                        elementId = $(element).attr('href');
                        if (typeof elementId != 'undefined' && $(elementId).length > 0) {
                            // Custom content inside popup login box.
                            var formHeading = '<h4>' + Drupal.t('Welcome to Dafabet') + '</h4>'
                                    , registerSection = '<div class="col-two">'
                                    + '<h4>' + Drupal.t('New to Dafabet') + '</h4>'
                                    + '<p class="join-img hide-text">' + Drupal.t('Join Now') + '</p>'
                                    + '<p>' + Drupal.t('Open a Dafabet account today! it only takes a minute to do so!') + '</p>'
                                    + ' </div>'
                                    , symbol = (gatwayValue.indexOf('?') === -1) ? '?' : '&'
                                    , loginForm = $(elementId)
                                    .find('form').addClass('col-one')
                                    .prepend(formHeading)
                                    .after(registerSection)
                                    , registerBtn = $('.btn-register').appendTo('.col-two')
                                    , validationSection = $('#clientsidevalidation-account-login-form-errors').appendTo(loginForm);

                            $gateway.val(gatwayValue + symbol + 'game_code=' + $.trim($(element).siblings('.game-code.hidden').text()));

                            $fancyboxWrap.addClass('matterhorn-login-box');
                        }
                    },
                    onComplete: function(element) {
                        $($(element).attr('href')).closest('#fancybox-outer').addClass('login-fancybox');
                    },
                    onClosed: function() {
                        // Reset all modifications.
                        $('.login-fancybox').removeClass('login-fancybox');

                        $fancyboxWrap.removeClass('matterhorn-login-box');
                        $(elementId).unwrap().find('.btn-register').prependTo('.register-area');
                        $(elementId).find('.clientside-error').prependTo('.block-matterhorn-account .block-content');
                        $('.col-one h4, .col-two').remove();

                        $gateway.val(gatwayValue);

                        $('.btn-register a').removeAttr('style'); // Fix for register button after closing the fancybox

                    }
                });

            } else {
                $(playnowSelector).click(function(e) {
                    e.preventDefault();
                    launchFimCasino($.trim($(this).siblings('.game-code.hidden').text()));
                });
            }


            //======= Free to play game launcher. =========
            // $('a.freeplay-link').click(function(e) {
            // 	e.preventDefault();

            // 	var gameCode = this.hash.substr(1);

            // 	// Launch game in offline mode.
            // 	launchFimCasino(gameCode, true);
            // });

            //======= Payment method page. =========
            if ($('body').hasClass('page-node-60')) {
                var userCurr = Drupal.settings.matterhorn.account.currency;
                if (userCurr != '') {
                    var curr = '';
                    var rowIndex = 0;
                    var ctr = 0;
                    $('.table-primary tbody tr').each(function() {
                        curr = $(this).attr('payment-id').split(', ');
                        ctr = jQuery.inArray(userCurr, curr);
                        if (ctr == -1) {
                            $('.table-primary tbody tr').eq(rowIndex).hide();
                        }
                        rowIndex++;
                        ctr = -1;
                    });
                }
            };

            /*
             * Margin for the Half Banner
             */
            var value = [];
            $(".promo-item").each(function() {
                value.push($(this));
                //console.log($(this).attr('class'));
            });
            var ctr = 1;
            for (ctr = 0; ctr <= value.length; ctr++) {

                if ($(value[ctr - 1]).attr('class') == 'promo-item' && $(value[ctr + 1]).attr('class') == 'promo-item promo-item-alt' && $(value[ctr]).attr('class') != 'promo-item')
                {
                    $(value[ctr]).addClass('promo-half-margin');
                }

                if (ctr >= 2 && $(value[ctr - 2]).attr('class') == 'promo-item promo-item-alt promo-half-margin' && $(value[ctr - 1]).attr('class') == 'promo-item promo-item-alt' &&
                        $(value[ctr + 1]).attr('class') == 'promo-item promo-item-alt' && $(value[ctr]).attr('class') == 'promo-item promo-item-alt') {
                    $(value[ctr]).addClass('promo-half-margin');
                }

            }


            //=============Hide Login Post Error===========


            /*
             if (altVars[ctr - 1].attr('class') == 'promo-item' && altVars[ctr + 1].attr('class') == 'promo-item-alt')
             {
             console.log('1');
             }
             */
            //console.log(altVars[ctr]);
            //console.log(ctr);


            /**
             * For login block (username and password)
             */
            $('label[for="matterhorn-password"]').text('●●●●●●');

            if ($('input#matterhorn-username').val() != '') {
                $('label[for="matterhorn-username"]').css('display', 'none');
            } else {
                $('label[for="matterhorn-username"]').css('display', 'block');
            }

            if ($('input#matterhorn-password').val() != '') {
                $('label[for="matterhorn-password"]').css('display', 'none');
            } else {
                $('label[for="matterhorn-password"]').css('display', 'block');
            }

            $(document).ready(function() {
                setTimeout('jQuery("input#matterhorn-username").focus().blur()', 100);
                setTimeout('jQuery("input#matterhorn-password").focus().blur()', 100);
            });


            /**
             * For Post Login Block
             */
            if (settings.matterhorn.account.is_logged_in) {

                var topMenuLinks = $('.top-menu .block-content ul li');
                var loginSection = $('.account-section .last').before(topMenuLinks);
            }

            /*
             * Popup for Forgot Possword
             */
            $('.btn-forgot-password a').click(function(e) {
                e.preventDefault();
                forgotPasswordWindow = window.open($(this).attr('href'), 'forgotPasswordWindow', 'height=810,width=820,scrollbars=1');
            });

            if ($('body').hasClass('node-type-webform')) {
                /**
                 * In cases where there are no errors yet
                 * add the check icon beside the element
                 * and destroy tooltip if it exists
                 */
                $(".required, .form-text").blur(function()
                {
                    if ($(this).hasClass('valid')) {
                        if ($(this).data('ui-tooltip')) {
                            marker.tooltip('destroy');
                        }
                        var marker = get_marker($(this), true);
                    }
                });

                /**
                 * function for adding the icon beside the element
                 * returns the icon element for creating tooltip
                 */
                var get_marker = function(elem, valid)
                {
                    var parent = $(elem).parent();
                    var marker = parent.find('span.mark');

                    if (marker.length < 1) {
                        $(parent.find('input, select, label, textarea').last()).after('<span class="mark">&nbsp;</span>');
                        marker = parent.find('span.mark');
                    } else {
                        marker.removeClass().addClass('mark');
                    }

                    if (elem.attr('name') == 'captcha_response') {
                        marker.css("margin-left", "100px");
                    }

                    if (valid) {
                        marker.addClass('check');
                    } else {
                        marker.addClass('error');
                    }

                    return marker;
                }

                //======= Custom Error Placement for Customer Support =========
                Drupal.clientsideValidation.prototype.show_custom_error = function(error, element)
                {
                    var marker = get_marker(element, false);
                    var errorText = error.text().replace(':', ''); //strip error text of ':'

                    if (errorText.indexOf("Wrong answer") > -1) {
                        errorText = 'Please make sure you enter the correct Security code as shown.'
                    } else if (errorText.indexOf("Type the code shown") > -1) {
                        errorText = 'Captcha field is required.';
                    }

                    marker.attr("title", errorText);

                    //create tooltip for the icon
                    marker.tooltip({
                        content: errorText,
                        show: false,
                        hide: false,
                        position: {my: "left+5 center", at: "right center"},
                        container: 'body'
                    });

                    //bind events for error icon
                    $(element)
                            .on(
                                    'focus.error.tooltip', function()
                                    {
                                        if ($(marker).data('ui-tooltip')) {
                                            marker.tooltip('open');
                                        }
                                    }
                            )
                            .on(
                                    'blur.error.tooltip', function()
                                    {
                                        if ($(marker).data('ui-tooltip')) {
                                            marker.tooltip('close');
                                        }
                                    }
                            );
                };
            }
        }
    }
})(jQuery);


