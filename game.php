<!DOCTYPE HTML>
<?php $page = "game"; ?>
<html>
    <head>
        <?php require_once "include/pages/meta.php"; ?>

        <title>LudiSound</title>

        <!-- Algorithm helpers -->
        <script src="helpers.js"></script>

        <!-- Algorithms -->
        <script src="algos/RoomMaze.js"></script>

        <!-- Main runner -->
        <script src="main.js"></script>
        <script src="include/js/countdown.js"></script>

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
                        <li id="li-info-score">Score: <span id="info-score">0</span>pts</li>
                        <li id="li-info-time"><span id="time">00:00:00</span></li>
                    </ul>
                    <hr/>
                    <canvas id="view"></canvas>
                </div>
                <div class="clear"></div>
            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
    </body>
</html>