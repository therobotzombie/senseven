<!DOCTYPE html>
<html lang="de">
<head>
    <title>SENSEVEN &middot; Die Ausstellung mit dem siebten Sinn &middot; Kunst und Multimedia VII</title>
    <?php include("head-tags.php"); ?>
</head>

<body onload="initialize()" id="page-top" data-spy="scroll" data-target=".navbar-static">
    
    
<!-- back-to-top-link -->
<span id="top-link-block" class="hidden">
        <a href="#top" class="btn btn-primary" title="nach oben" onclick="$('html,body').animate({scrollTop:0},'slow');return false;">
            <i class="fa fa-chevron-up"></i>
        </a>
</span>

    
<header>
    <div id="navbg"></div>
    <!-- Begin Nav -->
    <div id="nav">
      <div class="navbar navbar-static">
        <div class="container-fluid">
          <a class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            	<span class="fa fa-navicon"></span>
          </a>
          <div class="navbar-collapse collapse">
                <ul class="nav pull-left navbar-nav">
                	<li><a class="logo"><img src="img/logo_font_w.png"  class="img-responsive" alt="SENSEVEN" /></a></li>
                </ul>
                <ul class="nav pull-right list-inline navbar-nav">
                      <li><a href="#ueber-uns" class="page-scroll">über uns</a></li>
                      <li><a href="#projekte" class="page-scroll">projekte</a></li>
                      <li><a href="#ausstellung" class="page-scroll">ausstellung</a></li>
                      <li><a href="#danke" class="page-scroll">danke</a></li>
                      <li><a href="#kontakt" class="page-scroll">kontakt</a></li>
                </ul>
          </div>		
        </div>
      </div>
    </div><!-- /.nav -->
</header>



<div class="wrapper">
    <!-- line animation background -->
        <div class="content">
            <section class="canvas-wrap">
                <div class="canvas-content">
                    <img src="img/logo_seven.png" class="seven" alt="SENSEVEN"  />
                </div>
                <div id="canvas" class="gradient"></div>
            </section>
        </div>
        
        
	<!-- content includes -->
        <section id="ueber-uns" class="ueber-uns-section">
        	<?php include("include/ueber-uns.php"); ?>
        </section>

        <section id="projekte" class="projekte-section">
        	<?php include("include/projekte.php"); ?>
        </section>
     
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="empty">
                    </div>
                </div>
            </div>
        </div>
               
        <section id="ausstellung" class="ausstellung-section">
            <?php include("include/ausstellung.php"); ?>
        </section>
        
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="empty">
                    </div>
                </div>
            </div>
        </div>    
          
        <section id="danke" class="danke-section">
        	<?php include("include/danke.php"); ?>
        </section>
        
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="empty">
                    </div>
                </div>
            </div>
        </div>         
                           
        <section id="kontakt" class="kontakt-section">
        	<?php include("include/kontakt.php"); ?>
        </section>
                     
        <section id="footer" class="footer-section">
        	<?php include("footer.php"); ?>
        </section>
        

    
    

    <!-- nur zur hilfe -->
    <div style="opacity: 0.7; font-size: 12px; height: 20px; width: 120px; z-index: 99999999999; position: fixed; bottom: 0; left: 0; background: #fff; text-align: center; ">
       <span class="visible-xs">
          screen-xs
       </span>
       <span class="visible-sm">
          screen-sm
       </span>
       <span class="visible-md">
          screen-md
       </span>
       <span class="visible-lg">
          screen-lg
       </span>
    </div>




</div> <!-- / wrapper-->

<!-- modals -->
<?php include("include/modals/modalbasic.php"); ?>
<?php include("include/modals/presse.php"); ?>



<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/modalx.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/parallax.js"></script>
<script src="js/three.min.js"></script>
<script src="js/jquery.lazyload.min.js"></script>


<script>
	$('img.lazy').lazyload({
		 effect : "fadeIn"
	});
</script>

<!-- bootstrap scripts -->
<script>
	// sticky nav
	$('#nav').affix({
		  offset: {
			top: 0
		  }
	});	
	$('#navbg').affix({
		  offset: {
			top: 75
		  }
	});
	// back to top link
    if (($(window).height() + 200) < $(document).height()) {
            $('#top-link-block').removeClass('hidden').affix({
                offset: {top: 200}
            });
     }
	// tooltips
	$("body").tooltip({ selector:'[data-toggle=tooltip]'});
	// modals
	$(".modal-fullscreen").on('show.bs.modal', function() {
	 setTimeout( function() {
		$(".modal-backdrop").addClass("modal-backdrop-fullscreen");
		}, 0);
	});
	$(".modal-fullscreen").on('hidden.bs.modal', function () {
		 $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
	});
</script>

     
<!-- Helpers -->
<script src="js/projector.js"></script>
<script src="js/canvas-renderer.js"></script>

<!-- Visualitzation adjustments -->
<script src="js/3d-lines-animation.js"></script>

<!-- Animated background color -->
<script src="js/color.js"></script>
<script src="js/main.js"></script>


<script>// <![CDATA[ 
	function initialize() { /*Standard Setup der Google Map + Hinzufügen der Schaltflächen*/ 
		var latlng = new google.maps.LatLng(48.13345345425224, 11.589881661376921); 
		var myOptions = { zoom: 16, sensor: false, center: latlng, mapTypeControlOptions: { mapTypeIds: [ google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE, 'map'] } }; 
		var marker = new google.maps.Marker({ position: latlng, map: map, title: 'Muffatwerk | Studio 2'});

		/*Eigenes Style-Array hinzufügen*/ 
		var graustufenStyle= [ { featureType: 'all', stylers: [ {saturation: -100}, {gamma: 0.90} ] }, ];
		/*Erstellen eines neuen Kartentyps*/ 
		var newMapType = new google.maps.StyledMapType( graustufenStyle, {name: "Grau"}); 
		var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
		/*Zuordnung Schaltfläche <=> Kartentyp*/ 
		map.mapTypes.set('map', newMapType); 
		map.setMapTypeId('map'); 
		map.setOptions({scrollwheel: false});
		marker.setMap(map);
	} 
	// ]]>
</script> 

<!-- Preloading Images --> 
<script>
  pic = new Image();
  pic.src="img/logo_bg.png";
</script>


</body>
</html>