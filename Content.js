if (window.location.hostname === "www.youtube.com") {

    var shorts, shortsNav;

    function remS() {
        shorts = document.getElementsByTagName("ytd-mini-guide-entry-renderer");
        console.log(shorts)
        for (let i = 0; i < shorts.length; i++) {
            if (shorts[i].ariaLabel === "Shorts") {
                shorts[i].style.display = "none"
                break;
            }
        }
        shortsNav = document.getElementsByTagName("ytd-guide-entry-renderer");
        console.log(shortsNav)
        for (let i = 0; i < shortsNav.length; i++) {
            if (i === 1) {
                shortsNav[i].style.display = "none"
                break;
            }
        }
    }
    remS()
}