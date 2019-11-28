// ON SCROLL

window.onscroll = function() {onScroll()};

function onScroll(){

    if (document.body.scrollTop >= 298 || document.documentElement.scrollTop >= 298) {

        document.getElementById('goToTop').style.bottom = "15px";

    } else {

        document.getElementById('goToTop').style.bottom = "-75px";

    }
}
