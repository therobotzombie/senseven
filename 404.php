<!DOCTYPE html>
<html lang="de">
<head>
    <title>Oops! Die Seite konnte nicht gefunden werden &middot; SENSEVEN &middot; Die Ausstellung mit dem 7. Sinn</title>
    <?php include("head-tags.php"); ?>
</head>
<body onload="initialize()" id="page-top" data-spy="scroll" data-target=".navbar-static"> 
    <span id="top-link-block" class="hidden">
            <a href="#top" class="btn btn-primary" title="gehe nach oben" onclick="$('html,body').animate({scrollTop:0},'slow');return false;">
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
                        <li><h1 class="logo"><a href="./index.php"><img src="img/logo_font_w.png" class="img-responsive" alt="SENSEVEN" title="gehe zur SENSEVEN Startseite" /></a></h1></li>
                    </ul>
                    <ul class="nav pull-right list-inline navbar-nav">
                          <li><a href="./index.php#ueber-uns" data-toggle="collapse" data-target=".navbar-collapse" class="page-scroll" title="gehe zu Über uns">über uns</a></li>
                          <li><a href="./index.php#projekte" data-toggle="collapse" data-target=".navbar-collapse" class="page-scroll" title="gehe zu Projekte">projekte</a></li>
                          <li><a href="./index.php#ausstellung" data-toggle="collapse" data-target=".navbar-collapse" class="page-scroll" title="gehe zu Ausstellung">ausstellung</a></li>
                          <li><a href="./index.php#kontakt" data-toggle="collapse" data-target=".navbar-collapse" class="page-scroll" title="gehe zu Kontakt">kontakt</a></li>  
                          <li><a href="./index.php#presse" data-toggle="collapse" data-target=".navbar-collapse" class="page-scroll" title="gehe zu Presse">presse</a></li>                       
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
                    <div id="canvas" class="gradient"></div>
                </section>
            </div>
            <section class="error-section">
                <div class="content-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-offset-2 col-lg-8 col-lg-offset-2 text-center">
                                <h1>404 Fehler!</h1>
                                <span class="underline-white"></span>
                                <h5>Diese gesuchte Seite wurde leider nicht gefunden!</h5>
                                <p><br/>Auf unserer Startseite findest Du jedoch alle wichtigen Informationen zur Abschlussausstellung SENSEVEN 
                                des siebten Jahrgangs Kunst und Multimedia der LMU München.</p>
                                <p><a class="btn btn-link" href="./index.php" title="Zurück zur Startseite"><i class="fa fa-angle-left"></i> &nbsp; <span class="hidden-xs">zurück </span>zur Startseite</a><br/><br/></p>
                                <p>
                                    Fehlermeldungen helfen uns außerdem dabei diese Seite zu verbessern. <br/> 
                                    Schicke einfach eine E-Mail an <a href="mailto:mail@senseven.net" target="_blank" title="E-Mail an mail@senseven.net senden">mail@senseven.net</a>. 
                                    Vielen Dank!
                                </p>
                                
                            </div>
                        </div>      
                    </div>
                </div>
  			</section>
            <section id="footer" class="footer-section">
                <?php include("footer.php"); ?>
            </section>
    </div> <!-- / wrapper-->
    
<!-- modals -->
<?php include("include/modals/disclaimer.php"); ?>
<?php include("include/modals/credits.php"); ?>

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/three.min.js"></script>
<!-- bootstrap scripts etc -->
<script src="js/power.js"></script>
<!-- background line animation  -->
<script src="js/projector.min.js"></script>
<script src="js/initBackground.js"></script>
<!-- animated background color -->
<script src="js/color.min.js"></script>
<!-- Preloading Images --> 
<script>pic = new Image();pic.src="img/logo_bg.png";</script>


</body>
</html>