<!DOCTYPE HTML>
<?php 
session_start();
$page = "home"; 
?>
<html>
    <head>
        <?php require_once "include/pages/meta.php"; ?>
        <title>LudiSound</title>
    </head>
    <body>
        <!-- Conteneur du site -->
        <section id="container">
            <!-- Header -->
            <?php require_once "include/pages/header.php"; ?>
            <!-- Menu -->
            <?php require_once "include/pages/menu.php"; ?>
            <!-- Contenu de la page -->
            <article id="content" role="main">
                <h2 id="titre-h2">Accueil</h2>
                <h3 id="titre-h3">Présentation</h3>
                <p>
                    Si vous souhaitez tester vos connaissances sur la musique en générale, Ludisound est le site qu'il vous faut.
                    Par le biais de ce site, vous pourrez jouer et apprendre par la même occasion. <br/>
                    Il vous suffit de vous laissez guider par les instructions de la section <a href="howtoplay.php" title="How to play">How to play</a> pour connaître le fonctionnement du jeu.<br/>
                    Une fois les instructions comprises vous pouvez <a href="game.php" title="Jouer">Jouer</a>.<br/>
                    Veillez à passer dans la section <a href="learning.php" title="Learning">Learning</a> pour en apprendre un peu plus sur la musique.
                    En effet, à la fin de la partie, une question vous sera posée. Si vous y répondez correctement, elle vous apportera un nombre de point non négligeable.
                </p>
                <br/>
                <p>
                    Bonne chance, vous en aurez besoin...
                </p>
            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
    </body>
</html>