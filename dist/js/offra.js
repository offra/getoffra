/*
#Offra-v-alpha-0.2(http://offra.io/)
#Licensed under MIT (https://github.com/offra/getoffra/blob/master/LICENSE)
#All rights researved By (http://offra.io/)
*/
(function ($) {
    "use strict";


    var wWidth  = $(window).width();
    $('.menu_toggle').on('click', function () {
        var mNav= ('.navbar-mobile');
        $(this).parents('.navigation-area').find(mNav).toggleClass('active');
    });

    var myMenu = $('.navbar-nav > li');
    myMenu.children('ul').addClass('DropDown');
    var dropDown = $('.DropDown');
    var dropDownMenu = $('.DropDown').children('li');
    $('.DropDown').children('li').children('ul').addClass('subMenu');
    $('.subMenu').children('li').children('ul').addClass('NsubMenu');
    var subMenu = $('.subMenu');
    $('.DropDown').parent('li').addClass('DpSign');
    $('.subMenu').parent('li').addClass('DpSign');
    $('.NsubMenu').parent('li').addClass('DpSign');
    myMenu.on('click', function (ev) {
        ev = window.event || ev;
        if ($(this).children('ul').length > 0) {
            ev.preventDefault();
            $(this).children('.DropDown').slideToggle();
            $(this).siblings('li').children('.DropDown').slideUp();
            $('.subMenu').slideUp();
            $('.subMenu li ul').slideUp();
            ev.stopPropagation();
        } else {
            ev.stopPropagation();
        }

    });
    dropDownMenu.on('click', function (e) {
        if ($(this).children('ul').length > 0) {
            e.preventDefault();
            $(this).children('ul').slideToggle();
            e.stopPropagation();
        } else {
            e.stopPropagation();
        }
    });
    $('.subMenu li').on('click', function (ev) {
        if ($(this).children('ul').length > 0) {
            ev.preventDefault();
            $(this).children('ul').slideToggle();
            ev.stopPropagation();
        } else {
            ev.stopPropagation();
        }
    });
    
    $(window).on('load resize ready',function(){
            $('.navigation-area').each(function(){
                var mMenu = $(this).attr('data-viewport-width');  
                if($(window).width() <= mMenu){
                  $(this).addClass('MyCustomMenu'); 
                }
                else{
                    $(this).removeClass('MyCustomMenu'); 
                }
            });
            $('.MyCustomMenu .navbar-mobile').each(function(){
                if(wWidth >=768 && wWidth <=991){
                    $(this).css({
                        "max-width" : 750 + 'px'
                    });
                }
                if(wWidth >=992 && wWidth<=1149){
                    $(this).css({
                        "max-width" : 970 + 'px'
                    });
                }
                if(wWidth >=1150 && wWidth<=1350){
                    $(this).css({
                        "max-width" : 1120 + 'px'
                    });
                }
                if(wWidth >=1351 && wWidth<=1900){
                    $(this).css({
                        "max-width" : 1230 + 'px'
                    });
                }
            });
        });


    $(document).mouseup(function (e) {
        var container = $(".navbar-nav,.DropDown,.subMenu,.NsubMenu,.modal-content,.offcanvas,.offra-dropdown,.dropdown,.dropdown-label1,.offra-nested,.tooltip,.popover");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.DropDown').slideUp();
            $('.subMenu').slideUp();
            $(".NsubMenu").slideUp();
            $('.modal').removeClass('active');
            $('.modal').fadeOut();
            $(".offcanvas-overlay").remove();
            $(this).parent('.offcanvas').removeClass('show');
            $('body').removeClass('off-show');
            $('.offcanvas').removeClass('show');
            $('body').removeClass('offcanvas-push');
            $('.offra-dropdown').fadeOut();
            $('.dropdown-label1').fadeOut();
            $('.offra-nested').fadeOut();
            $('.tooltiptext').hide();
            $(document).find('.popover-content').remove();
            $(document).find('.popover-content').toggleClass('show');
        }

    });

    var clicker = $('.tab-menu a');
    var atr = $('.tab-content').attr('id');
    var wrapper = $('.tabe-container');
    $('.tab-content').addClass('nodisplay')
    var allTabs = wrapper.find('div');
    var hoverable = $('.tab-menu.hoverable a');

    clicker.click(function (event) {
        event.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        var result = $(this).attr('href');
        var newValue = result.replace('#', '');
        var shower = $('.tab-content[id*=' + newValue + ']').addClass('active');
        shower.siblings().removeClass('active');
    });

    if ($('.tab-menu').hasClass('hoverable')) {
        hoverable.on('mouseenter', function (event) {
            event.preventDefault();
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
            var result = $(this).attr('href');
            var newValue = result.replace('#', '');
            var shower = $('.tab-content[id*=' + newValue + ']').addClass('active');
            shower.siblings().removeClass('active');
        });
    }
    var toggleParent = $('.toggle-nav').children().find('ul').parent().addClass('down-sign');
    $('.toggle-nav').children().find('ul').slideUp();
    $('.toggle-nav').children('li').on('click', function (event) {
        event.preventDefault();
        $(this).addClass('active');
        $(this).children('ul').slideToggle();
        $(this).siblings('li').children('ul').slideUp();
        $(this).siblings('li').removeClass('active');
    });

    $('.modal').fadeOut();
    var dModal = $('.modal');
    var Cmodal = document.getElementById('modal');
    var dModalcont = $('.modal-content');
    $('[data-modal-name]').on('click', function (event) {
        event.preventDefault();
        $(this).addClass('myModal');
        var current = ($(this).attr('data-modal-name'));
        var findModal = $(document).find("[data-target-modal='" + current + "']").fadeIn();

        $('.modal').addClass('active');
        if ($(".modal.active")[0]) {
            $('body').css('overflowY', 'hidden');
        }
    });
    $('.modal-cancel').on('click', function () {
        $('.modal').removeClass('active');
        $('.modal').fadeOut();
         $('body').removeAttr("style");
    });
    $('.modal').on('click', function () {
        //$('html, body').css('overflowY', 'auto');
        $('body').removeAttr("style");
    });

    $('.alert-cancel').on('click', function () {
        $(this).parent('.alert').hide();
    });

    //This code for collapse and Accordion    
    $('[data-collapse-panel]').hide();
    var acParent = $('.single-accordion');
    var showAc = $('.single-accordion.show');
    $('[data-collapse]').on('click', function (event) {
        event.preventDefault();
        var AcCurrent = ($(this).attr('href'));
        var acNew = AcCurrent.replace('#', '');
        $(this).parent('.single-accordion').toggleClass('show');
        var findAccordion = $(document).find("[id='" + acNew + "']").slideToggle();
        $(this).parent('.single-accordion').siblings().children('[data-collapse-panel]').slideUp();
        $(this).parent('.single-accordion').siblings().removeClass('show');
    });
    if ($('.single-accordion').hasClass('show')) {
        showAc.find('[data-collapse-panel]').slideDown();
    }
    $('.show-collapse').slideDown();



    $('[data-name]').on('click', function (event) {
        event.preventDefault();
        var AcCurrent = ($(this).attr('href'));
        var acNew = AcCurrent.replace('#', '');
        var ppData = "<div class='offcanvas-overlay'></div>";
        $(ppData).prependTo('body').fadeIn();
        setTimeout(function () {
            $('body').addClass('off-show');
        }, 10);
        var findAccordion = $(document).find("[id='" + acNew + "']").addClass('show');
        if ($('.offcanvas.show').hasClass('offcanvas-push')) {
            $('body').addClass('offcanvas-push');
        }

    });
    
    var cancelButton = $(document).find('.offcanvas-cancel');
    cancelButton.on('click', function () {
        $(this).parent('.offcanvas').removeClass('show');
        $('body').removeClass('off-show');
        $('body').removeClass('offcanvas-push');
        $(".offcanvas-overlay").remove();
    });


    /*tooltip*/

    $('.tooltiptext').hide();
    $('.tooltip').on('mouseover', function () {
        var string = this.innerHTML;
        var position = this.dataset.tooltipposition;
        var text = this.dataset.tooltiptext;
        if ($(this).children('.tooltiptext').length == 0 && $(this).children('.tooltiptext').length < 2) {
            string += '<span class="tooltiptext tooltiptext_' + position + '"><span class="text">' + text + '</span></span>';
            this.classList.add('tooltip_' + position);
            this.innerHTML = string;
            $(this).children('.tooltiptext').show();
        }

    }).on('mouseleave', function () {
        $(this).children('.tooltiptext').hide();
        $(this).children('.tooltiptext').remove();
        var position = this.dataset.tooltipposition;
        this.classList.remove('tooltip_' + position);
    });
    $(document).on('mouseover', '.tooltiptext', function () {
        $('.tooltiptext').hide();
    });
    
    //Sticky Navbar
    $('.sticky-navbar').each(function () {
        var nbbar = $(this);
        var nOffset = nbbar.attr('data-sticky-offset');
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > nOffset) {
                nbbar.addClass('sticky');
            } else {
                nbbar.removeClass('sticky');
            }
        });
    });

    //Scroll Progress
    if ($(".scroll-progress").length > 0) {
        document.addEventListener("scroll", updateProgress);

        function updateProgress() {
            $(".scroll-progress").each(function () {
                var scPosition = $(this).attr('data-scrollprogress-position');
                if ($(this).attr('data-scrollprogress-position') == 'top') {
                    $(this).css({
                        'top': 0 + 'px',
                        'bottom': 'inherit'
                    });
                }
                if ($(this).attr('data-scrollprogress-position') == 'bottom') {
                    $(this).css({
                        'top': 'inherit',
                        'bottom': '0' + 'px'
                    });
                }
                var scrollMax = document.body.scrollHeight - window.innerHeight;
                var percentScrolled = window.pageYOffset / scrollMax * 100;
                document.querySelector(".scroll-progress").style.width = percentScrolled + "%";
            });

        }
    }

    //var limitNumber = $(".limit-text").attr('data-text-limit');
    //console.log(limitNumber);
    //    $(".limit-text").text(function (index, currentText) {
    //        return currentText.substr(0, limitNumber);
    //    });
    $(".limit-text").each(function () {
        var limitNumber = $(this).attr('data-text-limit');
        $(this).text(function (index, currentText) {
            return currentText.substr(0, limitNumber);
        });
    });


    $("[data-smooth-scroll]").on('click', function (event) {
        var scValue = $(this).attr('data-animate-time');
        var hash = this.hash;
        if (!scValue) {
            if (hash.length > 0) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 500, function () {
                    window.location.hash = hash;
                });
            }
        }
        if (hash.length > 0) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, scValue, function () {
                window.location.hash = hash;
            });
        }
    });

    $('.offra-countdown').each(function () {
        var countContainer = $(this),
            myTimer = countContainer.attr('data-timer-date'),
            countDownDate = new Date(myTimer).getTime(),
            countMessage = countContainer.attr('data-countdown-message'),
            countlabel = $(this).attr('data-countdown-seperator'),


            sTimerfunction = setInterval(function () {
                var cDate = new Date().getTime();
                var Salamdistance = countDownDate - cDate;

                var days = Math.floor(Salamdistance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((Salamdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((Salamdistance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((Salamdistance % (1000 * 60)) / 1000);
                if (countlabel == 'dots') {
                    countContainer.addClass('countdown-dots');
                    countContainer.children(".countdown-days").html(days);
                    countContainer.children(".countdown-hours").html(hours);
                    countContainer.children(".countdown-minutes").html(minutes);
                    countContainer.children(".countdown-seconds").html(seconds);
                }
                if (countlabel == 'label') {
                    countContainer.addClass('countdown-label');
                    countContainer.children(".countdown-days").html(days).append("<span>days</span>");
                    countContainer.children(".countdown-hours").html(hours).append("<span>hours</span>");
                    countContainer.children(".countdown-minutes").html(minutes).append("<span>minutes</span>");
                    countContainer.children(".countdown-seconds").html(seconds).append("<span>seconds</span>");
                } else {
                    countContainer.addClass('countdown-dots');
                    countContainer.children(".countdown-days").html(days);
                    countContainer.children(".countdown-hours").html(hours);
                    countContainer.children(".countdown-minutes").html(minutes);
                    countContainer.children(".countdown-seconds").html(seconds);
                }
                if (Salamdistance < 0) {
                    clearInterval(sTimerfunction);
                    countContainer.html(countMessage);
                    countContainer.addClass('countdown-finished');
                } else {
                    countContainer.removeClass('countdown-finished');
                }

            }, 1000);
    });


    $('.offra-dropdown').fadeOut();
    var offraChildren = $('.offra-dropdown > ul > li');
    var dropChill = offraChildren.children('ul');
    dropChill.fadeOut();
    var dropChild5 = dropChill.addClass('dropdown-label1');
    dropChill.parent().addClass('dropdown-sign');
    var dropChil2 = dropChill.children('li');
    dropChil2.children('ul').hide();
    var dorpchil3 = dropChil2.children('ul').addClass('offra-nested');
    dorpchil3.parent('li').addClass('dropdown-sign');
    var dropChild4 = dorpchil3.children('li');

    $("[data-activity]").on('click', function (e) {
        e.preventDefault();
        var current = ($(this).attr('id'));
        var finddropdown = $(document).find("[data-target-dropdown='" + current + "']").fadeToggle();
        dropChild5.fadeOut();
        dorpchil3.fadeOut();
    });
    offraChildren.on('click', function (ev) {
        if ($(this).children('ul').length > 0) {
            ev.preventDefault();
            $(this).children('ul').fadeToggle();
            $(this).siblings('li').children('ul').fadeOut();
        }

    });
    dropChil2.on('click', function (e) {
        if ($(this).children('ul').length > 0) {
            e.preventDefault();
            $(this).children('ul').fadeToggle();
            $(this).siblings('li').children('ul').fadeOut();
            e.stopPropagation();
        }

    });
    dropChild4.on('click', function (e) {
        if ($(this).children('ul').length > 0) {
            $(this).children('ul').fadeToggle();
            $(this).siblings('li').children('ul').fadeOut();
            e.stopPropagation();
        }
    });

    $(document).ready(function () {
        
        var sections,scrolled_id,scOf,id,nbarHeight,$navbar,$navbar__links;
        sections = [];
        scrolled_id = false;
        scOf = $('.spy-nav').attr('data-navbar-offset');
        id = false;
        nbarHeight = ($('.spy-nav').height() / 50) - 15;
        $navbar = $('.spy-nav');
        $navbar__links = $('.spy-nav li a');
        $navbar__links.each(function () {
            if ($(this).attr('href') == '#') {} else {
                sections.push($($(this).attr('href')));
            }
        });

        $navbar__links.click(function (e) {
            e.preventDefault();
            if ($(this).attr('href') == '#') {} else {
                if (scOf) {
                    $('html, body').animate({
                        scrollTop: $($(this).attr('href')).offset().top - nbarHeight - scOf
                    });
                } else {
                    $('html, body').animate({
                        scrollTop: $($(this).attr('href')).offset().top - nbarHeight

                    });
                }

            }
        });
        $(window).scroll(function (e) {
            e.preventDefault();
            var scrollTop = $(this).scrollTop();

            for (var i in sections) {
                var section = sections[i];

                if (section.length > 0) {
                    if (scOf) {
                        var sectopOffset = section.offset().top - scOf;
                    } else {
                        var sectopOffset = section.offset().top;
                    }
                    if (scrollTop > sectopOffset) {
                        scrolled_id = section.attr('id');
                    }
                    if (scrolled_id !== id) {
                        id = scrolled_id;

                        $navbar__links.removeClass('current-nav');

                        $('a[href="#' + id + '"]', $navbar).addClass('current-nav');
                    }
                }
            }
        });

        $(window).trigger('scroll');
        //Parallax
        (function ($) {
            var $window = $(window);
            var windowHeight = $window.height();

            $window.resize(function () {
                windowHeight = $window.height();
            });

            $.fn.parallax = function (xPosition, speed) {
                var $this = $(this);
                var getHeight;
                var firstTop;

                $this.each(function () {
                    firstTop = $this.offset().top;
                });

                getHeight = function (jqp) {
                    return jqp.outerHeight(true);
                };
                if (arguments.length < 1 || xPosition === null) xpos = "50%";
                if (arguments.length < 2 || speed === null) speed = 0.1;
                if (arguments.length < 3 || outerHeight === null) outerHeight = true;

                function update() {
                    var pos = $window.scrollTop();

                    $this.each(function () {
                        var $element = $(this);
                        var top = $element.offset().top;
                        var height = getHeight($element);
                        if (top + height < pos || top > pos + windowHeight) {
                            return;
                        }

                        $this.css('backgroundPosition', xPosition + " " + Math.round((firstTop - pos) * speed) + "px");
                    });
                }

                $window.bind('scroll', update).resize(update);
                update();
            };
        })(jQuery);

        var backgrounds = [];
        var speeds = [];
        //Offra Parallax 
        $('.offra-parallax').each(function () {
            this.style.background = 'url(' + this.dataset.backgroundImage + ') 50% 0 no-repeat fixed';
            $(this).css({
                'background-size': 'cover'
            });
            speeds.push(parseFloat(this.dataset.parallaxSpeed));
        });

        var i = 0;
        $('.offra-parallax').each(function () {
            $(this).parallax("10%", speeds[i] / 5);
            i++;
        });
        $('.switcher-expo').each(function () {
            var sChild = $(this).append('<div class="switcher_handle"></div>');
            var child = $(this).find('.switcher_handle');
            var childW = child.width();
            var pWidth = $(this).width();
            $(this).on('click', function () {
                var tester = $(this).toggleClass('switcher-active');
                if (tester.hasClass('switcher-active')) {
                    child.css({
                        'left': pWidth - childW - 3
                    });
                    $(this).siblings('.switcher-expo').removeClass('switcher-active');
                    $(this).siblings('.switcher-expo').children('.switcher_handle').css({
                        'left': 3 + 'px'
                    });
                } else {
                    child.css({
                        'left': 3 + 'px'
                    });
                }
            });
        });

        $('.offra-step').each(function () {
            var pdiv = $(this);
            var UID = {
                _current: 0,
                getNew: function () {
                    this._current++;
                    return this._current;
                }
            };

            var time = 4;
            var steps = 9;
            var active = 0;
            var para = pdiv.find('.step-inner');
            var tabData = $(this).find('.tabbed_data');
            var length = tabData.length;

            var circles = $(this).find('.circle');
            for (var i = 0; i < length; i++) {
                circles[i].addEventListener('click', function () {
                    clicked(parseInt(this.dataset.index));
                })
            }
            setView();

            function setView() {
                var i;
                var width = 11.5 * active + 1


                for (var i = 0; i <= active; i++) {
                    circles[i].classList.add('done');
                }

                circles[i - 1].classList.add('active');

                for (var j = i; j < length; j++) {
                    circles[j].classList.remove('done');
                }

            }

            function clicked(index) {
                if (index < length) {
                    circles[active].classList.remove('active');
                    tabData[active].classList.remove('active_tab');
                    active = index;
                    tabData[active].classList.add('active_tab');
                    setView();
                }
            }
        });

        $('.dynamic-process').each(function () {
            var processInt = $(this).attr('data-process-interval');
            var dbChild = $(this);
            if (processInt) {
                setInterval(duynamic_process, processInt);
            } else {
                setInterval(duynamic_process, 1500);
            }

            function duynamic_process() {
                var boxes = dbChild.find('.step-box');
                for (var i = 0; i < boxes.length; i++) {
                    if ($(boxes[i]).hasClass('active')) {
                        $(boxes[i]).removeClass('active');
                        if (i < boxes.length - 1) {
                            $(boxes[i + 1]).addClass('active');
                        } else {
                            $(boxes[0]).addClass('active');
                        }
                        return;
                    }
                }
                $(boxes[0]).addClass('active');
            }
        });
        //Popover
        $('.popover').each(function () {
            $(this).on('click', function () {
                var string = this.innerHTML;
                var position = $(this).attr('data-position'); //Getting Position
                var text = $(this).attr('data-content'); //Getting Content
                //Checking Element And Their Existence
                if (text) {
                    var text = $(this).attr('data-content');
                } else {
                    var text = "";
                }
                var dpos = "top";
                var title = $(this).attr('data-title');
                if (title) {
                    var title = $(this).attr('data-title');
                } else {
                    var title = "";
                }
                var pFooter = $(this).attr('data-footer');
                if (pFooter) {
                    var pFooter = $(this).attr('data-footer');
                } else {
                    var pFooter = "";
                }
                //Checking Other Elements
                if ($(this).find('.popover-content').length > 0) {
                    $(this).find('.popover-content').remove();
                } else {
                    if (position) {
                        string += '<div class="popover-content popover-' + position + '"><div class="popover-inner"><div class="popover-title">' + title + '</div><div class="popoverbody">' + text + '</div><div class="popover-footer">' + pFooter + '</div></div></div>';
                        this.classList.add('tooltip_' + position);
                        this.innerHTML = string;
                        $(this).children('.popover-content').toggleClass('show');
                    } else {
                        string += '<div class="popover-content popover-' + dpos + '"><div class="popover-inner"><div class="popover-title">' + title + '</div><div class="popoverbody">' + text + '</div><div class="popover-footer">' + pFooter + '</div></div></div>';
                        this.classList.add('tooltip_' + dpos);
                        this.innerHTML = string;
                        $(this).children('.popover-content').toggleClass('show');
                    }
                }
            });
        });
        
        $('.progress-bar.static').each(function(){
            var progVal = $(this).attr('data-progress-parcent');
            $(this).find('.progress').css({
                width : progVal
            });
            $(this).find('.parcent').css({
                left : progVal
            });
            $(this).find('.parcent').text(progVal);
        });
        
        $('.target-bg').each(function(){
           var parent = '.' + $(this).attr('data-parent-class');
            var imSrc= $(this).attr('src');
            $(document).find(parent).css({
               
                "background": "url(" + imSrc + ")",
                "background-size":"cover",
                "background-position":'center',
                "background-repeat":"no-repeat"
            });
            $(this).hide();
       });
        
        $(".set-bg").each(function() {
            var thesrc = $(this).attr('data-bg');
            $(this).css("background", "url(" + thesrc + ")");
            $(this).css("background-position", "center");
            $(this).css("background-size", "cover");
            $(this).css("background-repeat", "no-repeat");
           
        });

    });

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top + 100;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $('.timeline').each(function () {
        var timelineAlign = $(this).attr('data-timeline-alignment');
        $(this).children('.timeline-item').on('click', function () {
            $(this).addClass('timeline-active');
            $(this).siblings('.timeline-item').removeClass('timeline-active');
        });
        if (timelineAlign == 'right-left') {
            $(this).children(".timeline-item:nth-child(2n+1)").css({
                'align-self': 'flex-end'
            });
            $(this).children(".timeline-item:nth-child(2n+1)").addClass('timeline-right');
            $(this).children(".timeline-item:nth-child(2n)").css({
                'align-self': 'flex-start'
            });
            $(this).children(".timeline-item:nth-child(2n)").addClass('timeline-left');
        }
        if (timelineAlign == 'left-right') {
            $(this).children(".timeline-item:nth-child(2n+1)").css({
                'align-self': 'flex-start'
            });
            $(this).children(".timeline-item:nth-child(2n+1)").addClass('timeline-left');
            $(this).children(".timeline-item:nth-child(2n)").css({
                'align-self': 'flex-end'
            });
            $(this).children(".timeline-item:nth-child(2n)").addClass('timeline-right');
        }
        if (timelineAlign == 'right') {
            $(this).children(".timeline-item").css({
                'align-self': 'flex-end'
            });
            $(this).children(".timeline-item").addClass('timeline-right');
        }
        if (timelineAlign == 'left') {
            $(this).children(".timeline-item").css({
                'align-self': 'flex-start'
            });
            $(this).children(".timeline-item").addClass('timeline-left');
        }
    });
    //Progressbar
    $(window).on('scroll ready load', function () {
        $(".progress-bar:not('.static')").each(function () {
            if ($(this).isInViewport()) {
                var progressBar = $(this).attr('data-progress-parcent'),
                    proDur = parseInt($(this).attr('data-progress-duration'));
                if (proDur) {
                    $(this).find('.progress').animate({
                        width: progressBar
                    }, proDur);

                    $(this).find('.parcent').animate({
                        left: progressBar
                    }, {
                        duration: proDur,
                        step: function (now, fx) {
                            var data = Math.round(now);
                            $(this).html(data + '%');
                        }
                    });

                } else {
                    $(this).find('.progress').animate({
                        width: progressBar
                    }, 2150);

                    $(this).find('.parcent').animate({
                        left: progressBar
                    }, {
                        duration: 2150,
                        step: function (now, fx) {
                            var data = Math.round(now);
                            $(this).html(data + '%');
                        }
                    });

                }
            } else {

            }
        });

        $('.offra-counter').each(function () {
            if ($(this).isInViewport()) {
                var countval = $(this).attr('data-counter');
                var countDuration = parseInt($(this).attr('data-counter-duration'));
                if (countDuration) {
                    $(this).prop('Counter', 0).animate({
                        Counter: countval
                    }, {
                        duration: countDuration,
                        step: function (now, fx) {
                            var data = Math.round(now);
                            $(this).html(data);
                        }
                    });
                } else {
                    $(this).prop('Counter', 0).animate({
                        Counter: countval
                    }, {
                        duration: 2150,
                        step: function (now, fx) {
                            var data = Math.round(now);
                            $(this).html(data);
                        }
                    });
                }

            }

        });

        $('.scroll-animate').each(function () {

            if ($(this).isInViewport()) {
                var animationName = $(this).attr('data-anim'),
                    animDelay = $(this).attr('data-anim-delay'),
                    animDuration = $(this).attr('data-anim-duration');
                $(this).css({
                    'animation-delay': animDelay,
                    '-webkit-animation-delay': animDelay,
                    '-moz-animation-delay': animDelay,
                    'animation-name': animationName,
                    'animation-duration': animDuration,
                    '-webkit-animation-duration': animDuration,
                    'visibility': 'visible'
                });
            }
        });
    });
    
      $(window).on('load', function () {
        if ($('.preloader').length > 0) {
            $('.preloader').fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });
    $('.disabled').each(function(){
        $(this).on('click',function(e){
            e.preventDefault();
        });
    });
    
    
})(jQuery);
