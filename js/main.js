$(function () {
    var con = $('#content');

    $("a[rel='tab']").click(function (e) {
        pageurl = $(this).attr('href');
        if (pageurl != window.location.pathname) {
            $('#menu a').css('pointer-events', 'none');
            $.ajax({
                url: pageurl + '?rel=tab',
                success: function (data) {

                    setTimeout(function () {
                        con.html(data);
                    }, 500);
                    con.animate({
                        left: -($(window).width()),
                        opacity: 0

                    }, 500).animate({
                        left: +($(window).width())
                    });

                    con.animate({
                        opacity: 1,
                        left: 0
                    }, {
                            complete: function () {
                                $('#menu a').css('pointer-events', 'all')
                            },
                            duration: 500
                        });
                }

            });
        }
        if (pageurl != window.location.pathname) {
            window.history.pushState({ path: pageurl }, '', pageurl);
        }
        return false;
    });
});

window.onpopstate = function (event) {
    var con = $('#content');
    if (!JSON.stringify(event.state).hasOwnProperty("path") || JSON.stringify(event.state.path) == undefined || document.location.pathname != JSON.stringify(event.state.path)) {
        $.ajax({
            url: location.pathname + '?rel=tab',
            success: function (data) {
                setTimeout(function () {
                    con.html(data);
                }, 500);
                con.stop().animate({
                    left: -($(window).width()),
                    opacity: 0

                }, 500).animate({
                    left: +($(window).width())
                });
                con.animate({
                    opacity: 1,
                    left: 0
                }, 500);
            }
        });
    }
}






/* $(window).on('popstate', function (event) {
    if (!JSON.stringify(event.state).hasOwnProperty("path") || JSON.stringify(event.state.path) == undefined || document.location.pathname != JSON.stringify(event.state.path)) {
        $.ajax({
            url: location.pathname + '?rel=tab', success: function (data) {
                var con = $('#content');
                con.hide(500);
                setTimeout(function () {
                    con.html(data);
                }, 500);
                con.show(500);
            }
        });
    }
}); */