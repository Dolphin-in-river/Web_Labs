(function () {

    function pageIsActive() {
        let itemHtml = document.location.pathname.split('/').pop();
        let item = itemHtml.substring(0, itemHtml.length - 5)
        document.getElementById(item).style.textDecoration = 'underline';
    }

    document.addEventListener('DOMContentLoaded', function(){
        pageIsActive();
    })
})();