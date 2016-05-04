var dani = {};
dani.modals = {
};

dani.modals.basicHtml =
    "<div class=&quotmodal modal-fullscreen fade&quot id=&quotproject-mittelm.txt&quot tabindex=&quot-1&quot role=&quotdialog&quot>"+
    "<div class=&quotmodal-dialog&quot>"+
    "<div class=&quotmodal-content&quot>"+
    "<div class=&quotmodal-header&quot>"+
    "<button type=&quotbutton&quot class=&quotclose&quot data-dismiss=&quotmodal&quot aria-label=&quotClose&quot><span aria-hidden=&quottrue&quot>&times;</span></button>"+
"<h1>Expedition Tortuga</h1>"+
"<span class=&quotunderline-white&quot> </span>"+
    "<h3>Annika Mittelmeier</h3>"+
"<img class = &quotmodal-img lazy&quot src=&quotimg/projekte/project_mittelm.jpg&quot alt=&quotProject&quot>"+
    "</div>"+

    "<div class=&quotmodal-body&quot>"+
    "<div class=&quotcontainer-fluid&quot>"+
    "<div class=&quotrow&quot>"+
    "<div class=&quotcol-sm-12&quot>"+
    "<p>"+
    "<span class=&quotfirstletter&quot>E</span>"+
    "</p>"+
    "</div>"+
    "</div> <!-- / row -->"+
"</div>"+
"</div>"+
"<div class=&quotmodal-footer&quot>"+
    "</div>"+

    "</div><!-- /.modal-content -->"+
    "</div><!-- /.modal-dialog -->"+
    "</div><!-- /.modal -->";

dani.modals.addModal = function(id) {
    jQuery.get('include/modals/'+id+".txt", function(data) {
        var splitted = data.split("--_-");
        $("#modalImg").attr("src", splitted[0]);
        var toAppendTo = $( "#modalHeader" );
        toAppendTo.html( splitted[1] );
        toAppendTo = $( "#modalName" );
        toAppendTo.html( splitted[2] );
        toAppendTo = $( "#modalText" );
        var txt = "<span class='firstletter'>"+splitted[3].slice(2,3)+"</span>"+splitted[3].slice(3,1000);
        toAppendTo.html( txt );
    });
};

$(window).on('shown.bs.modal', function(e) {
    var id = $(e.relatedTarget).data('projekt-id');
    dani.modals.addModal(id);
});
