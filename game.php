<!DOCTYPE HTML>
<?php $page = "game"; ?>
<html>
    <head>
        <title>LudiSound - Game</title>

        <!-- Style related to JS -->
        <style>
            #image-state {width: 98%; height:100%; position: absolute; top:0px; z-index: 100;}
            #image-drunk { width: 100%;  height: 100%; display: none; opacity: 0.6; position: absolute; top:0px; z-index: 100;}
            #image-drunk-smoke { width: 100%;  height: 100%; display: none; opacity: 0.2; position: absolute; top:0px; z-index: 100;}
            #image-drugged { width: 100%;  height: 100%; display: none; opacity: 0.2; position: absolute; top:0px; z-index: 100;}
            #preload-01 { background: url(include/images/state-drugged.gif) no-repeat -9999px -9999px; }
            #preload-02 { background: url(include/images/state-drunk-smoke.gif) no-repeat -9999px -9999px; }
            #crossfadeAmbientDrunk {display: none;}

        </style>

        <!-- CSS & JS + Responsive-->
        <?php require_once "include/pages/meta.php"; ?>
        <!-- jQuery -->
        <script src="include/js/jquery-1.11.1.js"></script>
        <!-- Pace (Progress bar) -->
        <script src="include/js/pace.min.js"></script>
        <!-- Algorithm helpers -->
        <script src="include/js/helpers.js"></script>
        <!-- Algorithms -->
        <script src="include/js/algos/RoomMaze.js"></script>
        <!-- Functions & Parameters -->
        <script src="include/js/functions.js"></script>
        <script src="include/js/params.js"></script>
        <!-- API AUDIO (howler) - Sounds Static -->
        <script src="include/js/api-audio/howler.min.js"></script>
        <script src="include/js/sounds.js"></script>
        <!-- Map -->
        <script src="include/js/map.js"></script>
        <!-- Time -->
        <script src="include/js/time.js"></script>
        <!-- Levels -->
        <script src="include/js/levels.js"></script>
        <!-- API AUDIO (html5) - Sounds Dynamic  -->
        <script src="include/js/api-audio/shared.js"></script>
        <script src="include/js/api-audio/crossfade-drunk.js"></script>
        <!-- Main runner -->
        <script src="main.js"></script>

    </head>
    <body id="game">
        <!-- Preload les images lourdes -->
        <div id="preload-01"></div>
        <div id="preload-02"></div>
        <!-- Input Api audio -->
        <input id="crossfadeAmbientDrunk" type="range" min="0" max="100" value="0">
        <!-- Conteneur du site -->
        <section id="container">
            <!-- Menu -->
            <?php require_once "include/pages/menu.php"; ?>
            <!-- Contenu de la page -->
            <article id="content" role="main">
                <div id="container-canvas">
                    <!-- Liste des infos de la partie -->
                    <ul id="liste-info-game">
                        <li id="li-info-new-game">New game</li>
                        <li id="li-info-stage">Stage: <span id="info-stage">1</span></li>
                        <li><img src="include/images/sphere-level.png" alt="sphere-level" title="Votre Niveau sphère" />: <span id="info-sphere">0</span></li>
                        <li><img src="include/images/heart.png" alt="heart" title="Nombre de point de vie" />: <span id="info-health">3</span></li>
                        <li><img src="include/images/hero-enraged.png" alt="hero-enraged" title="Nombre d'Enragement utilisés"/>: <span id="info-enraged">0</span></li>
                        <li><img src="include/images/monster-blood.png" alt="monster-blood" title="Nombre de monstre tués"/>: <span id="info-monster">0</span></li>
                        <li><img src="include/images/chest.png" alt="chest" title="Nombre de coffres ramassés"/>: <span id="info-chest">0</span></li>
                        <li><img src="include/images/clock.png" alt="clock" title="Nombre de chrono récupérés"/>: <span id="info-clock">0</span></li>
                        <li><img src="include/images/alcool-rhum.gif" alt="alcool-rhum" title="Nombre d'alcool bu"/>: <span id="info-alcool">0</span></li>
                        <li><img src="include/images/pill-twin.gif" alt="pill-twin" title="Nombre de pilules ingurgitées"/>: <span id="info-pill">0</span></li>
                        <li><img src="include/images/cleared.png" alt="cleared" title="Nombre de salle vidées"/>: <span id="info-cleared">0</span></li>
                        <li id="li-info-score">Score: <span id="info-score">0</span>pts</li>
                        <li id="li-info-time"><span id="time">00:00:00</span></li>
                    </ul>
                    <hr/>
                    <!-- Champ pseudo -->
                    <span id="text-intro">Entrez votre pseudo et appuyez sur Entrée pour commencer<br/><br/>
                        <input type="text" id="tb_pseudo" name="pseudo" maxlength="20">
                    </span>
                    <!-- Canvas du jeu -->
                    <canvas id="view"></canvas>
                    <!-- Canvas (position et texte) -->
                    <canvas id="canvas-info" width="1024" height="512"></canvas>
                </div>
                <!-- Image Over canvas on event (Drunk, Drugged) -->
                <div id="image-state">
                    <img src="include/images/state-drunk.gif" id="image-drunk"/>
                    <img src="include/images/state-drugged.gif" id="image-drugged"/>
                    <img src="include/images/state-drunk-smoke.gif" id="image-drunk-smoke"/>
                </div>
                <div class="clear"></div>
            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
        <script>
            // variable pour crossfadeAmbientDrunk
            var crossfadeAmbientDrunk = new CrossfadeSample();

            // Option Barre de chargement
            paceOptions = {
                elements: false,
                restartOnPushState: false,
                restartOnRequestAfter: false
            };
            // Track sur la page load
            Pace.track(function () {
                $.ajax({
                    url: "load.php"
                }).done(function () {
                    // Page chargée
                    pageInfo.loaded = true;
                    document.getElementById('tb_pseudo').focus();
                });
            });
        </script>

        <!-- Canvas info -->
        <script src="include/js/canvas-info.js"></script>
    </body>
</html>