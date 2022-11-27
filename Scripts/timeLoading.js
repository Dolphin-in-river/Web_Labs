(function () {
    let open_time = window.performance.timing.domLoading - window.performance.timing.navigationStart;

    function load_time() {
        document.getElementById('load-time').innerHTML =
            'Время загузки составило: ' + open_time / 1000 + ' сек';
    }
    document.addEventListener('DOMContentLoaded', load_time);
})();