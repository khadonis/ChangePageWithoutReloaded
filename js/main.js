$(function () {
    var con = $('#content');
    $("a[rel='tab']").click(function (e) {
        pageurl = $(this).attr('href');
        if (pageurl != window.location.pathname) {
            $.ajax({
                url: pageurl + '?rel=tab',
                success: function (data) {
                    con.hide(500);
                    setTimeout(function () {
                        con.html(data);
                    }, 500);
                    con.show(500);
                }
            });
        }
        if (pageurl != window.location.pathname) {
            window.history.pushState({ path: pageurl }, '', pageurl);
        }
        return false;
    });
});
$(window).bind('popstate', function () {
    if (document.location.pathname != JSON.stringify(event.state.path)) {
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
});