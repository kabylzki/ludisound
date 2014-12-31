<!DOCTYPE HTML>
<?php $page = "game"; ?>
<html>
    <head>
        <title>LudiSound - Game</title>

        <!-- Style related to JS -->
        <style>
            #image-state {width: 1073px; height:557px ; position: absolute; top:0px;}
            #image-drunk { display: none; opacity: 0.6; position: absolute; top:0px; }
            #image-drugged { display: none; opacity: 0.2; position: absolute; top:0px;}
            #preload-01 { background: url(include/images/state-drugged.gif) no-repeat -9999px -9999px; }
        </style>

        <!-- CSS & JS + Responsive-->
        <?php require_once "include/pages/meta.php"; ?>
        <!-- jQuery -->
        <script src="include/js/jquery-1.11.1.js"></script>
        <!-- Algorithm helpers -->
        <script src="include/js/helpers.js"></script>
        <!-- Algorithms -->
        <script src="include/js/algos/RoomMaze.js"></script>
        <!-- Functions & Parameters -->
        <script src="include/js/functions.js"></script>
        <script src="include/js/params.js"></script>
        <!-- Sounds Static -->
        <script src="include/js/api-audio/howler.min.js"></script>
        <script src="include/js/sounds.js"></script>
        <!-- Map -->
        <script src="include/js/map.js"></script>
        <!-- Time -->
        <script src="include/js/time.js"></script>
        <!-- Levels -->
        <script src="include/js/levels.js"></script>
        <!-- Main runner -->
        <script src="main.js"></script>

    </head>
    <body id="game">
        <!-- Conteneur du site -->
        <section id="container">
            <!-- Menu -->
            <?php require_once "include/pages/menu.php"; ?>
            <!-- Contenu de la page -->
            <article id="content" role="main">
                <div id="container-canvas">
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
                    <span id="text-intro">Entrez votre pseudo et appuyez sur Entrée pour commencer<br/><br/>
                        <input type="text" id="tb_pseudo" name="pseudo" maxlength="20">
                        <br/><br/>
                        <img src="include/images/mouvements.png" alt="movements" />
                    </span>
                    <canvas id="view"></canvas>
                </div>
                
                <!-- Image Over canvas on event (Drunk, Drugged) -->
                <div id="image-state">
                    <img src="include/images/state-drunk.gif" id="image-drunk"/>
                    <img src="include/images/state-drugged.gif" id="image-drugged"/>
                </div>
                <div class="clear"></div>
            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
        <script>
            document.getElementById('tb_pseudo').focus();
        </script>
    </body>
</html>