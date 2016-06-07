/**
 * Created by rejoin on 02.06.2016.
 */
/**
 * checkscreen window size and init of bigger than mobile
 */
initBg = function() {
    //mobilecheck
    if(window.innerWidth <= 200) {
        //break the function
        return;
    }
    console.log("background");
        $.get("js/canvas-renderer.js", function () {
            $.get("js/3d-lines-animation.js", function () {

            });
        });
};
initBg();