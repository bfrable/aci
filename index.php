<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
    <title>Boilerplate</title>

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/build/styles/main.min.css">

  </head>

  <body>

    <!--[if lt IE 10]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <?php include 'includes/header.php'; ?>

    <div id="main">

        <div id="canvas">
            <canvas id="background" width="1280" height="720"></canvas>
        </div>

        <div id="canvas-content">
        </div>

    </div>

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
