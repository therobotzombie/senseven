// check screen window size and init of bigger than mobile
initBg = function() {
    //mobilecheck
    if(window.innerWidth <= 200) {
        return;
    }
    console.log("background");
        $.get("js/canvas-renderer.min.js", function () {
            $.get("js/3d-lines-animation.min.js", function () {

            });
        });
};
initBg();