/**
 * singleton for all custom functions
 * @type {{}}
 */
var dani = {};
/**
 * true if mobile
 */
dani.isMobile = false;
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
        toAppendTo.html("<a href='mailto:"+splitted[4]+"'>"+splitted[4]+"</a>");
        toAppendTo = $("#modalText");
        var txt = "<span class='firstletter'>" + splitted[5].slice(2, 3) + "</span>" + splitted[5].slice(3, 2000);
        toAppendTo.html(txt);

        //glyph percent
        if (splitted[6] != null) {
            var percentArray = splitted[6].split(",");
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
dani.glyph.percents = [1,1,1,1,1,1,1];
/**
 * load stuff needed for the glyph
 */
dani.glyph.startGlyph =  function() {
    if(!dani.isMobile) {
        if(dani.phaserLoaded!=true) {
            $.get("js/glyphGenerator/phaser.min.js", function() {
                $.get("js/glyphGenerator/startOut.js", function() {
                    dani.phaserLoaded = true;
                });
            });
        } else {
            glv.reset();
        }
    }
};

/**
 * triggers when a modal is opened
 */
$(window).on('shown.bs.modal', function(e) {
    //glyph functions not on mobile, move canvas of the glyph
    if(!dani.isMobile) {
        var tempCvs = $("#modalcv").appendTo("#canvasModal");
        //tempCvs.css({"position": "absolute", "right": "-6.5em", "top": "-4.5em", "margin": "0 auto", "float": "left"});
    }
    var id = $(e.relatedTarget).data('projekt-id');
    dani.modals.openModal(id);
});

/**
 * triggers when a modal is closed
 */
$(window).on('hidden.bs.modal', function () {
    //if not mobile move glyph canvas back
    if(!dani.isMobile) {
        var tempCvs = $("#modalcv").appendTo("#canvasMain");
        tempCvs.css({
            "position": "relative",
            "margin-left": "auto",
            "margin-right": "auto",
            "width": "400px",
            "right": "",
            "top": "",
            "float": ""
        });
    }
});

/**
 * adding name list dynamically
 */
dani.tooLazyForCopyPaste = function() {
    //load text file
    jQuery.get('include/namensliste.txt', function(data) {
    //split at commas
    var splitted = data.split(",");
        //sort alphabetically
        splitted.sort();
        //find node to add name list to
    var toAppendTo = $("#namensliste");
        //long string for complete 2 row html
        var htmlString = "";
        //start html for first column
        htmlString+="<div class='col-xs-6 text-right border-right link-list'><p>";
        //add half the names
        for(var i = 0; i<Math.ceil(splitted.length)/2/*halved*/; i++) {
            //split mail and name
            var nameMail = splitted[i].split(":");
            //add mailto html
            htmlString+="<a href='mailto:"+nameMail[1]+"'>"+nameMail[0]+"</a><br/>";
        }
        htmlString+="</p></div>";
        htmlString+="<div class='col-xs-6 text-left link-list'><p>";
        //same for the next column
        for(var i = Math.ceil(splitted.length/2); i<splitted.length; i++) {
            var nameMail = splitted[i].split(":");
            htmlString+="<a href='mailto:"+nameMail[1]+"'>"+nameMail[0]+"</a><br/>";
        }
        htmlString+="</p></div>";
        toAppendTo.html(htmlString);
    });
};

/**
 * add name list dynamically on document ready
 */
$(document).ready(function() {
    //create namelist with emails of all artists and attach it name list
    dani.tooLazyForCopyPaste();
    //check if mobile
    if (window.innerWidth <= 760) {
        dani.isMobile = true;
    } else {
        dani.isMobile = false;
    }
    console.log(dani.isMobile);
    //start the glyph if mobile
    if(!dani.isMobile) {
        dani.glyph.startGlyph();
    }
});
