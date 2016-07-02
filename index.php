<!DOCTYPE html>
<html lang="de">
<head>
    <title>SENSEVEN &middot; Die Ausstellung mit dem 7. Sinn</title>
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
    <div id="nav">
      <div class="navbar navbar-static">
        <div class="container-fluid">
          <a class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" title="Menü öffnen/schließen">
            	<span class="fa fa-navicon"></span>
          </a>
          <div class="navbar-collapse collapse">
                <ul class="nav pull-left navbar-nav">
                	<li><h1 class="logo" title="SENSEVEN"><img src="img/logo_font_w.png" class="img-responsive" alt="SENSEVEN" /></h1></li>
                </ul>
                <ul class="nav pull-right list-inline navbar-nav">
                      <li><a href="#ueber-uns" data-toggle="collapse" data-target=".navbar-collapse" class="page-scroll" title="gehe zu Über uns">über uns</a></li>
                      <li><a href="#projekte" data-toggle="collapse" data-target=".navbar-collapse" class="page-scroll" title="gehe zu Projekte">projekte</a></li>
                      <li><a href="#ausstellung" data-toggle="collapse" data-target=".navbar-collapse" class="page-scroll" title="gehe zu Ausstellung">ausstellung</a></li>
                      <li><a href="#kontakt" data-toggle="collapse" data-target=".navbar-collapse" class="page-scroll" title="gehe zu Kontakt">kontakt</a></li>  
                      <li><a href="#presse" data-toggle="collapse" data-target=".navbar-collapse" class="page-scroll" title="gehe zu Presse">presse</a></li>                       
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

</div> <!-- / wrapper-->

<!-- modals -->
<?php include("include/modals/modalbasic.php"); ?>
<?php include("include/modals/disclaimer.php"); ?>
<?php include("include/modals/credits.php"); ?>

    

<script async src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script src="js/jquery.min.js"></script>
<script src="js/jquery.unveil.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/modalx.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/three.min.js"></script>

<!-- bootstrap scripts etc -->
<script src="js/power.js"></script>
<!-- background line animation  -->
<script src="js/projector.min.js"></script>
<script src="js/initBackground.js"></script>
<!-- animated background color -->
<script src="js/color.min.js"></script>

<script>function initialize(){var e=new google.maps.LatLng(48.13345345425224,11.589881661376921),a={zoom:14,sensor:!1,center:e,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,google.maps.MapTypeId.SATELLITE,"map"]}},p=new google.maps.Marker({position:e,map:s,title:"Muffatwerk | Studio 2"}),o=[{featureType:"all",stylers:[{saturation:-100},{gamma:.9}]}],t=new google.maps.StyledMapType(o,{name:"Grau"}),s=new google.maps.Map(document.getElementById("map_canvas"),a);s.mapTypes.set("map",t),s.setMapTypeId("map"),s.setOptions({scrollwheel:!1}),p.setMap(s)}</script> 
<!-- Preloading Images --> 
<script>pic = new Image();pic.src="img/logo_bg.png";</script>


</body>
</html>