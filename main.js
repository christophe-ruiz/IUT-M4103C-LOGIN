(function () {
    'use strict';
    $(() => {
            $.ajax({
                url: '/json/is_connected.php',
                method: 'get',
            }).done(function (data) {
                if (data.success) {
                    $('body').append(
                        $('<button/>')
                            .html('Déconnexion')
                            .on('click', function () {
                                $.ajax({
                                    url: '/json/logout.php',
                                    method: 'get'
                                }).done(function () {
                                    window.location.href = '/login.html'
                                })
                            })
                    )
                } else {
                    window.location.href = '/login.html'
                }
            }).fail(function () {
                $('body').html('Fatal error');
            });
    })
})();