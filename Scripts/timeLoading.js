(function () {
    let open_time = new Date().getTime();

    function load_time() {
        document.getElementById('load-time').innerHTML =
            'Время загузки составило: ' + (new Date().getTime() - open_time) / 1000 + ' сек';
    }

    document.addEventListener('DOMContentLoaded', function(){
        load_time();
    });
})();