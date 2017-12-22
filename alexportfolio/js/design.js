/*function setEqualHeight(){
 var tallestcolumn = 0;
 $(".application figcaption").each(function(){
 currentHeight = $(this).height();
 if(currentHeight > tallestcolumn){
 tallestcolumn = currentHeight;
 }
 });

 $(".application figcaption").height(tallestcolumn);
 }
 setEqualHeight();
 */

function formenu() {
    var menu = $(".menu-g");
    if ($(window).width() < 768) {
        menu.addClass("hide");
        // $(".menu-g").slideToggle("0");
    }
    else {
        menu.removeClass("hide");
        menu.removeAttr("style");
    }

    if ($(window).width() < 768) {
        $(".burger-button").click(
            function () {
                el = $(".menu-g");
                el.toggleClass("hide");
                $(".close-menu").toggleClass("hide");
                $(".burger, .menu-word").toggle();
            });
    }
}
// scroll menu
function scrollmenu() {
    if ($(window).width() > 767) {
        var $menu = $(".top-nav");
        var menuHeight = $menu.height();
        var scrollbegin = $menu.height() - 45; // появление блока при прокрутке страницы на высоту самого блока минус 5 точек
        $menu.css("top", -menuHeight);
        $(window).scroll(function () {
            if ($(this).scrollTop() > scrollbegin && $menu.hasClass("default")) {
                $menu.removeClass("default").addClass("fixed").fadeIn(5000);
                $menu.css("top", 0);
            } else if ($(this).scrollTop() <= scrollbegin && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default").fadeIn();
                $menu.css("top", -menuHeight);
            }
        });
    }
}
// end scroll menu




///////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {

//menu burger
    formenu();
//end menu burger

// scroll menu
    scrollmenu();
// end scroll menu

//to top button
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $(".to-top").fadeIn();
            } else {
                $(".to-top").fadeOut();
            }
        });

        $(".to-top").click(function () {
            //$("body,html").animate({scrollTop: 0}, 800);
            $("body,html").animate({scrollTop: 0}, "slow");
        });

    });
//end to top button


// toggle modals
    $(".open-modal").click(
        function () {
            $(".modal").show("500");

        });

    //закрытие по крестику (и кнопкам submit -перенесено в отправку)
    $(".close").click(
        function () {
            $(".modal").hide('500');
        });
    //закрытие окна по ESC
    $(document).keydown(function (e) {
        if ($(".modal").is(":visible") && (e.which == 27 || e.keyCode == 27)) {
            $(".modal").hide('500');
        }
    });
    //для закрытия по клику вне окна
    $(document).mouseup(function (e) {
        if ($(".modal").is(":visible") && !$(".modal").is(e.target) && $(".modal").has(e.target).length == 0) {
            $(".modal").hide('500');
        }
    });


});

///////////////////////////////////////////////////////////////////////////////////////////

$(window).load(function () {


});

///////////////////////////////////////////////////////////////////////////////////////////

$(window).resize(function () {
//menu
    formenu();
//end menu

// scroll menu
    scrollmenu();
// end scroll menu


});


