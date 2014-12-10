<!DOCTYPE HTML>
<?php $page = "home"; ?>
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
                <h3>Bienvenue</h3>
            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
    </body>
</html>