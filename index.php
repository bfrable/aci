<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
    <title>ACI</title>

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="vendors/animate.css/animate.css">
    <link rel="stylesheet" href="assets/build/styles/main.min.css">

  </head>

  <body>

    <!--[if lt IE 10]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <?php include 'includes/header.php'; ?>

    <header>
        <div class="logo"><h1><a href="#">ACI</a></h1></div>
    </header>
    
    <div id="main">

        <div id="canvas">
            <canvas id="background" width="1280" height="720"></canvas>
        </div>

        <div id="canvas-content">

            <div class="panel one animated fadeIn">
                
                <div class="popout">
                    <div class="dot">+</div>
                    <div class="popout-box">
                        <h3>Real Time Fraud Protection and Prevention.</h3>
                        <p>Abnormal behavioral traits are identified to stop transactions before they are completed.</p>

                        <ul class="links">
                            <li><a href="#">Learn More</a></li>
                            <li><a href="#">Related Link</a></li>
                        </ul>
                    </div>
                </div>

                <h2>Its time to turn susceptible into secure.</h2>
            </div>

        </div>

        <div id="loader"></div>

    </div>


    <footer>
        <div class="upball"><h1><a href="#">UP</a></h1></div>
    </footer>

    <?php include 'includes/footer.php'; ?>

    <!-- vendors -->
    <script src="vendors/jquery/dist/jquery.js"></script>
    <!-- end vendors -->

    <!-- scripts -->
    <script src="assets/scripts/config.js"></script>
    <script data-main="../scripts/main" src="vendors/requirejs/require.js"></script>
    <!-- end scripts -->

  </body>
</html>
