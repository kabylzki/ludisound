<!DOCTYPE HTML>
<?php $page = "learning"; ?>
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
                
                <button id="440" onclick="playPluck(440)">Pluck 440</button>
                <button id="500" onclick="playPluck(500)">Pluck 500</button>
                <button id="600" onclick="playPluck(600)">Pluck 600</button>
                <button id="880" onclick="playPluck(880)">Pluck 880</button>
                
                
            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
    </body>
</html>