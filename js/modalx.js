/**
 * singleton for all custom functions
 * @type {{}}
 */
var dani = {};
/**
 * all custom modal functions
 * @type {{}}
 */
 
dani.modals = {
};
/**
 * open a modal
 * @param id
 */
dani.modals.openModal = function(id) {
    jQuery.get('include/modals/'+id+".txt", function(data) {
        var splitted = data.split("--_-");
        $("#modalImg").attr("src", "img/projekte/" + splitted[0]);
		$("#modalImg2").attr("src", "img/fotos/" + splitted[1]);
        var toAppendTo = $("#modalHeader");
        toAppendTo.html(splitted[2]);
        toAppendTo = $("#modalName");
		toAppendTo.html(splitted[3]);
        toAppendTo = $("#modalEmail");		
        toAppendTo.html(splitted[4]);
        toAppendTo = $("#modalText");
        var txt = "<span class='firstletter'>" + splitted[5].slice(2, 3) + "</span>" + splitted[5].slice(3, 2000);
        toAppendTo.html(txt);

        //glyph percent
        if (splitted[6] != null) {
            var percentArray = splitted[6].split(",");
            console.log(percentArray);
            dani.glyph.percents = percentArray;
        } else {
            dani.glyph.percents = [1,1,1,1,1,1,1]
        }
        dani.glyph.startGlyph();
    });
};

/**
 * if phaser is loaded
 * @type {boolean}
 */
dani.phaserLoaded = false;
/**
 * glyph functions
 * @type {{}}
 */
dani.glyph = {};
/**
 * stores percent for glyph from txt
 * @type {number[]}
 */
dani.glyph.percents = [1,1,1,1,1,1,1]
/**
 * load stuff needed for the glyph
 */
dani.glyph.startGlyph =  function() {
    if(dani.phaserLoaded!=true) {
        $.get("js/glyphGenerator/phaser.js", function() {
            $.get("js/glyphGenerator/startOut.js", function() {
                dani.phaserLoaded = true;
            });
        });
    } else {
        glv.reset();
    }
};

/**
 * triggers when a modal is opened
 */
$(window).on('shown.bs.modal', function(e) {
    var id = $(e.relatedTarget).data('projekt-id');
    dani.modals.openModal(id);
});
