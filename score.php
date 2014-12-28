<!DOCTYPE HTML>
<?php
include "connexion.php";

$page = "score";

// Récupère la question
$scores = $dbh->query('SELECT * FROM score ORDER BY score DESC LIMIT 20')->fetchAll();
?>
<html>
    <head>
        <?php require_once "include/pages/meta.php"; ?>
        <link href="include/css/score.css" rel="stylesheet" type="text/css" />
        <title>LudiSound - Purgatoire</title>
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
                <h2 id="titre-h2">Scores</h2>
                <table id="table-score">
                    <tr id="tr-titre">
                        <td>n°</td>
                        <td>Pseudo</td>
                        <td>Date</td>
                        <td class="resp">Stage</td>
                        <td class="resp"><img src="include/images/sphere-level.png" alt="sphere-level" title="Votre Niveau sphère" /></td>
                        <td class="resp"><img src="include/images/hero-enraged.png" alt="hero-enraged" title="Nombre d'Enragement utilisés"/></td>
                        <td class="resp"><img src="include/images/monster-blood.png" alt="monster-blood" title="Nombre de monstre tués"/></td>
                        <td class="resp"><img src="include/images/chest.png" alt="chest" title="Nombre de coffres ramassés"/></td>
                        <td class="resp"><img src="include/images/clock.png" alt="clock" title="Nombre de chrono récupérés"/></td>
                        <td class="resp"><img src="include/images/cleared.png" alt="cleared" title="Nombre de salle vidées"/></td>
                        <td class="resp">Question</td>
                        <td>Score</td>
                    </tr>
                    <?php
                    $i = 1;
                    foreach ($scores as $score) {
                        if ($i == 1) {
                            echo "<tr class='tr-1'>";
                            echo "<td><img src='include/images/medal-gold.png' title='gold-medal' /></td>";
                        } else if ($i == 2) {
                            echo "<tr class='tr-2'>";
                            echo "<td><img src='include/images/medal-silver.png' title='silver-medal' /></td>";
                        } else if ($i == 3) {
                            echo "<tr class='tr-3'>";
                            echo "<td><img src='include/images/medal-bronze.png' title='bronze-medal' /></td>";
                        } else {
                            echo "<tr>";
                            echo "<td>".$i."</td>";
                        }
                        echo "<td>".$score['pseudo']."</td>";
                        echo "<td>".$score['date']."</td>";
                        echo "<td class='resp'>".$score['stage']."</td>";
                        echo "<td class='resp'>".$score['level']."</td>";
                        echo "<td class='resp'>".$score['enraged_used']."</td>";
                        echo "<td class='resp'>".$score['monster_killed']."</td>";
                        echo "<td class='resp'>".$score['chest_taken']."</td>";
                        echo "<td class='resp'>".$score['clock_taken']."</td>";
                        echo "<td class='resp'>".$score['area_cleared']."</td>";
                        echo "<td class='resp'>".$score['question']."</td>";
                        echo "<td><b>".$score['score']."</b></td>";
                        echo "</tr>";
                        $i++;
                    }
                    ?>
                </table>
            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
    </body>
</html>